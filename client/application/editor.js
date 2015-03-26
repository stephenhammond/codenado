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
  }
});

Template.editor.config = function () {
  return function(editor) {
    editor.setTheme('ace/theme/monokai');
    editor.getSession().setMode('ace/mode/javascript');
    editor.setShowPrintMargin(false);
    editor.getSession().setUseWrapMode(true);
    
    $('#mode').on('change', function() {
      console.log($(this).val());
      var newMode = $(this).val();
      editor.session.setMode("ace/mode/" + newMode);
    })
  }
};