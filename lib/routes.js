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
  notFoundTemplate: 'notFound'
});

Router.map(function(){
  this.route('Home', {
    path: '/',
  });

})

Router.route('/app', function(){
  // controller: AppController,
  this.layout('CodeView', {

    data: {
      title: 'Master Title'
    }
  });

});
