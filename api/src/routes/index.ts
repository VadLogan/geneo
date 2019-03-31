import * as Router from "koa-router";
import errorRoute from "./postError";

const combineRoutes = () => {
  const router = new Router();

  router.use(errorRoute);

  return router.routes();
};

export default combineRoutes;
