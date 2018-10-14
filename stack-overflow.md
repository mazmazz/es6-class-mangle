# Mangle ES6 class properties and methods, then transpile with Babel?

`ecmascript-6 webpack babeljs babel-loader uglifyjs`

I am trying to mangle ES6 class properties using Webpack 4 with the below example class. `_privateNames` need to be mangled, `publicNames` are left alone.

    class TestClass {
      constructor (defaultMsg) {
        this._internalMsg = 'No message specified';
        this.defaultMsg = defaultMsg;
      }

      _privateMethod (msg) {
        return msg || this.defaultMsg || this._internalMsg;
      }

      publicMethod (msg) {
        return this._privateMethod(msg);
      }
    };

Normally in ES5, this is simply done using UglifyJS and regex `/^_/`.

However, I want to transpile this ES6 code using Babel, but Babel [does not currently mangle class properties](https://github.com/babel/minify/issues/835#issuecomment-388025487). See also [this open feature request](https://github.com/babel/minify/issues/358).

I cannot mangle using UglifyJS as a post-step because Babel outputs class methods as `key: 'methodName', value: function(){}`. While UglifyJS handles class properties correctly, it cannot handle method names because they're stored as strings:

    function () {
      function n(e) {
        ! function (e, n) {
          if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }(this, n), this.u = "No message specified", this.defaultMsg = e
      }
      var e, t, o;
      return e = n, (t = [{
        key: "_privateMethod", // <-- un-mangled method name
        value: function (e) {
          return e || this.defaultMsg || this.u
        }
      }, {
        key: "publicMethod",
        value: function (e) {
          return this.a(e) // <-- mangled method call
        }
      }]) && u(e.prototype, t), o && u(e, o), n
    }

Is there a workaround to this? My best idea is to use [Terser](https://github.com/terser-js/terser), an ES6 minifier, before running Babel. Terser outputs this, which Babel would handle correctly:

    class TestClass {
      constructor(e) {
        this.u = "No message specified", this.defaultMsg = e
      }
      a(e) {
        return e || this.defaultMsg || this.u
      }
      publicMethod(e) {
        return this.a(e)
      }
    }

However, I don't know if it's possible to run `terser-webpack-plugin` before `babel-loader`. [See webpack config here](https://github.com/mazmazz/es6-class-mangle/blob/master/webpack.config.js#L67).

Any other ideas? [I have a repo here](https://github.com/mazmazz/es6-class-mangle) to test a few solutions.

## Buble

This scenario does work with [Buble](https://github.com/Rich-Harris/buble) and UglifyJS, because Buble outputs classes as function prototypes. However, I would prefer to use Babel because of the more extensive polyfill support.

    var o = function (e) {
      this.u = "No message specified", this.defaultMsg = e
    };
    o.prototype.a = function (e) {
      return e || this.defaultMsg || this.u
    }, o.prototype.publicMethod = function (e) {
      return this.a(e)
    }
