/**
 * @method checkValidation
 * @description Returns `true` if `value` is a positive number greater than 1, else `false`
 * @param {*} value The value to check
 * @returns {boolean}
 */
export const checkValidation = (value) => {
  if (!isNaN(value) && value > 1) {
    return true;
  }
  return false;
}