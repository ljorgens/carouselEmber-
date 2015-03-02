Bustle.Router.map(function(){
  this.resource('gettinit', {path: '/'}, function() {
    this.resource('article1');
    this.resource('article2');
  });
  this.resource('dancecentral');
});
