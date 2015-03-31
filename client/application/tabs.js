Template.tabs.events({

  'click li a.tab-link': function (e) {
    $('li a.tab-link').parent().removeClass('is-active');
    $(e.target).parent().addClass('is-active');
    var tabId = $(e.target).data('tab-id');
    if (tabId === "board") {
      Session.set('isViewingBoard', true);
      return false;
    }
    var pathname = Session.get('lobbyId');
    var docid = pathname + '-tab' + tabId;
    Session.set('isViewingBoard', false);
    Session.set('currentTab', docid);
    return false;
  }

});
