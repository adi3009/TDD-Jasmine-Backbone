_.templateSettings = {
  evaluate:    /\{\{#([\s\S]+?)\}\}/g,            // evaluate javascript code <% print("evaluate") %> {{# print("evaluate") }}
  interpolate: /\{\{[^#\{]([\s\S]+?)[^\}]\}\}/g,  // interpolate variables, <%= title %> {{ title }}
  escape:      /\{\{\{([\s\S]+?)\}\}\}/g         // HTML escaped, <%- %> {{{ title }}}
};