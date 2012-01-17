define(["require", "exports", "module", "./foo","./bar"], function(require, exports, module) {
var foo = require('./foo');
var bar = require('./bar');

module.exports = {
  foo: foo,
  bar: bar,
  getName: function() {
    return 'baz';
  }
};


});
