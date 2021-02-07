const Koa = require('koa');
const app = new Koa();

const handler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.body = {
      message: err.message
    };
  }
};

const main = (ctx,next) => {
  console.log("lalalal……");
  next();
  console.log("llllll=====>");
};

const three = (ctx)=>{
  ctx.throw(500);
}

app.use(handler);
app.use(main);
//app.use(three);//这样是不行的  会直接报错，catch捕获不到多层以下的错误
app.listen(3011);
