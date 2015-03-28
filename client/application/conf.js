Template.conf.onRendered( function(){

	var connection = new RTCMultiConnection("commonchannel");
	

	// easiest way to customize what you need!
	connection.session = {
	    audio: true,
	    video: true
	};

	// on getting local or remote media stream
	connection.onstream = function(e) {
	    document.body.appendChild(e.mediaElement);
	};

	// setup signaling channel
	connection.connect("commonchannel");

	// open new session
	document.querySelector('#openNewSessionButton').onclick = function() {
	    connection.open("commonchannel");
	};

})