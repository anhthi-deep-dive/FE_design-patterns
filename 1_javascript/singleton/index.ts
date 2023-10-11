/**
 * Singletons are classes which can be instantiated once, and can be accessed globally.
 */

let instance;
let counter = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance");
    }

    instance = this;
  }

  getInstance() {
    return instance;
  }

  getCount() {
    return counter;
  }

  increment() {
    counter = counter + 1;
  }

  decrement() {
    counter = counter + 1;
  }
}

const counterIns = new Counter();
const moduleA = counterIns.getInstance();
moduleA.increment();
const moduleB = counterIns.getInstance();
console.log(`The counter is ${moduleB.getCount()}`);
