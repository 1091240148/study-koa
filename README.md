# study-koa
学习koa的笔记


项目基础模版是阮一峰大佬的[Koa框架教程](http://www.ruanyifeng.com/blog/2017/08/koa.html)。


总结：

  ·基本组成：

    const Koa = require('koa');//引入koa类
    const app = new Koa();//初始化koa类

    //中间件
    const main = （ ctx ,next ） => {
      ctx.response.body = 'Hello World';
    };

    //把中间件放到koa中
    app.use(main);

    //暂时没剖这个，暂时理解为给koa起一个服务吧。
    app.listen(3000);


  ·中间件：

    基本上，Koa 所有的功能都是通过中间件实现的。
    为一个方法，传入参数第一个是Context对象，第二个是next函数。//context函数放的是页面属性。*1
    在use中间件的时候会生成一个 先进后出 的栈结构，且只有当调用next函数之后才会执行下一个中间件。执行时当碰到没有使用next()函数的中间件时，就直接在当前中间件走“后出”的“回流”。
    当然还有异步的中间件处理方法：async+await。
    还有个“koa-compose”模块用于合并中间件。要注意的就算是合并也要执行next方法




    *1、中间件的Context对象：
      ctx.response代表 HTTP Response。
        ·Koa的Response默认的返回类型是text/plain。
        ·可以用koa-route模块来管理我们的前端路由
        ·koa-static模块可以管理我们的静态资源

      ctx.request代表 HTTP Request。




  ·错误处理：

    1.输出程序错误
      const main = ctx => {
        ctx.throw(500);
      };

    2.设置页面404

      const main = ctx => {
        ctx.response.status = 404;
        ctx.response.body = 'Page Not Found';
      };

    3.中间件处理错误（try catch ）：
    
      // demos/16.js
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

      const main = ctx => {
        ctx.throw(500);
      };

      app.use(handler);
      app.use(main);


    4. error 事件的监听

      // demos/17.js
      const main = ctx => {
        ctx.throw(500);
      };

      app.on('error', (err, ctx) =>
        console.error('server error', err);
      );
    
    5. 释放 error 事件
      需要注意的是，如果错误被try...catch捕获，就不会触发error事件。
      这时，必须调用ctx.app.emit()，手动释放error事件，才能让监听函数生效。


  
  ·Cookis

    // demos/19.js
    const main = function(ctx) {
      const n = Number(ctx.cookies.get('view') || 0) + 1;
      ctx.cookies.set('view', n);
      ctx.response.body = n + ' views';
    }

  ·表单

    // demos/20.js
    const koaBody = require('koa-body');

    const main = async function(ctx) {
      const body = ctx.request.body;
      if (!body.name) ctx.throw(400, '.name required');
      ctx.body = { name: body.name };
    };

    app.use(koaBody());


  ·文件上传

    // demos/21.js
    const os = require('os');
    const path = require('path');
    const koaBody = require('koa-body');

    const main = async function(ctx) {
      const tmpdir = os.tmpdir();
      const filePaths = [];
      const files = ctx.request.body.files || {};

      for (let key in files) {
        const file = files[key];
        const filePath = path.join(tmpdir, file.name);
        const reader = fs.createReadStream(file.path);
        const writer = fs.createWriteStream(filePath);
        reader.pipe(writer);
        filePaths.push(filePath);
      }

      ctx.body = filePaths;
    };

    app.use(koaBody({ multipart: true }));