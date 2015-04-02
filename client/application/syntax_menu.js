Template.syntaxMenu.onRendered( function() {
  Deps.autorun(function() {
    var docId = Session.get('lobbyId') +'-'+ Session.get('activeTab');
    var editor = EditorConfig.findOne({docId: docId});
    var syntaxSelected = 'javascript'
    if (editor) {
      syntaxSelected = editor.active_syntax
    }
    $('.editor-syntax').val(syntaxSelected);
  });
});