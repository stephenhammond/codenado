/*
  GOOD READ TO UNDERSTAND: http://www.manuel-schoebel.com/blog/iron-router-tutorial

  BOILER PLATE ROUTE CODE:
  Router.map(function(){
    this.route(name:String, options:Object);
  });

*/
Iron.utils.debug = true;

Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  // notFoundTemplate: 'notFound'
});

Router.map(function(){
  this.route('home', {
    path: '/',
    waitOn: function(){
      return [IRLibLoader.load('http://simplewebrtc.com/latest.js')];
    }
  });
})

Router.route('app', {
  name: 'app',
  path: '/app/:uniqueID',
  onBeforeAction: function() {
    this.next();
  }
});

// Router.map( function () {
//   this.route('app',{
//     waitOn: function(){
//         return [IRLibLoader.load('//simplewebrtc.com/latest.js')];
//     }
//   });
// });