Router.configure({
  notFoundTemplate: 'notFound'
});

Router.route('/', {
  name: 'home'
});

Router.route('app', {
  name: 'app',
  path: '/app/:lobbyId'
});

Router.map( function () {
  this.route('home',{
    path: '/',
    waitOn: function(){
      return [IRLibLoader.load('//cdn.webrtc-experiment.com/RTCMultiConnection.js')]
    }
  });
});
