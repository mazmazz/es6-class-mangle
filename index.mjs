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

console.log(`new TestClass("Default message")
  .publicMethod2("Parameter message 2"):`);
console.log(`    ${new TestClass('Default message').publicMethod2('Parameter message 2')}`);
console.log();
