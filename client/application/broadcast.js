Template.broadcast.onRendered( function(){
	console.log("---PAGE RENDERED");

	var selectRole = document.querySelector('#selectRole');
	var launchConf = document.querySelector('#launchConf');
	var videos = document.querySelector('#videos');
	var exitConf = document.querySelector('#exitConf');

	launchConf.onclick = function() {
	  // this.disabled = true;
	  var role = selectRole.value;
	  window.connection = new RTCMultiConnection();

	  // dont-override-session allows you force RTCMultiConnection
	  // to not override default session of participants;
	  // by default, session is always overridden and set to the session coming from initiator!
	  connection.dontOverrideSession = true;

	  connection.session = {
	      audio: true,
	      video: true,
	      oneway: role == 'Anonymous Viewer'
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
	      if (role == 'Anonymous Viewer') {
	          session.join({
	              oneway: true
	          });
	      }

	      if (role == 'Co-Presenter') {
	          session.join();
	      }
	  };

	  if (role == 'Presenter')
	      connection.open({
	          sessionid: connection.channel,
	          captureUserMediaOnDemand: false
	      });
	  else
	      connection.connect(connection.channel);
	};

	exitConf.onclick = function() {
		connection.leave();
		return role = "resetted";
	}

})