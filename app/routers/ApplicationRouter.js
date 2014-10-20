/**
 * Backbone Primary Router
 *
 * @langversion JavaScript
 *
 * @author
 * @since
 */

var Router = require('core/Router');
var application = require('Application');

var ApplicationRouter = Router.extend({

  routes: {
    '': 'home'
  },

  home: function() {
    $('body').html(application.homeView.render().el);
  }

});

module.exports = ApplicationRouter;
