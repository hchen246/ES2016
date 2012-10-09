window.require.define({"templates/homeViewTemplate": function(exports, require, module) {
  module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
    helpers = helpers || Handlebars.helpers;
    var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

  function program1(depth0,data) {
    
    var buffer = "", stack1;
    buffer += "\n  			<li>";
    stack1 = depth0;
    if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
    else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "this", { hash: {} }); }
    buffer += escapeExpression(stack1) + "</li>\n  		";
    return buffer;}

    buffer += "<!--\n	Author: \n	Date: \n\n	Description: Template Description\n-->\n\n<div id=\"content\">\n  <div id=\"artist\">";
    foundHelper = helpers.artist;
    stack1 = foundHelper || depth0.artist;
    if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
    else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "artist", { hash: {} }); }
    buffer += escapeExpression(stack1) + "</div>\n  <div id=\"operas\">\n  	<ul>\n  		";
    foundHelper = helpers.operas;
    stack1 = foundHelper || depth0.operas;
    stack2 = helpers.each;
    tmp1 = self.program(1, program1, data);
    tmp1.hash = {};
    tmp1.fn = tmp1;
    tmp1.inverse = self.noop;
    stack1 = stack2.call(depth0, stack1, tmp1);
    if(stack1 || stack1 === 0) { buffer += stack1; }
    buffer += "\n  </div>\n</div>\n";
    return buffer;});
}});

