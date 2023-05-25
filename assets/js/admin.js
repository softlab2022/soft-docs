
/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/admin.js ***!
  \*************************/
;

(function ($) {
  var app = {
    init: function init() {
      //category image select
      $(document).on('click', '.softdocs_tax_media_button', app.selectCategoryImage);
      $(document).on('click', '.softdocs_tax_media_remove', app.removeCategoryImage);
    },
    selectCategoryImage: function selectCategoryImage(e) {
      e.preventDefault();
      var custom_uploader = wp.media({
        title: 'Select Image',
        button: {
          text: 'Select Image'
        },
        multiple: false
      }).on('select', function () {
        var attachment = custom_uploader.state().get('selection').first().toJSON();
        $('#category-image-id').val(attachment.id);
        $('#category-image-wrapper').html('<img class="softdocs-category-image" src="' + attachment.url + '" />');
        $('.softdocs_tax_media_remove').addClass('show');
      }).open();
    },
    removeCategoryImage: function removeCategoryImage(e) {
      e.preventDefault();
      $('#category-image-id').val('');
      $('#category-image-wrapper').html('');
      $('.softdocs_tax_media_remove').removeClass('show');
    }
  };
  $(document).ready(app.init);
})(jQuery);
/******/ })()
;
(()=>{var e,t;e=jQuery,t={init:function(){e(document).on("click",".softdocs_tax_media_button",t.selectCategoryImage),e(document).on("click",".softdocs_tax_media_remove",t.removeCategoryImage)},selectCategoryImage:function(t){t.preventDefault();var a=wp.media({title:"Select Image",button:{text:"Select Image"},multiple:!1}).on("select",(function(){var t=a.state().get("selection").first().toJSON();e("#category-image-id").val(t.id),e("#category-image-wrapper").html('<img class="softdocs-category-image" src="'+t.url+'" />'),e(".softdocs_tax_media_remove").addClass("show")})).open()},removeCategoryImage:function(t){t.preventDefault(),e("#category-image-id").val(""),e("#category-image-wrapper").html(""),e(".softdocs_tax_media_remove").removeClass("show")}},e(document).ready(t.init)})();

