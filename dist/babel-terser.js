!function(e){var n={};function t(o){if(n[o])return n[o].exports;var s=n[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"e",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.e)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)t.d(o,s,function(n){return e[n]}.bind(null,s));return o},t.n=function(e){var n=e&&e.e?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var o=function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.u="No message specified",this.defaultMsg=n;var t=this;function o(e){return e||t.defaultMsg||t.u}this.publicMethod=function(e){return o(e)},this.publicMethod2=function(e){return console.log("Hello world"),o(e)}};console.log("new TestClass()\n  .publicMethod():"),console.log("    ".concat((new o).publicMethod())),console.log(),console.log('new TestClass("Default message")\n  .publicMethod():'),console.log("    ".concat(new o("Default message").publicMethod())),console.log(),console.log('new TestClass("Default message")\n  .publicMethod("Parameter message"):'),console.log("    ".concat(new o("Default message").publicMethod("Parameter message"))),console.log(),console.log('new TestClass("Default message")\n  .publicMethod2("Parameter message 2"):'),console.log("    ".concat(new o("Default message").publicMethod2("Parameter message 2"))),console.log()}]);