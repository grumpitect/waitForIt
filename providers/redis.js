const base = require('./base');
const redis = require('redis');

const createClient = (options) => {
  const client = redis.createClient(options);

  return new Promise((resolve, reject) => {
    client.on('error', reject);
    client.on('connect', () => {
      resolve(client);
    });
  });
};

module.exports = async (options, baseParams) => {
  return base(baseParams, async () => {
    const client = await createClient(options);
    client.quit();
  });
};
