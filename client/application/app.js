Template.app.created = function() {
  var adjustHeights;

  adjustHeights = function() {
    var viewportHeight;
    viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    var headerHeight = $('.app-header').height();
    viewportHeight = viewportHeight - headerHeight;

    return $(".app-primary, .app-sidebar").css("min-height", viewportHeight + "px");
  };

  $(window).resize(function() {
    adjustHeights();
  });

};
