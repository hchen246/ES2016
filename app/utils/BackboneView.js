/**
 * View Description
 *
 * @langversion JavaScript
 *
 * @author
 * @since
 */

var View     = require('core/View');
var template = require('templates/HomeViewTemplate');

var BackboneView = View.extend({

  className: 'view',

  template: template,


  initialize: function() {
    this.render = _.bind( this.render, this );
  },


  render: function() {
    this.$el.html( this.template({
      content: "View Content"
    }));

    return this;
  }

});

module.exports = BackboneView;
