
//路由
const express = require("express");
const router = express.Router();
const pool = require("../pool");

//index/
router.post("/", (req, res) => {
    var uname = req.body.uname;
    var upwd = req.body.upwd;
    console.log('接收到请求');
    if (!uname) {
        res.send('uname required');
        //禁止程序继续执行
        return;
    }
    if (!upwd) {
        res.send('password required');
        return;
    }

    var sql = `SELECT * FROM xmuser WHERE uname=? AND upwd=?`;
    pool.query(sql, [uname, upwd], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            // console.log(result)  //[ RowDataPacket { uid: 1, uname: 'yuer', upwd: '19921019', email: 'yuer@qq.com' } ]
            // console.log(result[0])   //{ uid: 1, uname: 'yuer', upwd: '19921019', email: 'yuer@qq.com' }
            req.session.uname = result[0].uname;
            // console.log( req.session.uname)   //yuer
            res.send({ code: 200, msg: '登录成功' });
        }
        else {
            res.send({ code: 400, msg: '用户名或密码错误' });
        }

    });
});

router.get("/singin", function (req, res) {
    var sessionUname = req.session.uname;
    res.send({ ok: 1, sessionUname });
});

router.get("/signout", (req, res) => {
    req.session.uname = null;
    res.end();
})



//   用户注册
router.get("/register", function (req, res) {
    // 第一步，将用户名进行查询，查询成功，则代表已经注册过了
    // 提示用户已经注册
    // 查询不成功，则将数据全部插入进去，提示注册成功
    var un = req.query.un;
    var sqluser = `SELECT * FROM xmuser WHERE uname = ?`;
    pool.query(sqluser, [un], (err, result) => {
        if (err) throw err;
        if (result[0] == undefined) {
            var pw = req.query.pw;
            var email = req.query.email;
            var sql = `INSERT INTO xmuser VALUES (NULL,?,?,?)`;
            pool.query(sql, [un, pw, email], (err, result) => {
                if (err) throw (err);
                res.send("注册成功");
            })
        }else{
            res.send("用户名已经注册")
        }
    })


});

module.exports = router;

