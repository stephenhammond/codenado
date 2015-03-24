Template.editor.onRendered( function() {
  var pathname = window.location.pathname.substr(1);
  var docid = pathname + '-tab1';
  Session.set('currentTab', docid);
});

Template.editor.helpers({
  currentTab: function () {
    return Session.get("currentTab");
  },
});