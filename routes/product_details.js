//路由
const express = require("express");
const router = express.Router();
const pool = require("../pool");

// 产品详情
router.get("/product_details", function (req, res) {
    // 获取product_details.js传过来的pid  
    var pid = req.query.pid;
    var sql = `SELECT * FROM xm_index_product where pid = ?`;
    console.log(sql);
    //[{"pid":1,"title":"Yeelight皓石LED","details":"大小尺寸960 x 640m ","pic":"./img/useForFamily/3.png","price":1091,"href":"product_details.html?pid=1","seq_new_arrival":1,"seq_top_sale":1}]
    pool.query(sql, [pid], (err, result) => {
        if (err)
            console.log(err);
        //将结果返回到ajaxss
        res.send(result[0]);
       // console.log(result[0]);
        // RowDataPacket {
        // pid: 1,
        // title: 'Yeelight皓石LED',
        // details: '大小尺寸960 x 640m ',
        // pic: './img/useForFamily/3.png',
        // price: 1091,
        // href: 'product_details.html?pid=1',
        // seq_new_arrival: 1,
        // seq_top_sale: 1 }
    })
});

// 把商品加入购物车
router.get("/addtoCart", function (req, res) {
    var pid = req.query.pid;
    var pic = req.query.pic;
    var spec = req.query.spec;
    var price = req.query.price;
    var count = req.query.count;
//  访问当前路由接口时，先使用传递过来的pid和规格作为条件去数据库中执行查询操作
//   if  查询成功，数据库中已经有当前商品记录，则将传递过来的商品数量，累加到查询出来商品的总数中
// else  查询为空，则直接执行插入操作  
    var sql = `INSERT INTO xm_shoppingcart VALUES (NULL,NULL,?,?,?,?,?)`;
    pool.query(sql, [pid, pic, spec, price, count], (err, result) => {
        if (err) throw err;
        console.log(555555);
        console.log(result)
        // res.send(result[0]);
    });
});

module.exports=router;

