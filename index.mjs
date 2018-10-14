export default function TestClass(defaultMsg) {
  this.defaultMsg = defaultMsg;
}

TestClass.prototype = {
  _internalMsg: 'No message specified',

  _privateMethod: function(msg) {
    return msg || this.defaultMsg || this._internalMsg;
  },

  publicMethod: function (msg) {
    return this._privateMethod(msg);
  }
};

console.log(`new TestClass()
  .publicMethod():`);
console.log(`    ${new TestClass().publicMethod()}`);
console.log();

console.log(`new TestClass("Default message")
  .publicMethod():`);
console.log(`    ${new TestClass('Default message').publicMethod()}`);
console.log();

console.log(`new TestClass("Default message")
  .publicMethod("Parameter message"):`);
console.log(`    ${new TestClass('Default message').publicMethod('Parameter message')}`);
console.log();
