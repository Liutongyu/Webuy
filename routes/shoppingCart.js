//路由
const express = require("express");
const router = express.Router();
const pool = require("../pool");


// 购物车添加
router.get("/", function (req, res) {
    var sql = `SELECT * from xm_shoppingcart`;
    pool.query(sql, [], (err, result) => {
        if (err) throw(err);
        res.send(result);
    }) 
})

// 购物车删除
// router.get("/delete", function (req, res) {
//     var pid = req.query.pid;
//     var getspec = req.query.getspec;
//     var sql = `DELETE from xm_shoppingcart WHERE pid = ? AND product_detail = ?`;
//     pool.query(sql, [pid,getspec], (err, result) => {
//         if (err) throw(err);
//         console.log(result);
//         res.send(result);
//     }) 
// })

module.exports=router;