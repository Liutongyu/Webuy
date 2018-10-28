// //路由
// const express = require("express");
// const router = express.Router();
// const pool = require("../pool");

// // 购物车添加
// router.get("/nav", function (req, res) {
//     var text = req.query.text;
//     var sql = `SELECT * from xm_index_product where title like concat('%',?,'%')`;
//     pool.query(sql,[text],(err, result) => {
//         if (err) throw(err);
//         console.log(text)
//         res.send(result);
//         console.log(result);
//     }) 
// })

// module.exports=router;