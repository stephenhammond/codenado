Template.editor.onRendered( function() {
  var pathname = Session.get('lobbyID');
  var docid = pathname + '-tab1';
  Session.set('isViewingBoard', false);
  Session.set('currentTab', docid);
});

Template.editor.helpers({
  currentTab: function () {
    return Session.get("currentTab");
  },
  isViewingBoard: function() {
    return Session.get("isViewingBoard");
  }
});   