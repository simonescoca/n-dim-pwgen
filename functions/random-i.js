const crypto = require('crypto');

/**
 * Generates a cryptographically secure random index
 * @param {number} arrayLength 
 * @returns a random (0 <= index < array.length) 
 */
function genRandomI(arrayLength) {
    const array = new Uint32Array(1);
    crypto.randomFillSync(array);
    const randomI = array[0] % arrayLength;
    return randomI;
}

module.exports = genRandomI;