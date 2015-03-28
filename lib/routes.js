Router.configure({
  notFoundTemplate: 'notFound'
});

Router.route('/', {
  name: 'home'
});

Router.route('app', {
  name: 'app',
  path: '/app/:lobbyId',
  onBeforeAction: function() {
    this.next();
  },
  waitOn: function(){
  return [IRLibLoader.load('//cdn.webrtc-experiment.com/RTCMultiConnection.js')]
  }
});