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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUFDLENBQUMsVUFBVUEsQ0FBQyxFQUFFO0VBQ1gsSUFBTUMsR0FBRyxHQUFHO0lBQ1JDLElBQUksRUFBRSxTQUFBQSxLQUFBLEVBQVk7TUFDZDtNQUNBLElBQUlDLEtBQUs7TUFDVEgsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUNJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFBWTtRQUNoREMsWUFBWSxDQUFDRixLQUFLLENBQUM7UUFFbkJBLEtBQUssR0FBR0csVUFBVSxDQUFDLFlBQVk7VUFDM0JMLEdBQUcsQ0FBQ00sWUFBWSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQztNQUNYLENBQUMsQ0FBQztNQUVGUCxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQ0ksRUFBRSxDQUFDLFFBQVEsRUFBRUgsR0FBRyxDQUFDTSxZQUFZLENBQUM7TUFDekRQLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDSSxFQUFFLENBQUMsT0FBTyxFQUFFSCxHQUFHLENBQUNPLGlCQUFpQixDQUFDO01BQzlEUixDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQ0ksRUFBRSxDQUFDLFFBQVEsRUFBRUgsR0FBRyxDQUFDTSxZQUFZLENBQUM7SUFDakUsQ0FBQztJQUVEQSxZQUFZLEVBQUUsU0FBQUEsYUFBVUUsQ0FBQyxFQUFFO01BQ3ZCLElBQUlDLE1BQU0sR0FBR1YsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUNXLEdBQUcsQ0FBQyxDQUFDO01BRTlDLElBQUlGLENBQUMsRUFBRTtRQUNIQSxDQUFDLENBQUNHLGNBQWMsQ0FBQyxDQUFDO01BQ3RCLENBQUMsTUFBTTtRQUNILElBQUlGLE1BQU0sQ0FBQ0csTUFBTSxHQUFHLENBQUMsRUFBRTtVQUNuQjtRQUNKO01BQ0o7TUFFQSxJQUFNQyxRQUFRLEdBQUdkLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDVyxHQUFHLENBQUMsQ0FBQztNQUVyREksRUFBRSxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtRQUM1QkMsSUFBSSxFQUFFO1VBQ0ZSLE1BQU0sRUFBTkEsTUFBTTtVQUNOSSxRQUFRLEVBQVJBO1FBQ0osQ0FBQztRQUNESyxPQUFPLEVBQUUsU0FBQUEsUUFBVUMsUUFBUSxFQUFFO1VBQ3pCcEIsQ0FBQyxDQUFDLCtCQUErQixDQUFDLENBQUNxQixRQUFRLENBQUMsUUFBUSxDQUFDO1VBQ3JEckIsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUNzQixJQUFJLENBQUNGLFFBQVEsQ0FBQztRQUNoRCxDQUFDO1FBQ0RHLFVBQVUsRUFBRSxTQUFBQSxXQUFBLEVBQVk7VUFDcEJ2QixDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQ3FCLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDbkQsQ0FBQztRQUNERyxRQUFRLEVBQUUsU0FBQUEsU0FBQSxFQUFZO1VBQ2xCeEIsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUN5QixXQUFXLENBQUMsUUFBUSxDQUFDO1VBQ2xEekIsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUNxQixRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ2xEO01BQ0osQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVEYixpQkFBaUIsRUFBRSxTQUFBQSxrQkFBQSxFQUFZO01BQzNCUixDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQ3lCLFdBQVcsQ0FBQyxRQUFRLENBQUM7TUFDeER6QixDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQ3NCLElBQUksQ0FBQyxFQUFFLENBQUM7TUFDdEN0QixDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQ1csR0FBRyxDQUFDLEVBQUUsQ0FBQztNQUNuQ1gsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUN5QixXQUFXLENBQUMsUUFBUSxDQUFDO0lBQ3JEO0VBQ0osQ0FBQztFQUVEekIsQ0FBQyxDQUFDMEIsUUFBUSxDQUFDLENBQUNDLEtBQUssQ0FBQzFCLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDO0FBQy9CLENBQUMsRUFBRTBCLE1BQU0sQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29mdC1kb2NzLy4vc3JjL2pzL2Zyb250ZW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIjsoZnVuY3Rpb24gKCQpIHtcclxuICAgIGNvbnN0IGFwcCA9IHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vSGFuZGxlIGFqYXggc2VhcmNoIGRlbGF5IDUwMG1zXHJcbiAgICAgICAgICAgIGxldCB0aW1lcjtcclxuICAgICAgICAgICAgJCgnLnNvZnRkb2NzLXNlYXJjaC1maWVsZCcpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcHAuaGFuZGxlU2VhcmNoKCk7XHJcbiAgICAgICAgICAgICAgICB9LCA3MDApO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICQoJy5zb2Z0ZG9jcy1zZWFyY2gtZm9ybScpLm9uKCdzdWJtaXQnLCBhcHAuaGFuZGxlU2VhcmNoKTtcclxuICAgICAgICAgICAgJCgnLnNvZnRkb2NzLXNlYXJjaC1jbG9zZScpLm9uKCdjbGljaycsIGFwcC5oYW5kbGVTZWFyY2hDbG9zZSk7XHJcbiAgICAgICAgICAgICQoJy5zb2Z0ZG9jcy1jYXRlZ29yeS1zZWxlY3QnKS5vbignY2hhbmdlJywgYXBwLmhhbmRsZVNlYXJjaCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlU2VhcmNoOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBsZXQgc2VhcmNoID0gJCgnLnNvZnRkb2NzLXNlYXJjaC1maWVsZCcpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZWFyY2gubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSAkKCcuc29mdGRvY3MtY2F0ZWdvcnktc2VsZWN0JykudmFsKCk7XHJcblxyXG4gICAgICAgICAgICB3cC5hamF4LnNlbmQoJ3NvZnRkb2NzX3NlYXJjaCcsIHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2gsXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnNvZnRkb2NzLXNlYXJjaC1yZXN1bHRzLXdyYXAnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnNvZnRkb2NzLXNlYXJjaC1yZXN1bHRzJykuaHRtbChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5zb2Z0ZG9jcy1zZWFyY2gtbG9hZGVyJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnNvZnRkb2NzLXNlYXJjaC1sb2FkZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLnNvZnRkb2NzLXNlYXJjaC1jbG9zZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaGFuZGxlU2VhcmNoQ2xvc2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLnNvZnRkb2NzLXNlYXJjaC1yZXN1bHRzLXdyYXAnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoJy5zb2Z0ZG9jcy1zZWFyY2gtcmVzdWx0cycpLmh0bWwoJycpO1xyXG4gICAgICAgICAgICAkKCcuc29mdGRvY3Mtc2VhcmNoLWZpZWxkJykudmFsKCcnKTtcclxuICAgICAgICAgICAgJCgnLnNvZnRkb2NzLXNlYXJjaC1jbG9zZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJChkb2N1bWVudCkucmVhZHkoYXBwLmluaXQpO1xyXG59KShqUXVlcnkpOyJdLCJuYW1lcyI6WyIkIiwiYXBwIiwiaW5pdCIsInRpbWVyIiwib24iLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiaGFuZGxlU2VhcmNoIiwiaGFuZGxlU2VhcmNoQ2xvc2UiLCJlIiwic2VhcmNoIiwidmFsIiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJjYXRlZ29yeSIsIndwIiwiYWpheCIsInNlbmQiLCJkYXRhIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiYWRkQ2xhc3MiLCJodG1sIiwiYmVmb3JlU2VuZCIsImNvbXBsZXRlIiwicmVtb3ZlQ2xhc3MiLCJkb2N1bWVudCIsInJlYWR5IiwialF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==