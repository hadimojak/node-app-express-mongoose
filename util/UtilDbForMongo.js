const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://mojak:0015166031@nodejs-store.tbcbg.mongodb.net/shop?retryWrites=true&w=majority";
let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw " no db found";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
