Template.home.onRendered(function() {
    var hash = Meteor.uuid();
    var lobbyId = hash.substring(hash.length - 7);
    $('.button-app-start').attr('href', '/app/'+lobbyId);

  if (!navigator.userAgent.match(/iP(ad|hone|od)|android/gi)) {
    var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    $(".masthead").css("height", viewportHeight + "px");
  }


});
