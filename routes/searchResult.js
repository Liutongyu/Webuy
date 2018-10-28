//路由
const express = require("express");
const router = express.Router();
const pool = require("../pool");

// 购物车添加
router.get("/search", function (req, res) {
    var searchText = req.query.searchText;
    console.log(11111)
    console.log(searchText)
    var sql = `SELECT * from xm_index_product where title like concat('%',?,'%')`;
    pool.query(sql, [searchText], (err, result) => {
        if (err) throw (err);
        console.log(searchText)
        res.send(result);
        console.log(result);
    })
})



// 设置分页的路由
router.get("/list", (req, res) => {
    // 搜索关键词
    var searchText = req.query.searchText;
    //1参数 pno pageSize
    var pno = req.query.pno; //当前页面
    var pageSize = req.query.pageSize; //页大小
    //2设置参数默认值
    if (!pno) {
        pno = 1;
    }
    if (!pageSize) {
        pageSize = 8;
    }
    console.log(searchText, pno, pageSize)

    //4创建两条sql发送 总记录数
    //4.1创建空对象保存返回数据
    var obj = {
        pno: pno,
        pageSize: pageSize
    };
    //4.2创建变量保存（sql语句完成）进度
    var progress = 0;
    //查询所有内容 
    var sql = `SELECT count(pid) as c from xm_index_product where title like concat('%',?,'%')`;
    pool.query(sql, [searchText], (err, result) => {
        if (err) throw err;
        var pageCount = Math.ceil(result[0].c / pageSize); //算出一共几页
        console.log(pageCount)
        // 将总页数保存到对象中
        obj.pageCount = pageCount; //保存总页数 
        progress += 50; //记录当前进度
        // 
        if (progress == 100) { //二条sql完成
            res.send({
                msg: obj
            }); //发送结果
        }
    })
    //创建第二条sql发送 当前页面内容 进行分页查询
    // var sql = " SELECT title,pic,price";
    // sql += "from xm_index_product";
    // sql += " LIMIT 1,8"
    // 查询起点
    // var sql ="SELECT * FROM xm_index_product WHERE WHERE pid = 2"
    // var offset = parseInt((pno - 1) * pageSize); //start = (页码-1)*count
    // // 查询终点
    // pageSize = parseInt(pageSize);
    var sql = `SELECT * from xm_index_product where title like concat('%',?,'%')`;
    pool.query(sql, [searchText], (err, result) => {
        if (err) throw err;
        console.log(result)
        // 将分页查询出来的内容保存到对象中
        obj.data = result; //保存当前页内容
        progress += 50; //进度加50
        if (progress == 100) { //如果二条sql语句全部完成
            res.send({
                msg: obj
            }) //发送
        }
    })
});

module.exports = router;