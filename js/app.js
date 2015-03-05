var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route('about', { path: '/aboutus'} );
  this.resource('products', function() {
    this.resource('product', {path: '/:product_id'});
  });
});

App.Product = DS.Model.extend({
  title: DS.attr(),
  price: DS.attr(),
  description: DS.attr(),
  isOnSale: DS.attr()
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Product.FIXTURES = [
  {
    id: 1,
    title: 'Flint',
    price: 99,
    description: 'Flint is a ..',
    isOnSale: true
  },
  {
    id: 2,
    title: 'Kind',
    price: 199,
    description: 'Kind is a ..',
    isOnSale: true
  }
];

App.ProductsRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('product');
  }
});

App.ProductRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('product', params.product_id);
  }
});

App.IndexController = Ember.Controller.extend({
  time: function() {
    return (new Date()).toDateString()
  }.property()
});

