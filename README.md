# es6-class-mangle

Demo to test class property mangling with [webpack](https://github.com/webpack/webpack) using [babel](https://github.com/babel/babel), [buble](https://github.com/Rich-Harris/buble), and [UglifyJS2](https://github.com/mishoo/UglifyJS2).

The expected result: leave `public` properties unmangled and mangle `_private` properties.

## Run

```
npm install
npm run build
npm test
```

## Result

`babel-loader` does not handle this scenario because it stores class methods as `key: 'methodName', value: function(){}`. Mangling with `uglify-webpack-plugin` as a post-step does not affect the source method.

Using `terser-webpack-plugin` would be nice if it could mangle the ES6 class *before* `babel-loader` is run.

`buble` and `uglify-webpack-plugin` handle this scenario properly with regex `/^_/` because `buble` outputs the class as a function prototype.

## Info

As of October 14 2018, `babel-minify` [does not currently support class properties](https://github.com/babel/minify/issues/835#issuecomment-388025487).

>  babel-minify does NOT mangle (or remove) properties and methods. It's really hard to predict safely all the usages of properties and methods with how babel-minify works or understands the code patterns.
>
>  Aside: In future, we might add mangling of [Private Fields](https://github.com/tc39/proposal-class-fields#private-fields) after it lands in the specification.

Unfulfilled feature request for regex: [Support specifying which property names to mangle](https://github.com/babel/minify/issues/358)

## Stage 3 Private Properties

Babel *does* have support for private properties/methods in the pipeline. Properties are properly mangled.

**HOWEVER:** As of October 14 2018, there is no support plugin for private methods! [List of packages](https://github.com/babel/babel/tree/master/packages), [Open issue](https://github.com/babel/babel/issues/8790)

### Resources

* [Article on class private members](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html)
* [Static Class Features: Stage 3](https://github.com/babel/babel/issues/8052)

#### Applied

* [Private properties PR](https://github.com/babel/babylon/pull/260)
* [Private class methods issue](https://github.com/babel/proposals/issues/22)
* [Private class methods PR](https://github.com/babel/babel/pull/8654)
* [Underscore transform plugin](https://www.npmjs.com/package/babel-plugin-transform-private)
    * Would be good for ES6 browser compat, but **does not mangle names**!

#### Outdated

Instead of using Stage 3 preset, [I need to use the specific plugin](https://babeljs.io/blog/2018/07/27/removing-babels-stage-presets#migrating).

* [Use with Babel 7 and Stage 3 preset](https://stackoverflow.com/a/52237988/241046)
* [Babel REPL example](https://babeljs.io/repl/build/master/#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=MYGwhgzhAEBiD29oG8BQ1oGIBmjoF5oBWdLAIzACcDoA2UgFwFMIGAKAShVI2HgDsI8EEwB0IeAHM2DABYBLCKJyIANNDmLlFSh1IBfVIdR9BDaNhr8mAdziJU2Uc1acgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=true&targets=&version=7.0.0)

### Constructor private variables

An alternate take: [declare everything in the constructor method](https://stackoverflow.com/a/34871822/241046).

```js
class TestClass {
  constructor (defaultMsg) {
    this._internalMsg = 'No message specified';
    this.defaultMsg = defaultMsg;

    var _this = this;

    function _privateMethod (msg) {
      return msg || _this.defaultMsg || _this._internalMsg;
    }

    this.publicMethod = function(msg) {
      return _privateMethod(msg);
    }

    this.publicMethod2 = function(msg) {
      console.log('Hello world');
      return _privateMethod(msg);
    }
  }
};
```
