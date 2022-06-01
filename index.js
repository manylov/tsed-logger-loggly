"use strict";
exports.__esModule = true;
var logger_1 = require("@tsed/logger");
require("@tsed/logger-loggly");
var logger = new logger_1.Logger("loggerName");
logger.appenders.set("stdout", {
  type: "loggly",
  level: ["info"],
  options: {
    token: process.env.TOKEN,
    subdomain: "maximmanylov",
    tags: ["tag1"],
  },
});
logger.info({ tags: ["my-tag-1", "my-tag-2"] }, "Some message");
