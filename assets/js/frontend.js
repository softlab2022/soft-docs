
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

(()=>{var e,s;e=jQuery,s={init:function(){var c;e(".softdocs-search-field").on("keyup",(function(){clearTimeout(c),c=setTimeout((function(){s.handleSearch()}),700)})),e(".softdocs-search-form").on("submit",s.handleSearch),e(".softdocs-search-close").on("click",s.handleSearchClose),e(".softdocs-category-select").on("change",s.handleSearch)},handleSearch:function(s){var c=e(".softdocs-search-field").val();if(s)s.preventDefault();else if(c.length<3)return;var a=e(".softdocs-category-select").val();wp.ajax.send("softdocs_search",{data:{search:c,category:a},success:function(s){e(".softdocs-search-results-wrap").addClass("active"),e(".softdocs-search-results").html(s)},beforeSend:function(){e(".softdocs-search-loader").addClass("active")},complete:function(){e(".softdocs-search-loader").removeClass("active"),e(".softdocs-search-close").addClass("active")}})},handleSearchClose:function(){e(".softdocs-search-results-wrap").removeClass("active"),e(".softdocs-search-results").html(""),e(".softdocs-search-field").val(""),e(".softdocs-search-close").removeClass("active")}},e(document).ready(s.init)})();

