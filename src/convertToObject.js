'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const spliteValues = sourceString.split(';');
  const styleObject = {};

  spliteValues.forEach((string) => {
    const trimmedString = string.trim();

    if (trimmedString.length === 0) {
      return;
    }

    const parts = trimmedString.split(':');
    const key = parts[0].trim();
    const value = parts[1].trim();

    styleObject[key] = value;
  });

  return styleObject;
}

module.exports = convertToObject;
