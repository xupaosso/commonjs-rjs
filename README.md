CommonJS-style build with r.js
==============================

Boilerplate app to show how to write your modules like this...

```javascript
var foo = require('./foo');
var bar = require('./bar');

module.exports = {
  foo: foo,
  bar: bar,
  getName: function() {
    return 'baz';
  }
};
```

... and then use `r.js` to build for the browser.

Building
--------

1. Make sure you have `npm` installed and run `npm install .` to install
   dependencies.
2. Run `./build` from the root of this app.
3. Open `built/index.html` in the browser.

License
-------

MIT-Style.

