const express = require("express");
const IMPORT_CONST = require("./src/functions/server/importConst");
const IMPORT_FUNC = require("./src/functions/server/importFn");
const Router = require("./src/Router/routes");
const cors = require("cors");
const PORT = process.env.PORT;
const APP = IMPORT_CONST.APP;

APP.use(cors());
APP.use(express.json());
APP.use(express.static("public"));
APP.use("/images", express.static("./upload"));
APP.use("/hotel", Router);
IMPORT_FUNC;

APP.listen(PORT, () => {
  console.log(`Port is running on ${PORT}`);
});
