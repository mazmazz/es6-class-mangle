!function(e){var n={};function t(o){if(n[o])return n[o].exports;var u=n[o]={i:o,l:!1,exports:{}};return e[o].call(u.exports,u,u.exports,t),u.l=!0,u.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"e",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.e)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var u in e)t.d(o,u,function(n){return e[n]}.bind(null,u));return o},t.n=function(e){var n=e&&e.e?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}t.r(n);var u=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.u="No message specified",this.defaultMsg=n}return function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)}(e,[{key:"_privateMethod",value:function(e){return e||this.defaultMsg||this.u}},{key:"publicMethod",value:function(e){return this.a(e)}}]),e}();console.log("new TestClass()\n  .publicMethod():"),console.log("    ".concat((new u).publicMethod())),console.log(),console.log('new TestClass("Default message")\n  .publicMethod():'),console.log("    ".concat(new u("Default message").publicMethod())),console.log(),console.log('new TestClass("Default message")\n  .publicMethod("Parameter message"):'),console.log("    ".concat(new u("Default message").publicMethod("Parameter message"))),console.log()}]);