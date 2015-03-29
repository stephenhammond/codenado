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



