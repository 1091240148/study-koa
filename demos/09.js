const Koa = require('koa');
const app = new Koa();

const one = (ctx, next) => {
  console.log('>> one');
  next();
  console.log('<< one');
}

const two = (ctx, next) => {
  console.log('>> two');
  next();//这个注释掉  three整个方法就不走了。相当于就没有执行下一个函数
  console.log('<< two');
}

const three = (ctx, next) => {
  console.log('>> three');
  // next();// 这个注释掉就不影响，且不影响进出
  console.log('<< three');
}

app.use(one);
app.use(two);
app.use(three);

app.listen(3011);
