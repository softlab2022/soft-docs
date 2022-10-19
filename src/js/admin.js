;(function ($) {
    const app = {
        init: function () {
            //category image select
            $(document).on('click', '.softdocs_tax_media_button', app.selectCategoryImage);
            $(document).on('click', '.softdocs_tax_media_remove', app.removeCategoryImage);
        },

        selectCategoryImage: function (e) {
            e.preventDefault();

            var custom_uploader = wp.media({
                title: 'Select Image',
                button: {
                    text: 'Select Image'
                },
                multiple: false
            })
                .on('select', function () {
                    var attachment = custom_uploader.state().get('selection').first().toJSON();

                    $('#category-image-id').val(attachment.id);
                    $('#category-image-wrapper').html('<img class="softdocs-category-image" src="' + attachment.url + '" />');

                    $('.softdocs_tax_media_remove').addClass('show');
                })
                .open();
        },

        removeCategoryImage: function (e) {
            e.preventDefault();
            $('#category-image-id').val('');
            $('#category-image-wrapper').html('');
            $('.softdocs_tax_media_remove').removeClass('show');
        },
    }

    $(document).ready(app.init);

})(jQuery);