Router.configure({
  notFoundTemplate: 'notFound'
});

Router.route('/', {
  name: 'home'
});

Router.route('app', {
  name: 'app',
  path: '/app/:lobbyId',
  // onBeforeAction: function() {
  //   var one = IRLibLoader.load('//cdn.webrtc-experiment.com/RTCMultiConnection.js',{
  //     success: function(){
  //       console.log("Successful Callback");
  //     },
  //     error: function(){
  //       console.log("Error callback");
  //     }
  //   });
  //
  //   if (one.ready()){
  //     var two = IRLibLoader.load('//cdn.webrtc-experiment.com/firebase.js');
  //     if(two.ready()){
  //       this.next();
  //     }
  //   }
  // }
});
