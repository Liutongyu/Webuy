

(async function () {
    // 一：引入导航
    var nav = await ajax({
        url: './nav.html',
        type: 'get'
    });
    $('#nav').html(nav)

    // 二：引入页脚
    var foot = await ajax({
        url: './footer.html',
        type: 'get'
    });
    $('#foot').html(foot)

    //   三：登录
    // 通过jquery获取用户登录的名称和密码
    $("#heihei").click(function () {
        var $uname = $("#haha").val();
        var $upwd = $("#xixi").val();
        $.ajax({
            url: "http://localhost:3300/login/",
            type: "post",
            // 将用户数据传递进ajax参数
            data: {
                uname: $uname,
                upwd: $upwd
            },
            success: function (res) {
                console.log(res.code);
                if (res.code == 200) {
                    location.href = 'index.html';
                    // alert("登录成功");
                }
                else if ($uname == "") { alert("用户名不能为空") }
                else if ($upwd == "") { alert("密码不能为空") }
                else {
                    alert("用户名或密码错误");
                }
            }
        });
    })
    var $txtName = $("#haha");
    var $txtPwd = $("#xixi");

    $txtName.focus(function () {
        $(this).addClass("text_focus");
        $txtPwd.removeClass("text_focus");
    })
    $txtPwd.focus(function () {
        $(this).addClass("text_focus");
        $txtName.removeClass("text_focus");
    });





    // 四：注册
    var getRegButton = $("#ureg");
    getRegButton.click(function () {
        // 通过jquery获取用户注册的名称，密码和邮箱
        var un = $("#un").val();
        var pw = $("#pw").val();
        var email = $("#email").val();

        var judgeUname = $(".judgeUname");
        var judgeUpwd = $(".judgeUpwd");
        var judgeEmail = $(".judgeEmail");

        //var phonereg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        var emailreg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var pwdreg = /^[A-Za-z0-9\.\-\_]{8,16}$/;
        // 用一个变量进行测试是否通过
        var  yz=0; 
        if (un == "") {
            alert("用户名不能为空")
            yz+=1
        }
        if (!pwdreg.test(pw)) {
            alert("密码格式不正确")
            yz+=1
        }
        if (!emailreg.test(email)) {
            alert("邮箱格式不正确")
            yz+=1
        }
        if(yz==0){
            $.ajax({
                url: "http://localhost:3300/login/register",
                type: "get",
                data: {
                    un: un,
                    pw: pw,
                    email: email
                },
                success: function (res) {
                alert(res)
                }
            })
        // console.log("发生了注册行为")
        }else{
            alert("不能进行注册")
            yz=0
        }
    

    })
})();



