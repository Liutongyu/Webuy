
// 一：引入导航
(async function () {
    // 一：引入导航
    var nav = await $.ajax({
        url: './nav.html',
        type: 'get'
    });
    $('#nav').html(nav)

    var geturl = location.search;  //获取url中"?"符后的字串 ?text="+searchText
    console.log(decodeURI(geturl))
    var splicurl = geturl.split("=");
    var searchText = splicurl[1];
    console.log("找到url中搜索的内容")
    console.log(decodeURI(searchText));

    var searchText;
    (async () => {
        var res = await $.ajax({
            url: 'http://localhost:3300/searchResult/list',
            type: 'get',
            data: {
                searchText: decodeURI(searchText),
            }
        });

        console.log(res.msg.data)
        res = res.msg.data
        var img = $(".img")
        var title = $(".title")
        var price = $(".price")
        //已经得到res  是一个[{...},{...},{...}···]数组
        var items = "";
        // 默认显示第一页，即前面8条数据
        // 设定分页点击事件
        var getimg;
        var gettitle;
        var getprice;
        var onelist;
        $(".list2").click(function(){
            test(2)
        })
        $(".list1").click(function(){
            test(1)
        })
        function test(pno) {
            console.log(pno)
            items = "";
            // 设置一个起始位置  
            var x = 8 * (pno - 1)
            var y = x + 8
            onelist = res.slice(x, y)
            for (var i = 0; i < onelist.length; i++) {
                getimg = onelist[i].pic;
                gettitle = onelist[i].title;
                getprice = onelist[i].price;

                img.attr("src", getimg);
                title.html(gettitle);
                price.html(getprice);

                var item = `
                            <div class="eachProduct">
                                 <img class="img" src="${getimg}">
                                 <div class="title">${gettitle}</div>
                                 <div>¥<span class="price">${getprice}</span></div>
                           </div>`;

                items += item;


            }
            var parentProduct = $(".container2")
            parentProduct.html($(items));
        }
        test(1)
  
    






    })()


})();






