var foo = require('./foo');
var bar = require('./bar');

module.exports = {
  foo: foo,
  bar: bar,
  getName: function() {
    return 'baz';
  }
};

