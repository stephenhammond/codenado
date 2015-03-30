Template.tabs.events({

  'click li a.tab-link': function (e) {
    $('li a.tab-link').parent().removeClass('is-active');
    $(e.target).parent().addClass('is-active');
    var tabID = $(e.target).data('tab-id');
    if (tabID === "board") {
      Session.set('isViewingBoard', true);
      return false;
    }
    var pathname = window.location.pathname.split( '/' ).pop();
    var docid = pathname + '-tab' + tabID;
    Session.set('isViewingBoard', false);
    Session.set('currentTab', docid);
    return false;
  }

});
