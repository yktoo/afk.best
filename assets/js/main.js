$(document).ready(function () {
    let timer;
    let reCleanup = /[^a-zа-яё0-9]+/g;

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

    // Perform abbreviation search
    function doSearch() {
        clearTimer();
        let search = $('#search-text').val().toLowerCase().replace(reCleanup, '');
        let cnt = 0;
        $('#abbr-table tr').each(function () {
            let abbr = $('td', this).text().toLowerCase().replace(reCleanup, '');
            if (search.length > 0 && abbr.includes(search)) {
                setVisible($(this), true);
                cnt++;
            } else {
                setVisible($(this), false);
            }
        });

        // Adjust result count panels
        setVisible($('#results-none'),    search.length > 0 && cnt === 0);
        setVisible($('#results-present'), search.length > 0 && cnt > 0);
        $('#result-count').html(cnt);
    }

    // Add a search pattern change listener
    $('#search-text').on('keyup change paste search', function (e) {
        clearTimer();
        timer = setTimeout(doSearch, 500);
    });

    // Init some examples
    let rows = $('#abbr-table tr');
    let exList = $('#search-help');
    for (var i = 0; i <=3; i++) {
        let idx = Math.floor(Math.random() * rows.length);
        let row = rows.eq(idx);
        exList.append('<a class="search-example" href="#">' + $('td:first-child', row).text() + '</a>')
    }
    $('.search-example').click(function (event) {
        event.preventDefault();
        $('#search-text').val($(this).text());
        doSearch();
    });
});