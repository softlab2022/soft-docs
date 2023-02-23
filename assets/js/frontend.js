/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/js/frontend.js ***!
  \****************************/
;
(function ($) {
  var app = {
    init: function init() {
      //Handle ajax search delay 500ms
      var timer;
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
    handleSearch: function handleSearch(e) {
      var search = $('.softdocs-search-field').val();
      if (e) {
        e.preventDefault();
      } else {
        if (search.length < 3) {
          return;
        }
      }
      var category = $('.softdocs-category-select').val();
      wp.ajax.send('softdocs_search', {
        data: {
          search: search,
          category: category
        },
        success: function success(response) {
          $('.softdocs-search-results-wrap').addClass('active');
          $('.softdocs-search-results').html(response);
        },
        beforeSend: function beforeSend() {
          $('.softdocs-search-loader').addClass('active');
        },
        complete: function complete() {
          $('.softdocs-search-loader').removeClass('active');
          $('.softdocs-search-close').addClass('active');
        }
      });
    },
    handleSearchClose: function handleSearchClose() {
      $('.softdocs-search-results-wrap').removeClass('active');
      $('.softdocs-search-results').html('');
      $('.softdocs-search-field').val('');
      $('.softdocs-search-close').removeClass('active');
    }
  };
  $(document).ready(app.init);
})(jQuery);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyIsInNvdXJjZXMiOlsid2VicGFjazovL3NvZnQtZG9jcy8uL3NyYy9qcy9mcm9udGVuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI7KGZ1bmN0aW9uICgkKSB7XHJcbiAgICBjb25zdCBhcHAgPSB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL0hhbmRsZSBhamF4IHNlYXJjaCBkZWxheSA1MDBtc1xyXG4gICAgICAgICAgICBsZXQgdGltZXI7XHJcbiAgICAgICAgICAgICQoJy5zb2Z0ZG9jcy1zZWFyY2gtZmllbGQnKS5vbigna2V5dXAnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwLmhhbmRsZVNlYXJjaCgpO1xyXG4gICAgICAgICAgICAgICAgfSwgNzAwKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkKCcuc29mdGRvY3Mtc2VhcmNoLWZvcm0nKS5vbignc3VibWl0JywgYXBwLmhhbmRsZVNlYXJjaCk7XHJcbiAgICAgICAgICAgICQoJy5zb2Z0ZG9jcy1zZWFyY2gtY2xvc2UnKS5vbignY2xpY2snLCBhcHAuaGFuZGxlU2VhcmNoQ2xvc2UpO1xyXG4gICAgICAgICAgICAkKCcuc29mdGRvY3MtY2F0ZWdvcnktc2VsZWN0Jykub24oJ2NoYW5nZScsIGFwcC5oYW5kbGVTZWFyY2gpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZVNlYXJjaDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgbGV0IHNlYXJjaCA9ICQoJy5zb2Z0ZG9jcy1zZWFyY2gtZmllbGQnKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gJCgnLnNvZnRkb2NzLWNhdGVnb3J5LXNlbGVjdCcpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgd3AuYWpheC5zZW5kKCdzb2Z0ZG9jc19zZWFyY2gnLCB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5zb2Z0ZG9jcy1zZWFyY2gtcmVzdWx0cy13cmFwJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5zb2Z0ZG9jcy1zZWFyY2gtcmVzdWx0cycpLmh0bWwocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuc29mdGRvY3Mtc2VhcmNoLWxvYWRlcicpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5zb2Z0ZG9jcy1zZWFyY2gtbG9hZGVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5zb2Z0ZG9jcy1zZWFyY2gtY2xvc2UnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGhhbmRsZVNlYXJjaENsb3NlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoJy5zb2Z0ZG9jcy1zZWFyY2gtcmVzdWx0cy13cmFwJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKCcuc29mdGRvY3Mtc2VhcmNoLXJlc3VsdHMnKS5odG1sKCcnKTtcclxuICAgICAgICAgICAgJCgnLnNvZnRkb2NzLXNlYXJjaC1maWVsZCcpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICQoJy5zb2Z0ZG9jcy1zZWFyY2gtY2xvc2UnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGFwcC5pbml0KTtcclxufSkoalF1ZXJ5KTsiXSwibmFtZXMiOlsiJCIsImFwcCIsImluaXQiLCJ0aW1lciIsIm9uIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImhhbmRsZVNlYXJjaCIsImhhbmRsZVNlYXJjaENsb3NlIiwiZSIsInNlYXJjaCIsInZhbCIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwiY2F0ZWdvcnkiLCJ3cCIsImFqYXgiLCJzZW5kIiwiZGF0YSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsImFkZENsYXNzIiwiaHRtbCIsImJlZm9yZVNlbmQiLCJjb21wbGV0ZSIsInJlbW92ZUNsYXNzIiwiZG9jdW1lbnQiLCJyZWFkeSIsImpRdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=