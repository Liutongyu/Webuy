// 1.实现图片上下移动的点击事件，以及点击小图中图会在上方显示的事件
var $topArrow = $(".magnifier>span:first-child");//上箭头
var $botArrow = $(".magnifier>span:last-child");//下箭头
var $ul = $topArrow.next();  //ul里的所有li里的图片

// 引入导航，并且实现购物车图标的功能
$(function () {
  // async function是为了让这个函数变成异步函数
  (async function () {
    var res = await ajax({
      url: './nav.html',
      type: 'get',
    });

    $('#nav').html(res)
    // 找导航的购物车图标元素（购物车旁边的小图标，每点击一次加入购物车按钮，页头上，图标的数字相应的增加）
    $cartSpan = $(".input-group>span")
    // 加入购物车按钮
    var $addtocart = $(".add-to-cart");
    var sum = 0;

    $addtocart.click(function () {
      // 先判断用户是否登录
      $.ajax({
        url: "http://localhost:3300/login/singin",
        type: "get",
        success: function (res) {
          console.log(res.sessionUname);
        var uname = res.sessionUname
          if (uname != null) {
            if (!$("[data-toggle=spec]").hasClass("highlight")) {
              $cartSpan.removeClass("cart-icon")
              alert("请先选择商品型号");
            }
            else {
              $cartSpan.addClass("cart-icon");
              sum = sum + n;
              $cartSpan.html(sum);
              alert("加入购物车成功");
            }
          }
          else {
            alert("请先登录")
          }
        }
      });

      // ajax请求是一个异步请求，会在js文件最后才会执行
      // js代码执行的两种方式：同步和异步
      // 同步：指所有正常写的代码，比如console.log(123)，会严格按照代码的上下顺序执行
      // 异步：比如定时器，ajax请求，都是异步函数，异步代码，无论写在页面中的哪个位置，都会在最后执行
      // 所以想在同步代码中，操作异步函数中的数据时，异步函数的数据还没有被执行，所以获取不到
      // 解决办法：将同步执行的代码，写在定时器中执行，变成异步函数，同样也会在最后执行。
      // 加入购物车
      var $goodPrice = $("#good-price").html();  //商品详情页：价格
      var $count = $("#count").html();  //数量
      var spec = "";  //规格  （由于规格有好几种，所以需要一个if判断）
      var aa = $("[data-toggle=spec]");
      for (var i = 0; i < aa.length; i++) {
        var a = $(aa[i])
        if (a.hasClass("highlight")) {
          spec = a.html();
          console.log(spec);
        }
      }
  
      $.ajax({
        url: 'http://localhost:3300/details/addtoCart',
        type: 'get',
        data:
        { 
          pid: lid,
          pic: bigpic,
          spec: spec,
          price: $goodPrice,
          count: $count
        },
        success: function (res) {
          console.log(555666)
        }
      })

    })
  })();

  var bigpic = "";  //// 将获取到的大图保存到外面全局变量中
  //商品详情
  console.log("判断获取pid是否成功")
  var geturl = location.search;  //获取url中"?"符后的字串  ?pid=1
  var splicurl = geturl.split("="); //Array(2) 0: "?pid" 1: "1"
  var lid = splicurl[1];
  $.ajax({
    url: 'http://localhost:3300/details/product_details?pid=' + lid,
    type: 'get',
    success: function (res) {
      console.log(res)  //获取到了
      var $goodTtitle = $("#good-title")
      var $goodSubtitle = $("#good-subtitle")
      var $goodPrice = $("#good-price")

      var $spec1 = $("#spec1")
      var $spec2 = $("#spec2")
      var $spec3 = $("#spec3")

      var $topImg = $("#topImg")
      var $pic1 = $("#pic1")
      var $pic2 = $("#pic2")
      var $pic3 = $("#pic3")
      var $pic4 = $("#pic4")
      var $pic5 = $("#pic5")
      var $pic6 = $("#pic6")
      // 右侧详情信息
      $goodTtitle.html(res.title);
      $goodSubtitle.html(res.details);
      $goodPrice.html(res.price);
      // 规格
      if (res.spec1 != null) {
        $spec1.html(res.spec1);
      } else {
        $spec1.css("display", "none")
      }

      if (res.spec2 != null) {
        $spec2.html(res.spec2);
      } else {
        $spec2.css("display", "none")
      }

      if (res.spec3 != null) {
        $spec3.html(res.spec3);
      } else {
        $spec3.css("display", "none")
      }

      $spec1.click(function () {
        $goodPrice.html(res.price);
      });
      $spec2.click(function () {
        $goodPrice.html(res.price2);
      });
      $spec3.click(function () {
        $goodPrice.html(res.price3);
      });


      // 将获取到的大图保存到外面全局变量中
      bigpic = res.mpic
      // 左侧图片切换路径
      $topImg.attr('src', res.mpic);

      $pic1.attr('src', res.mpic)
      $pic1.attr('data-md', res.spic);

      $pic2.attr('src', res.spic2)
      $pic2.attr('data-md', res.mpic2)

      $pic3.attr('src', res.spic3)
      $pic3.attr('data-md', res.mpic3)

      $pic4.attr('src', res.spic4)
      $pic4.attr('data-md', res.mpic4)

      $pic5.attr('src', res.spic5)
      $pic5.attr('data-md', res.mpic5)

      $pic6.attr('src', res.spic6)
      $pic6.attr('data-md', res.mpic6)
    }
  });
})


