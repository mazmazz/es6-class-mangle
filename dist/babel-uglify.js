!function(t){var o={};function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=o,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"e",{value:!0})},u.t=function(n,e){if(1&e&&(n=u(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.e)return n;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)u.d(t,o,function(e){return n[e]}.bind(null,o));return t},u.n=function(e){var n=e&&e.e?function(){return e.default}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="",u(u.s=0)}([function(e,n,t){"use strict";function u(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}t.r(n);var o=function(){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.u="No message specified",this.defaultMsg=e}var e,t,o;return e=n,(t=[{key:"_privateMethod",value:function(e){return e||this.defaultMsg||this.u}},{key:"publicMethod",value:function(e){return this.a(e)}}])&&u(e.prototype,t),o&&u(e,o),n}();console.log("new TestClass()\n  .publicMethod():"),console.log("    ".concat((new o).publicMethod())),console.log(),console.log('new TestClass("Default message")\n  .publicMethod():'),console.log("    ".concat(new o("Default message").publicMethod())),console.log(),console.log('new TestClass("Default message")\n  .publicMethod("Parameter message"):'),console.log("    ".concat(new o("Default message").publicMethod("Parameter message"))),console.log()}]);