import router from 'koa-router';
import Util from '../util/util';
const CommonRouter = router();
/**
 * 公共路由
 */
CommonRouter.get('/getTest', (ctx, next) => {
  ctx.body = "getTest body";
});

CommonRouter.get('/info', (ctx, next) => {
  // let baseUrl = Util.getBaseUrlByServiceName(ctx.params.serviceName);
  ctx.body = '{"status":"UP"}';
});

export default CommonRouter;