var moved = 0, LIWIDTH = 105;
$topArrow.click(function () {
  var $topArrow = $(this);         //先拿到当前按钮
  if (!$topArrow.is(".disabled")) {
    moved++;
    console.log(moved);
    $ul.css("marginTop", -LIWIDTH * moved);
    $botArrow.removeClass("disabled");
    if ($ul.children().length - 4 == moved) //当总数减去四个刚好和···的相等时 //隐藏的个数为移动的个数
    {
      $topArrow.addClass("disabled");
      $botArrow.removeClass("disabled");
    }
  }
})

$botArrow.click(function () {
  var $botArrow = $(this); //先拿到当前按钮
  if (!$botArrow.is(".disabled")) {
    moved--;
    console.log(moved);
    $ul.css("marginTop", -LIWIDTH * moved);

    if ($ul.children().length - 6 == moved) //当总数减去四个刚好和···的相等时 //隐藏的个数为移动的个数
    {
      $botArrow.addClass("disabled");
      $topArrow.removeClass("disabled");
    }
  }
})


// 小图左面的大图
var $mImg = $(".card-img-top"); 
$ul.on("mouseover", "img", function () {
  var $img = $(this);
  var md = $img.attr("data-md");
  $mImg.attr("src", md);
})

//2.右：详情内容----实现数量的加减
//span的内容
var $span = $(".myspan");
var n = parseInt($span.html());
//右边button
var $btnRight = $(".btn-right");

$btnRight.click(function () {
  n++;
  $span.html(n);
})

function loadbutton() {
  if ($("[data-toggle=spec]").hasClass("highlight")) {
    $(".btn-right").addClass("right-active");
    $(".btn-right").removeAttr("disabled");
    if (n == 1) {
      $(".btn-left").attr({ "disabled": "disabled" });
      $(".btn-left").removeClass("left-active");
      $(".btn-left").css("cursor", "not-allowed");
    }
    else {
      $(".btn-left").removeAttr("disabled");
      $(".btn-left").removeAttr("style");
      $(".btn-left").addClass("left-active");
    }
  } else {
    $(".btn-left").attr({ "disabled": "disabled" });
    $(".btn-right").attr({ "disabled": "disabled" });
    $(".btn-left").removeClass("left-active");
    $(".btn-right").removeClass("right-active");
  }
}
setInterval(function () {
  loadbutton()
}, 10)

//左边button
var $btnLeft = $(".btn-left");
$btnLeft.click(function () {
  loadbutton()
  if (n > 1) {
    n--;
  }
  $span.html(n);
})

// 尺寸选择
$("[data-toggle=spec]").click(function () {
  var $sel = $(this);
  $sel.toggleClass("highlight")//如果有这个样式，就删除，没有的话，就添加
  $sel.siblings().removeClass("highlight")
})











