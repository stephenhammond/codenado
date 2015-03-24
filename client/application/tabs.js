Template.Tabs.events({

  'click li a.tab-link': function (e) {
    var tabID = $(e.target).data('tab-id');
    if (tabID === "board") {
      Session.set('isViewingBoard', true);
      console.log(tabID);
      return false;
    }
    var pathname = window.location.pathname.split( '/' ).pop();
    var docid = pathname + '-tab' + tabID;
    Session.set('isViewingBoard', false);
    Session.set('currentTab', docid);
    return false;
  }

});
