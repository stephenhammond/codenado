Template.broadcast.onRendered( function(){
	console.log("---PAGE RENDERED");

	var selectRole = document.querySelector('#selectRole');
	var launchConf = document.querySelector('#launchConf');
	var videos = document.querySelector('#videos');
	var exitConf = document.querySelector('#exitConf');
	// function resetRole(currentRole){
	// 	if (currentRole == 'Viewer' || currentRole == 'Co-Presenter') {
	// 	currentRole = "reset";
	// 	}
	// };


	launchConf.onclick = function() {
		console.log("----launchConf button clicked");
	  // this.disabled = true;
	  var role = selectRole.value;
	  console.log(role);
	  console.log('-----------after Role, before window.connection---');
	  window.connection = new RTCMultiConnection();
	  console.log('-------------after window.connection--------')

	  // dont-override-session allows you force RTCMultiConnection
	  // to not override default session of participants;
	  // by default, session is always overridden and set to the session coming from initiator!
	  connection.dontOverrideSession = true;

	  connection.session = {
	      audio: true,
	      video: true,
	      oneway: role == 'Viewer'
	  };

	  connection.privileges = {
	  	canStopRemoteStream: true,
    	canMuteRemoteStream: true
	  };

	  connection.onstream = function(e) {
	  		console.log("----onStream triggered");
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
	  connection.transmitRoomOnce = true;

	  connection.onNewSession = function(session) {
	  		console.log("----onNewSession Triggered");
	      if (role == 'Viewer') {
	          session.join({
	              oneway: true
	          });
	      }

	      if (role == 'Co-Presenter') {
	          session.join();
	      }
	      else {
	      	session.leave();
	      }
	  };

	  if (role == 'Presenter')
	      connection.open({
	          sessionid: connection.channel,
	          captureUserMediaOnDemand: false
	      });
	  else
	      connection.connect(connection.channel);
	    	console.log("----connection.connect called!");

	 exitConf.onclick = function() {
		console.log("--------exitConf button clicked");
		console.log(role);
		connection.close();
		}

	};



})