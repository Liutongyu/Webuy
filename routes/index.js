
//路由
const express = require("express");
const router = express.Router();
const pool = require("../pool");

//index/
router.get("/", (req, res) => {
    var sql = `SELECT * FROM xm_index_product`;
    pool.query(sql, [], (err, result) => {
        if (err) throw(err);
        res.send(result);
    })
});


router.get("/bigtitle", (req, res) => {
    var sql = `SELECT * FROM index_product_bigtitle`;
    pool.query(sql, [], (err, result) => {
        if (err) throw(err);
        //console.log(result)
        res.send(result);
    })
});


module.exports = router;