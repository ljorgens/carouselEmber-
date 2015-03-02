Bustle.GettinitController = Ember.Controller.extend({
  articlesShowing: false,
  actions: {
    showArticles: function() {
      this.set('articlesShowing', true);
    },
    hideArticles: function() {
      this.set('articlesShowing', false);
    }
  }
});
