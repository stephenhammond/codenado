Template.editor.onRendered( function() {
  var pathname = window.location.pathname.split( '/' ).pop();
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
  },
  currentTabConfig: function() {
    // return Session.get("currentTabConfig")
      return function(editor) {
      editor.setTheme('ace/theme/monokai')
      editor.getSession().setMode('ace/mode/javascript')
      editor.setShowPrintMargin(false)
      editor.getSession().setUseWrapMode(true)
    }
  }
});