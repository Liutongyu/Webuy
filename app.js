//使用express构建web服务器 --11:25
const express = require('express');
const bodyParser = require('body-parser');
const session=require("express-session");
var cookieParser = require('cookie-parser');
/*引入路由模块*/
const index=require("./routes/index");
const login=require("./routes/login");
const details=require("./routes/product_details");
const shoppingCart=require("./routes/shoppingCart");
const searchResult=require("./routes/searchResult");
// const navsearch = require("./routes/nav");
const cors=require("cors");

var app = express();
var server = app.listen(3300);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//配置session
app.use(session({
    secret:'随机字符串',
    resave:true,
    saveUninitialized:true,
    cookie:{maxAge:600000}
  }))
app.use(cookieParser());

app.use(function(req, res, next){
  req.session._garbage = Date();
  req.session.touch();
  next();
  });
  //解决跨域问题
  app.use(cors({
    origin:"http://127.0.0.1:3300",
    credentials:true
  }))
  
//托管静态资源到public目录下
app.use(express.static('public'));
/*使用路由器来管理路由*/
app.use("/index",index);
app.use("/login",login);
app.use("/details",details);
app.use("/shoppingCart",shoppingCart);
app.use("/searchResult",searchResult);
// app.use("/navsearch",navsearch);

//http://localhost:3300/index/


