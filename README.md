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
