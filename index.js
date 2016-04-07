/**
 * @param {Array} data
 */
function CircularList (data) {
  if (!data) {
    this.pointer = null;
    this.data = [];
  }
  else if (!Array.isArray(data)) {
    throw new Error('data parameter must be an array');
  }
  else {
    this.pointer = null;
    this.data = data;
  }
}

/**
 * Iterates the pointer of the list forward
 */
CircularList.prototype.iterate = function () {
  if (this.pointer === null) {
    this.pointer = 0;

    return this;
  }

  this.pointer++;

  if (this.pointer >= this.getSize()) {
    this.pointer = 0;
  }

  return this;
};
/**
 * Iterates the pointer of the list forward
 */
CircularList.prototype.forward = function () {
  return this.iterate();
};

/**
 * Iterates the pointer of the list backward
 */
CircularList.prototype.backward = function () {
  if (this.pointer === null) {
    this.end();

    return this;
  }

  this.pointer--;

  if (this.pointer < 0) {
    this.end();
  }

  return this;
};

/**
 * Iterates to the first element
 */
CircularList.prototype.rewind = function () {
  this.pointer = null;

  return this;
};

/**
 * Iterates to the end of the list
 */
CircularList.prototype.end = function () {
  this.pointer = this.data.length - 1;

  return this;
};

/**
 * Returns list size
 * @returns {Number}
 */
CircularList.prototype.getSize = function () {
  return this.data.length;
};

/**
 * Returns current value
 * @returns {*}
 */
CircularList.prototype.getCurrent = function () {
  if (this.pointer >= this.data.length) {
    return null;
  }

  return this.data[this.pointer];
};

/**
 * Iterates to next and returns the value
 * @returns {*}
 */
CircularList.prototype.getNext = function () {
  this.iterate();
  return this.getCurrent();
};

/**
 * Iterates to previous and returns the value
 */
CircularList.prototype.getPrevious = function () {
  this.backward();
  return this.getCurrent();
};

/**
 * Adds a value to the list
 *
 * @param value
 */
CircularList.prototype.add = function (value) {
  this.data.push(value);

  return this;
};

/**
 * Removes a value from the list, updates the pointer accordingly
 * @param value
 */
CircularList.prototype.remove = function (value) {
  var index;
  if ((index = this.data.indexOf(value)) !== -1) {
    this.data = this.data.slice (index, 1);

    if (this.pointer >= this.getSize()) {
      this.rewind();
    }
  }
  return this;
};

module.exports = CircularList;
