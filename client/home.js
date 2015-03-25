Template.home.events({
  'click button#random_url': function(){
    var randomUrl = makeid();
    Session.set('lobyID', randomUrl);
    Router.go('/editor/' + randomUrl);
  }
});

function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 9; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
};