class TestClass {
  #internalMsg;

  /*#*/_privateMethod (msg) {
    return msg || this.defaultMsg || this.#internalMsg;
  }

  constructor (defaultMsg) {
    this.#internalMsg = 'No message specified';
    this.defaultMsg = defaultMsg;
  }

  publicMethod (msg) {
    return this./*#*/_privateMethod(msg);
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
