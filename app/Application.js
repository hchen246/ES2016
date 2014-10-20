/**
 * Application Bootstrapper
 *
 * @langversion JavaScript
 *
 * @author
 * @since
 */

var Application = {

  initialize: function() {

    var HomeView = require('views/HomeView');
    var ApplicationRouter = require('routers/ApplicationRouter');

    this.homeView = new HomeView();
    this.applicationRouter = new ApplicationRouter();

    if (typeof Object.freeze === 'function') Object.freeze(this);
  }
}

module.exports = Application;
