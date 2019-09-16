$(document).ready(function () {
    var timer;
    var reCleanup = /[^a-zа-яё0-9]+/g;
    var abbrRows = $('#abbr-table tr');
    var searchBox = $('#search-text');

    // Remove search timer, if any
    function clearTimer() {
        if (timer !== undefined) {
            clearTimeout(timer);
            timer = undefined;
        }
    }

    function setVisible(element, isVisible) {
        if (isVisible) {
            element.removeClass('d-none');
        } else {
            element.addClass('d-none');
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
        // Otherwise use whatever in the search box
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
                var abbr = $('td', this).text().toLowerCase().replace(reCleanup, '');
                if (abbr.includes(cleanPattern)) {
                    setVisible($(this), true);
                    cnt++;
                } else {
                    setVisible($(this), false);
                }
            });
        }

        // Adjust result display
        $('#result-count').html(cnt);
        setVisible($('#results-none'), hasPattern && cnt === 0);
        setVisible($('#results'),      hasPattern && cnt > 0);

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
    searchBox.on('keyup change paste', function (e) {
        clearTimer();
        timer = setTimeout(doSearch, 500);
    });
    searchBox.on('search', function () {
        doSearch();
    });

    // Add a history change listener
    $(window).on('popstate', searchCurHash);

    // Init some examples
    var exList = $('#search-help');
    for (var i = 0; i <=3; i++) {
        var idx = Math.floor(Math.random() * abbrRows.length);
        var row = abbrRows.eq(idx);
        exList.append('<a class="search-example" href="#">' + $('td:first-child', row).text() + '</a>')
    }

    // Init example click handler
    $('.search-example').click(function (event) {
        event.preventDefault();
        doSearch($(this).text());
    });

    // Perform initial search if the URL contains a hash part
    searchCurHash();
});