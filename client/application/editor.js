Template.editor.onRendered( function() {
  var pathname = window.location.pathname.split( '/' ).pop();
  var docid = pathname + '-tab1';
  Session.set('isViewingBoard', false);
  Session.set('currentTab', docid);
  // console.log(currentTab);
});

Template.editor.helpers({
  currentTab: function () {
    return Session.get("currentTab");
  },
  isViewingBoard: function() {
    return Session.get("isViewingBoard");
  },
  config: function () {
    return function(editor) {
      editor.setTheme('ace/theme/monokai');
      editor.setShowPrintMargin(false);
      console.log(editor);
      editor.session.setMode("ace/mode/javascript");
      
      $('#selectMode').on('change', function() {
        editor.getSession().setUseWrapMode(true);
        console.log($(this).val());
        var newMode = $(this).val();
        editor.session.setMode("ace/mode/" + newMode);
      })
    }
  },
  // setMode: function() {
  //   return function(editor) {
  //     console.log('OnConnected');      
  //   }
  // }
});
      