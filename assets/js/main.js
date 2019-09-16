$(document).ready(function () {
    var timer;
    var reCleanup = /[^a-zа-яё0-9]+/g;
    var abbrRows = $('#abbr-table tr');
    var searchBox = $('#search-text');
    var resultPane = $('#results');
    var noResultsPane = $('#results-none');

    // Remove search timer, if any
    function clearTimer() {
        if (timer !== undefined) {
            clearTimeout(timer);
            timer = undefined;
        }
    }

    /**
     * Perform abbreviation search
     * @param pattern string Optional search pattern. If not given, the text in the search input is used.
     * @param noHistory bool Whether to store the search in browser history.
     */
    function doSearch(pattern, noHistory) {
        // Remove any pending timer
        clearTimer();

        // If a pattern is given, push it to the search input
        if (pattern) {
            searchBox.val(pattern);
        // Otherwise use whatever is in the search box
        } else {
            pattern = searchBox.val();
        }

        // Clean up the pattern
        var cleanPattern = pattern.toLowerCase().replace(reCleanup, '');
        var hasPattern = cleanPattern.length > 0;

        // Process the table row-by-row
        var cnt = 0;
        if (hasPattern) {
            abbrRows.each(function () {
                // Check if pattern is found in any of the row's <td>s
                var match = $('td', this)
                    .filter(function () {
                        return $(this).text().toLowerCase().replace(reCleanup, '').includes(cleanPattern);
                    })
                    .length;

                // If not, hide the row. Use Bootstrap's d-none class instead of jQuery's .toggle() because it's much,
                // much slower
                $(this).toggleClass('d-none', !match);

                // Increment found counter
                match && cnt++;
            });
        }

        // Adjust result display
        if (cnt > 0) {
            $('#result-count').html(cnt);
            resultPane.fadeIn();
        } else {
            resultPane.fadeOut();
        }
        noResultsPane.fadeTo('fast', hasPattern && cnt === 0 ? 1 : 0);

        // Update page URL
        hasPattern && !noHistory && history.pushState(null, pattern, '#' + pattern);
    }

    /**
     * Perform search based on the current URL hash
     */
    function searchCurHash() {
        if (window.location.hash.length > 1) {
            doSearch(decodeURIComponent(window.location.hash.substring(1)), true);
        }
    }

    // Add a search pattern change listener
    searchBox.on('keyup change paste', function () {
        clearTimer();
        timer = setTimeout(doSearch, 500);
    });
    searchBox.on('search', function () {
        // On pressing Enter or clearing the input, trigger search immediately
        doSearch();
    });

    // Add a history change listener
    $(window).on('popstate', searchCurHash);

    // Init some examples
    var exList = $('#search-help');
    for (var i = 0; i <=3; i++) {
        var idx = Math.floor(Math.random() * abbrRows.length);
        var row = abbrRows.eq(idx);
        var abbr = $('td:first-child', row).text();
        exList.append('<a class="search-example" href="#' + encodeURIComponent(abbr) + '">' + abbr + '</a>')
    }

    // Perform initial search if the URL contains a hash part
    searchCurHash();
});