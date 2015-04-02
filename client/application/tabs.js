Template.tabs.events({
  'click li a.tab-link': function (e) {
    $('li a.tab-link').parent().removeClass('is-active');
    $(e.target).parent().addClass('is-active');
    var tabId = $(e.target).data('tab-id');
    if (tabId === "board") {
      Session.set('isViewingBoard', true);
      return false;
    }
    Session.set('isViewingBoard', false);
    Session.set('activeTab', tabId);
    return false;
  }
});

Template.tabs.helpers({
  currentSyntax: function(tabNumber){

    var docId = Session.get('lobbyId') +'-'+tabNumber;
    var editor = EditorConfig.findOne({docId: docId});

    if (editor) {
      editor = editor.active_syntax
    } else {
      editor = "javascript";
    }

    if (editor === 'html') { editor = 'HTML' }

    if (editor === 'css') { editor = 'CSS' }

    return editor

  }

});
