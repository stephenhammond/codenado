Deps.autorun(function(){

	Template.broadcast.onRendered( function(){

		// var selectRole = document.querySelector('#selectRole');
		var launchConf = document.querySelector('#launchConf');
		var videos = document.querySelector('#videos');
		var joinConf = document.querySelector('#joinConf');


		launchConf.onclick = function() {
		  this.disabled = true;
		  var role = Meteor.user().roles;
		  window.connection = new RTCMultiConnection();

		  // dont-override-session allows you force RTCMultiConnection
		  // to not override default session of participants;
		  // by default, session is always overridden and set to the session coming from initiator!
		  connection.dontOverrideSession = true;

		  connection.session = {
	      audio: true,
	      video: true,
	      oneway: role == 'viewer'
		  };

		  connection.onstream = function(e) {
	      videos.appendChild(e.mediaElement);

	      if (e.type == 'remote') {
	          // because "viewer" joined room as "oneway:true"
	          // initiator will NEVER share participants
	          // to manually ask for participants;
	          // call "askToShareParticipants" method.
	          connection.askToShareParticipants();
	      }

	      // if you're moderator
	      // if stream-type is 'remote'
	      // if target user is broadcaster!
	      if (connection.isInitiator && e.type == 'remote' && !e.session.oneway) {
	          // call "shareParticipants" to manually share participants with all connected users!
	          connection.shareParticipants({
	              dontShareWith: e.userid
	         	});
	      }
		  };

		  connection.onNewSession = function(session) {
	      if (role == 'viewer') {
	        session.join({
	            oneway: true
	        });
	      }

	      // if (role == 'presenter' ) {
	      //     session.join();
	      // }
		  };

		  if (role == 'presenter') {
	      connection.open({
	        sessionid: connection.channel,
	        captureUserMediaOnDemand: false
	      });
	    } 
		  else {
		      connection.connect(connection.channel);
		  }    
		};

		joinConf.onclick = function() {
				// join existing sessionid
		}

	});

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
    },
    userIsPresenterAndNoConference: function () {
    	return true;
    },
    conferenceStarted: function () {
    	return true;
    }
  });
});