class StaticArray {
  #_arr;
  #_length;
  constructor(length) {
    this.#_length = length;
    this.#_arr = new Array(length);

    // Define a Proxy handler to trap [n] indexes and .length
    const handler = {
      get: function (target, prop, receiver) {
        if (typeof prop !== "symbol") {
          // check if prop is length
          if (prop === "length") {
            return target.length;
          }

          // check if prop is a number
          // if it is, return the value at that index
          if (typeof prop === "number" || Number.isInteger(Number(prop))) {
            return target.get(Number(prop));
          }
        }

        return Reflect.get(target, prop, receiver);
      },
      set: function (target, prop, value, receiver) {
        if (typeof prop !== "symbol") {
          // check if prop is a number
          // if it is, set the value at that index
          if (typeof prop === "number" || Number.isInteger(Number(prop))) {
            target.set(Number(prop), value);
            return true; // not sure if this should return true or undefined
          }
        }

        return Reflect.set(target, prop, value, receiver);
      },
    };

    this.set = this.set.bind(this);
    this.at = this.at.bind(this);
    this[Symbol.iterator] = this[Symbol.iterator].bind(this);

    return new Proxy(this, handler);
  }

  get length() {
    return this.#_length;
  }

  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.#_length) {
          return { value: this.#_arr[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }

  #_checkindex(index) {
    if (index < 0 || index >= this.#_length) {
      throw new RangeError(
        "Index must be between 0 and length: " + this.#_length
      );
    }
  }

  at(index) {
    this.#_checkindex(index);
    return this.#_arr[index];
  }

  get(index) {
    return this.at(index);
  }

  set(index, value) {
    this.#_checkindex(index);
    this.#_arr[index] = value;
  }
}

export default StaticArray;
