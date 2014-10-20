/**
 * View Base Class
 *
 * @langversion JavaScript
 *
 * @author
 * @since
 */

var View = Backbone.View.extend({

  template: function() {},


  initialize: function() {
    _.bindAll( this );
  },


  render: function() {
    this.$el.html(this.template());

    return this;
  }
});

module.exports = View;
