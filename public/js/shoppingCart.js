// 加了async之后 把异步变成同步（有序）执行  async要与await配套使用
(async function () {
    // 一：引入导航
    var nav = await ajax({
        url: './nav.html',
        type: 'get'
    });
    $('#nav').html(nav)


    // 二：购物车
    var getspec = "";
    // 定义一个
    var res = await $.ajax({
        url: 'http://localhost:3300/shoppingCart/',
        type: 'get'
    })

    var $totalPrice = $(".totalPrice"); //总价
    var getprice;
    //  获取返回来的结果
    var details = "";
    var getParentProduct = $(".product1")
    for (var i = 0; i < res.length; i++) {
        var getpid = res[i].pid;
        var getpic = res[i].pic;  //图片
        var getspec = res[i].product_detail;  //规格
        var getprice = res[i].price;  //价格
        var getcount = res[i].count;  //数量
        var pid = res[i].pid;
        console.log(i)
        var item = `
    <ul class="shopping-details shoppingCartHeader">
    <li><div class="pick2"></div></li>
  
    <li>
        <!-- 图片 -->
        <div>
            <img class="img" src="${getpic}">
        </div>
    </li>
    <!-- 标题 -->
    <li>
        <div class="spec">
        ${getspec}
        </div>
    </li>
    <!-- 单价 -->
    <li>
        <div class="price">
        ${getprice}
        </div>
    </li>
    <!-- 加减数量 -->
    <li>
        <div class="float-left clearfix">
            <button class=" pl-3 pr-3 pb-2 btn-left"></button>
            <span class="count" class="float-left border pl-2 pr-2" style="">${getcount}</span>
            <button class=" pl-3 pr-3  pb-2 btn-right"></button>
        </div>
    </li>
    <!-- 总金额 -->
    <li>
        <div class="totalPrice">
        ${getprice * getcount}
        </div>
    </li>
    <!-- 操作 -->
    <li>
        <div class="del"></div>
    </li>
</ul>`
        //将上面循环的每一个商品追加到购物车div中
        details += item
    }
    // 使用for循环进行累加，累加完后再追加到div中，好处是只执行一次DOM操作
    getParentProduct.append($(details))

  
    setInterval(() => {
        var count = $(".count");
        var price = $(".price")
        var total = $(".totalPrice");
        for (var i = 0; i < $(".totalPrice").length; i++) {
            var sum = $(price[i]).html() * $(count[i]).html()
            $(total[i]).html(sum)
        }
    }, 200)

    // 选择需要进行操作的全选按钮
    // 创建计算金额总价的函数
    function total() {
        //  找到每个商品的数量和价格
        var price = $(".price")
        var count = $(".count");
        // 结算：
        var res = 0;
        var rescount = 0;
        var pick2 = $(".pick2")
        for (var i = 0; i < pick2.length; i++) {
            // 进行是否选中判断，选中则计算金额
            if ($(pick2[i]).hasClass("icon")) {
                res = res + Number(price[i].innerHTML) * Number(count[i].innerHTML);

                // 已选多少个功能
                rescount = rescount + Number(count[i].innerHTML);
            }
        }
        $("#calculateAll").html(res);
        // 已选多少个功能
        $(".selected").html(rescount)
    }
    setInterval(total, 50)

    //  设定加减点击事件
    $(".btn-left").click(function () {
        // 获取当前数量
        if ($(this).next().html() > 1) {
            var count = $(this).next().html();
            count--;
            $(this).next().html(count);
            total()
        } else {
            $(this).next().html(1)
        }

    })
    // 函数的重载
    $(".btn-right").click(function () {
        var count = $(this).prev().html();
        count++;
        $(this).prev().html(count);

    })
    // 设置全选按钮的全选和取消全选操作
    $(".pick").click(function () {
        // 如果全选按钮没有，则添加，如果有，则移除
        $(this).toggleClass("icon")
        //    执行完前面的操作后，继续进行判断
        // 如果全选按钮，则下面的所有全选框都有
        if ($(this).hasClass("icon")) {
            $(".pick2").addClass("icon")
        } else {//  如果全选按钮没有，下面的所有全选框都没有
            $(".pick2").removeClass("icon")
        }
    })


    // 设置每个商品的全选框点击事件
    $(".pick2").click(function () {
        $(this).toggleClass("icon")
        var sum = 0;
        for (var i = 0; i < $(".pick2").length; i++) {
            // 循环结果中只有要一个没被选中，则取消全选
            if (!$($(".pick2")[i]).hasClass("icon")) {
                $(".pick").removeClass("icon")
            } else {
                // pick2全部都亮   全选pick按钮才会亮
                sum++
                //  选中的商品  等于  商品的总个数  才让全选按钮pick 全选（变红）
                if (sum == $(".pick2").length) {
                    console.log(556)
                    $(".pick").addClass("icon")
                }
            }
        }
    })

    // 设置删除事件
    $(".del").click(function () {
        // 删除整个ul
        var parent = $(this).parent().parent();
        if (confirm("确定要删除当前商品吗？")) {
            parent.remove()

            // 如果更严谨一点，这一步时需要将商品id发送到后台，再根据id将后台数据库内容删除
        }

        // $.ajax({
        //     url: 'http://localhost:3300/shoppingCart/delete',
        //     type: 'get',
        //     data: {

        //     }
        // })
    })



})();








