const utils = require('../utils');

module.exports = async ({
  retryTimeout = 2000,
  timeout = -1,
} = {}, checkerFunction) => {
  let isTimedOut = false;

  if (timeout > 0) {
    setTimeout(() => {
      isTimedOut = true;
    }, timeout);
  }

  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (isTimedOut) {
      break;
    }

    try {
      await checkerFunction();
      break;
    } catch (ex) {
      await utils.wait(retryTimeout);
    }
  }

  if (isTimedOut) {
    return false;
  }

  return true;
};
