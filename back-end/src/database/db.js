const mongoose = require("mongoose");
const DB_CONNECTED = async () => {
  try {
    mongoose.set("strictQuery", false);
    const CONNECT = mongoose.connect(process.env.MONGO_URL, {});
    console.log(`monogDB is connected ${(await CONNECT).connection.host}`);
  } catch (error) {
    console.error(error);
    throw new error();
  }
};

module.exports = DB_CONNECTED;
