import { Logger } from "@tsed/logger";
import "@tsed/logger-loggly";

const logger = new Logger("loggerName");

logger.appenders.set("stdout", {
  type: "loggly",
  level: ["info"],
  options: {
    token: "de80d0cf-test-4b19-9d36-359758058768",
    subdomain: "maximmanylov",
    tags: ["tag1"],
  },
});

logger.info({ tags: ["my-tag-1", "my-tag-2"] }, "Some message");
