Template.tabs.events({

  'click li a.tab-link': function (e) {
    var getTabID = $(e.target).data('tab-id');
    var pathname = window.location.pathname.substr(1);
    var docid = pathname + '-tab' + getTabID
    Session.set('currentTab', docid);

    return false
  }

});