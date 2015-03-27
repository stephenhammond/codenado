 Template.audiotest.created( function() {
 	console.log("audio testing");
 	function gotStream(stream) {
     window.AudioContext = window.AudioContext || window.webkitAudioContext;
     var audioContext = new AudioContext();

      Create an AudioNode from the stream
     var mediaStreamSource = audioContext.createMediaStreamSource(stream);

      Connect it to destination to hear yourself
      or any other node for processing!
     mediaStreamSource.connect(audioContext.destination);
 	}

 	navigator.getUserMedia({audio:true}, gotStream);
 })