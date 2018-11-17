const base = require('./base');
const mongodb = require('mongodb');

module.exports = async (url, options = { useNewUrlParser: true }, baseParams) => {
  return base(baseParams, async () => {
    const client = await mongodb.MongoClient.connect(url, options);
    client.close();
  });
};
