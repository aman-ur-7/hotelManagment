const dotEnv = require("dotenv");
const DB_CONNECTED = require("../../database/db");

function func() {
  dotEnv.config();
  DB_CONNECTED();
}

module.export = func();
