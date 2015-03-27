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

Router.map(function(){
  this.route('audio', {
    path: '/audioconf.html'
  });
})


// Router.map(function(){
//   this.route('audiotest', {
//     path: '/audiotest.html'
//   });
// })
