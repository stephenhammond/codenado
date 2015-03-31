Template.editor.onRendered( function() {
  var pathname = Session.get('lobbyId');
  var docId = pathname + '-tab1';
  Session.set('isViewingBoard', false);
  Session.set('currentTab', docId);
});

Template.editor.helpers({
  currentTab: function () {
    return Session.get("currentTab");
  },
  isViewingBoard: function() {
    return Session.get("isViewingBoard");
  }
});
