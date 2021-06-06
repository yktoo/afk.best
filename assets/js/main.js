$(document).ready(function () {
    var timer;
    var reCleanup = /[^a-zа-яё0-9]+/g;
    var abbrRows = $('#abbr-table tr');
    var searchBox = $('#search-text');
    var abbrCheckbox = $('#abbr-only');
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
     * @param scope string Where to look for the text, either 'all' or 'abbr'.
     * @param noHistory bool Whether to store the search in browser history.
     */
    function doSearch(pattern, scope, noHistory) {
        // Remove any pending timer
        clearTimer();

        // If a pattern is given, push it to the search input
        if (pattern) {
            searchBox.val(pattern);
        // Otherwise use whatever is in the search box
        } else {
            pattern = searchBox.val();
        }

        // If a scope is given, push it to the controls
        if (scope) {
            abbrCheckbox.prop('checked', scope === 'abbr');
        // Use the current search settings otherwise
        } else {
            scope = abbrCheckbox.prop('checked') ? 'abbr' : 'all';
        }

        // Clean up the pattern
        var cleanPattern = pattern.toLowerCase().replace(reCleanup, '');
        var hasPattern = cleanPattern.length > 0;

        // Process the table row-by-row
        var cnt = 0;
        if (hasPattern) {
            abbrRows.each(function () {
                // Check if pattern is found in any of the row's <td>s
                var match = $(scope === 'abbr' ? 'td:first-child' : 'td', this)
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

            // Scroll the page so that the search box is at the top
            $([document.documentElement, document.body]).animate({scrollTop: searchBox.offset().top - 20}, 200);
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
        hasPattern && !noHistory && history.pushState(null, pattern, '#' + pattern + (scope === 'all' ? '' : '&' + scope));
    }

    /**
     * Perform search with all current settings, ignoring any arguments, which is convenient for binding to events.
     */
    function searchCurrent() {
        doSearch();
    }

    /**
     * Perform search based on the current URL hash
     */
    function searchCurHash() {
        if (window.location.hash.length > 1) {
            var queryParams = decodeURIComponent(window.location.hash.substring(1)).split('&');
            doSearch(queryParams[0], queryParams.includes('abbr', 1) ? 'abbr' : 'all', true);
        }
    }

    // Add a search pattern change listener
    searchBox.on('keyup change paste', function () {
        clearTimer();
        timer = setTimeout(searchCurrent, 500);
    });
    // On pressing Enter or clearing the input, trigger search immediately
    searchBox.on('search', searchCurrent);

    // Add search scope change listener
    abbrCheckbox.change(searchCurrent);

    // Disable submitting the search form
    $('#search-form').submit(function (event) {
        event.preventDefault();
        return false;
    });

    // Add a history change listener
    $(window).on('popstate', searchCurHash);

    // Init some examples
    var exList = $('#search-help');
    for (var i = 0; i <=3; i++) {
        var idx = Math.floor(Math.random() * abbrRows.length);
        var row = abbrRows.eq(idx);
        var abbr = $('td:first-child', row).text();
        exList.append('<a class="abbr-term" href="#' + encodeURIComponent(abbr) + '&abbr">' + abbr + '</a>')
    }

    // Perform initial search if the URL contains a hash part
    searchCurHash();
});
