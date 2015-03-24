Template.tabs.events({

  'click li a.tab-link': function (e) {
    var tabID = $(e.target).data('tab-id');
    var pathname = window.location.pathname.split( '/' ).pop();
    var docid = pathname + '-tab' + tabID
    Session.set('currentTab', docid);
    return false
  }

});