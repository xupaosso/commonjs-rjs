
define('foo',["require", "exports", "module"], function(require, exports, module) {
exports.getName = function() {
  return 'foo';
};


});

define('bar',["require", "exports", "module"], function(require, exports, module) {
exports.getName = function() {
  return 'bar';
};


});

define('baz',["require", "exports", "module", "./foo","./bar"], function(require, exports, module) {
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

define('main',["require", "exports", "module", "./baz"], function(require, exports, module) {
var baz = require('./baz');
console.log( baz.foo.getName() );
console.log( baz.bar.getName() );
console.log( baz.getName() );


});
