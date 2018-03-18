import uuidv1 from 'uuid/v1'

export default {
  emptyArray,
  uuid,
  stringify,
}

/**
 * Empties an array.
 * @param {array} arr array empty.
 */
function emptyArray(arr) {
  arr.length=0;
}

/**
 * Provives a UUID.
 * @returns {string} string.
 */
function uuid() {
  return uuidv1()
}

/**
 * Turns JSON object to string.
 * @param {object} data object to turn to a string.
 * @returns {string} string.
 */
function stringify(data) {
  return JSON.stringify(data, null, 2);
}



