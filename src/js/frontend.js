;(function ($) {
    const app = {
        init: function () {
            //Handle ajax search delay 500ms
            let timer;
            $('.softdocs-search-field').on('keyup', function () {
                clearTimeout(timer);

                timer = setTimeout(function () {
                    app.handleSearch();
                }, 700);
            });

            $('.softdocs-search-form').on('submit', app.handleSearch);
            $('.softdocs-search-close').on('click', app.handleSearchClose);
            $('.softdocs-category-select').on('change', app.handleSearch);
        },

        handleSearch: function (e) {
            let search = $('.softdocs-search-field').val();

            if (e) {
                e.preventDefault();
            } else {
                if (search.length < 3) {
                    return;
                }
            }

            const category = $('.softdocs-category-select').val();

            wp.ajax.send('softdocs_search', {
                data: {
                    search,
                    category,
                },
                success: function (response) {
                    $('.softdocs-search-results-wrap').addClass('active');
                    $('.softdocs-search-results').html(response);
                },
                beforeSend: function () {
                    $('.softdocs-search-loader').addClass('active');
                },
                complete: function () {
                    $('.softdocs-search-loader').removeClass('active');
                    $('.softdocs-search-close').addClass('active');
                }
            });
        },

        handleSearchClose: function () {
            $('.softdocs-search-results-wrap').removeClass('active');
            $('.softdocs-search-results').html('');
            $('.softdocs-search-field').val('');
            $('.softdocs-search-close').removeClass('active');
        }
    }

    $(document).ready(app.init);
})(jQuery);