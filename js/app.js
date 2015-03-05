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
  isOnSale: DS.attr(),
  reviews: DS.hasMany('review', {async: true})
});

App.Review = DS.Model.extend({
  text: DS.attr('string'),
  reviewedAt: DS.attr('date'),
  product: DS.belongsTo('product')
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Product.FIXTURES = [
  {
    id: 1,
    title: 'Flint',
    price: 99,
    description: 'Flint is a ..',
    isOnSale: true,
    reviews: [100,101]
  },
  {
    id: 2,
    title: 'Kind',
    price: 199,
    description: 'Kind is a ..',
    isOnSale: true
  }
];

App.Review.FIXTURES = [
  {
    id: 100,
    product: 1,
    text: 'Lorem ipsum'
  },
  {
    id: 101,
    product: 1,
    text: 'Lorem ipsum'
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

