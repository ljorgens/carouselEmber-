Bustle.GettinitController = Ember.Controller.extend({

  startPicture: 'http://www.chilloutpoint.com/images/2010/08/crazy-and-funny-sports-photos/crazy-and-funny-sports-photos-16.jpg',
  actions: {

    thisArticle: function() {
      var articles = [
        'http://www.chilloutpoint.com/images/2010/08/crazy-and-funny-sports-photos/crazy-and-funny-sports-photos-16.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVSh67zqVojLVAyxuchhChg8CKcm44gJgVqiaCd11gvDqxsJPw',
        'http://static.foxsports.com/content/fscom/img/2011/04/19/041911-Greatest-Rivalries-In-sports-Gallery-2_20110419182258639_600_400.JPG'];
        var i = articles.indexOf(this.get('startPicture'));
        this.set('startPicture', articles[i + 1]);
        console.log(i);
    }
  }
});
