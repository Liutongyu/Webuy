
// 搜索栏

var search = $('.icon-search')
var searchText;
search.click(function (e) {
    // 获取搜索的内容
    searchText = $('.mysearch').val();
    console.log("验证searchText");
    console.log(searchText)
    searchText = encodeURI(searchText);
    location.href = "http://localhost:3300/seachResult.html?text=" + searchText;

})
function keyQuery() {
    if (event.keyCode == 13) {
        location.href = "http://localhost:3300/seachResult.html?text=" + searchText;
    }
}











