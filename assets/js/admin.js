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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUFDLENBQUMsVUFBVUEsQ0FBQyxFQUFFO0VBQ1gsSUFBTUMsR0FBRyxHQUFHO0lBQ1JDLElBQUksRUFBRSxTQUFBQSxLQUFBLEVBQVk7TUFDZDtNQUNBRixDQUFDLENBQUNHLFFBQVEsQ0FBQyxDQUFDQyxFQUFFLENBQUMsT0FBTyxFQUFFLDRCQUE0QixFQUFFSCxHQUFHLENBQUNJLG1CQUFtQixDQUFDO01BQzlFTCxDQUFDLENBQUNHLFFBQVEsQ0FBQyxDQUFDQyxFQUFFLENBQUMsT0FBTyxFQUFFLDRCQUE0QixFQUFFSCxHQUFHLENBQUNLLG1CQUFtQixDQUFDO0lBQ2xGLENBQUM7SUFFREQsbUJBQW1CLEVBQUUsU0FBQUEsb0JBQVVFLENBQUMsRUFBRTtNQUM5QkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUU7TUFFbEIsSUFBSUMsZUFBZSxHQUFHQyxFQUFFLENBQUNDLEtBQUssQ0FBQztRQUMzQkMsS0FBSyxFQUFFLGNBQWM7UUFDckJDLE1BQU0sRUFBRTtVQUNKQyxJQUFJLEVBQUU7UUFDVixDQUFDO1FBQ0RDLFFBQVEsRUFBRTtNQUNkLENBQUMsQ0FBQyxDQUNHWCxFQUFFLENBQUMsUUFBUSxFQUFFLFlBQVk7UUFDdEIsSUFBSVksVUFBVSxHQUFHUCxlQUFlLENBQUNRLEtBQUssRUFBRSxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUNDLEtBQUssRUFBRSxDQUFDQyxNQUFNLEVBQUU7UUFFMUVwQixDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQ3FCLEdBQUcsQ0FBQ0wsVUFBVSxDQUFDTSxFQUFFLENBQUM7UUFDMUN0QixDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQ3VCLElBQUksQ0FBQyw0Q0FBNEMsR0FBR1AsVUFBVSxDQUFDUSxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBRXpHeEIsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUN5QixRQUFRLENBQUMsTUFBTSxDQUFDO01BQ3BELENBQUMsQ0FBQyxDQUNEQyxJQUFJLEVBQUU7SUFDZixDQUFDO0lBRURwQixtQkFBbUIsRUFBRSxTQUFBQSxvQkFBVUMsQ0FBQyxFQUFFO01BQzlCQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtNQUNsQlIsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUNxQixHQUFHLENBQUMsRUFBRSxDQUFDO01BQy9CckIsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUN1QixJQUFJLENBQUMsRUFBRSxDQUFDO01BQ3JDdkIsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUMyQixXQUFXLENBQUMsTUFBTSxDQUFDO0lBQ3ZEO0VBQ0osQ0FBQztFQUVEM0IsQ0FBQyxDQUFDRyxRQUFRLENBQUMsQ0FBQ3lCLEtBQUssQ0FBQzNCLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDO0FBRS9CLENBQUMsRUFBRTJCLE1BQU0sQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29mdC1kb2NzLy4vc3JjL2pzL2FkbWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjsoZnVuY3Rpb24gKCQpIHtcclxuICAgIGNvbnN0IGFwcCA9IHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vY2F0ZWdvcnkgaW1hZ2Ugc2VsZWN0XHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuc29mdGRvY3NfdGF4X21lZGlhX2J1dHRvbicsIGFwcC5zZWxlY3RDYXRlZ29yeUltYWdlKTtcclxuICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zb2Z0ZG9jc190YXhfbWVkaWFfcmVtb3ZlJywgYXBwLnJlbW92ZUNhdGVnb3J5SW1hZ2UpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNlbGVjdENhdGVnb3J5SW1hZ2U6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBjdXN0b21fdXBsb2FkZXIgPSB3cC5tZWRpYSh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NlbGVjdCBJbWFnZScsXHJcbiAgICAgICAgICAgICAgICBidXR0b246IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnU2VsZWN0IEltYWdlJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG11bHRpcGxlOiBmYWxzZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm9uKCdzZWxlY3QnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF0dGFjaG1lbnQgPSBjdXN0b21fdXBsb2FkZXIuc3RhdGUoKS5nZXQoJ3NlbGVjdGlvbicpLmZpcnN0KCkudG9KU09OKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoJyNjYXRlZ29yeS1pbWFnZS1pZCcpLnZhbChhdHRhY2htZW50LmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjY2F0ZWdvcnktaW1hZ2Utd3JhcHBlcicpLmh0bWwoJzxpbWcgY2xhc3M9XCJzb2Z0ZG9jcy1jYXRlZ29yeS1pbWFnZVwiIHNyYz1cIicgKyBhdHRhY2htZW50LnVybCArICdcIiAvPicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKCcuc29mdGRvY3NfdGF4X21lZGlhX3JlbW92ZScpLmFkZENsYXNzKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm9wZW4oKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICByZW1vdmVDYXRlZ29yeUltYWdlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICQoJyNjYXRlZ29yeS1pbWFnZS1pZCcpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICQoJyNjYXRlZ29yeS1pbWFnZS13cmFwcGVyJykuaHRtbCgnJyk7XHJcbiAgICAgICAgICAgICQoJy5zb2Z0ZG9jc190YXhfbWVkaWFfcmVtb3ZlJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGFwcC5pbml0KTtcclxuXHJcbn0pKGpRdWVyeSk7Il0sIm5hbWVzIjpbIiQiLCJhcHAiLCJpbml0IiwiZG9jdW1lbnQiLCJvbiIsInNlbGVjdENhdGVnb3J5SW1hZ2UiLCJyZW1vdmVDYXRlZ29yeUltYWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VzdG9tX3VwbG9hZGVyIiwid3AiLCJtZWRpYSIsInRpdGxlIiwiYnV0dG9uIiwidGV4dCIsIm11bHRpcGxlIiwiYXR0YWNobWVudCIsInN0YXRlIiwiZ2V0IiwiZmlyc3QiLCJ0b0pTT04iLCJ2YWwiLCJpZCIsImh0bWwiLCJ1cmwiLCJhZGRDbGFzcyIsIm9wZW4iLCJyZW1vdmVDbGFzcyIsInJlYWR5IiwialF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==