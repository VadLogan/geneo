import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";
import config from "./config";
import logger from "./logger";
import routes from "./routes";

import "reflect-metadata";

const check = "sdsdsdsds    ";

const { PORT } = config;

const app = new Koa();

app.use(bodyParser()).use(routes);

app.listen(PORT);

logger.log({
  level: "info",
  message: `Server is running on port - ${PORT}`
});
