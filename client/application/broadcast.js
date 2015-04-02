Template.broadcast.events({

  'click .broadcast-list .dropdown-top-item': function (e) {
    e.preventDefault();
    $(e.target).parents('.dropdown-select-list').addClass('dropdown-is-open');
  },

  'blur .broadcast-list.dropdown-select-list': function(){
    $('.broadcast-list.dropdown-select-list.dropdown-is-open').removeClass('dropdown-is-open');
  },

  'mousedown .broadcast-list .dropdown-menu a': function(e){
    e.preventDefault();
    $this = $(e.target);
    var role = $this.data('role');

    window.connection = new RTCMultiConnection();

    connection.dontOverrideSession = true;
    connection.session = {
        audio: true,
        video: true,
        oneway: role == 'Anonymous Viewer'
    };

    connection.onstream = function(e) {
        videos.appendChild(e.mediaElement);

        if (e.type == 'remote') {
            connection.askToShareParticipants();
        }

        if (connection.isInitiator && e.type == 'remote' && !e.session.oneway) {
            connection.shareParticipants({
                dontShareWith: e.userid
            });
        }
    };

    connection.onNewSession = function(session) {
        if (role == 'Anonymous Viewer') {
            session.join({
                oneway: true
            });
        }

        if (role == 'Co-Presenter') {
            session.join();
        }
    };

    if (role == 'Presenter') {
      connection.open({
          sessionid: connection.channel,
          captureUserMediaOnDemand: false
      });
    } else {
      connection.connect(connection.channel);
    }

  }

});

Deps.autorun(function(){
  Template.broadcast.helpers({
    userIsPresenter: function () {
      if (Meteor.user()) {
        return Meteor.user().roles === "presenter";
      }
    },
    userIsViewer: function () {
      if (Meteor.user()) {
        return Meteor.user().roles === "viewer";
      }
    }
  });
});
