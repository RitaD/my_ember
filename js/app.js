var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route('about', { path: '/aboutus'} );
  this.resource('products');
  this.resource('product', {path: '/products/:title'});
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

App.ProductRoute = Ember.Route.extend({
  model: function(params) {
    return App.PRODUCTS.findBy('title', params.title);
  }
});

App.IndexController = Ember.Controller.extend({
  time: function() {
    return (new Date()).toDateString()
  }.property()
});

