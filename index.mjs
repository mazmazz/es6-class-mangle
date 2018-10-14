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
