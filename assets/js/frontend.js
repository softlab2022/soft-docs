(()=>{var e,s;e=jQuery,s={init:function(){var c;e(".softdocs-search-field").on("keyup",(function(){clearTimeout(c),c=setTimeout((function(){s.handleSearch()}),700)})),e(".softdocs-search-form").on("submit",s.handleSearch),e(".softdocs-search-close").on("click",s.handleSearchClose),e(".softdocs-category-select").on("change",s.handleSearch)},handleSearch:function(s){var c=e(".softdocs-search-field").val();if(s)s.preventDefault();else if(c.length<3)return;var a=e(".softdocs-category-select").val();wp.ajax.send("softdocs_search",{data:{search:c,category:a},success:function(s){e(".softdocs-search-results-wrap").addClass("active"),e(".softdocs-search-results").html(s)},beforeSend:function(){e(".softdocs-search-loader").addClass("active")},complete:function(){e(".softdocs-search-loader").removeClass("active"),e(".softdocs-search-close").addClass("active")}})},handleSearchClose:function(){e(".softdocs-search-results-wrap").removeClass("active"),e(".softdocs-search-results").html(""),e(".softdocs-search-field").val(""),e(".softdocs-search-close").removeClass("active")}},e(document).ready(s.init)})();