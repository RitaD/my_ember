var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route('about', { path: '/aboutus'} );
  this.resource('products');
});

App.PRODUCTS = [
  {
    title: 'Flint',
    price: 99,
    description: 'Flint is a ..',
    isOnSale: true
  },
  {
    title: 'Kind',
    price: 199,
    description: 'Kind is a ..',
    isOnSale: true
  }
];

App.ProductsRoute = Ember.Route.extend({
  model: function() {
    return App.PRODUCTS;
  }
});

App.IndexController = Ember.Controller.extend({
  time: function() {
    return (new Date()).toDateString()
  }.property()
});

