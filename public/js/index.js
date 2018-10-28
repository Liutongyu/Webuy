
// 一：引入导航
(async function () {
    var res = await ajax({
        url: './nav.html',
        type: 'get',
    });
    $('#nav').html(res)
})();
// 二：数据动态加载
(async function () {
    var res = await ajax({
        url: "http://localhost:3300/index/bigtitle",
        type: "get",
        dataType: "json"
    });
    console.log(res);
    //    品牌
    // 居家：大图数据动态加载 
    parent = document.querySelector("#jujia");
    var p = res.slice(0, 1);
    var { title, pic, href, href_more } = p[0]
    var html = `
<div class="col-3 forFamily p-0">
<h2 class="toptitle font-weight-bold text-white">${title}</h2>
<a href="${href_more}" style="text-decoration:none"><h6 class="bottomTitle">更多>></h6></a>
</div>
<div class="col-6 p-0 ml-2">
<a href="${href}"><img class="right_img" src="${pic}"></a>
</div> 
`
    parent.innerHTML = html;

    //  影音：大图数据动态加载     
    var p = res.slice(1, 2);
    parent = document.querySelector("#film-video");
    console.log(p);
    var { title, pic, href, href_more } = p[0]
    var html = `
<div class="col-3 video p-0">
<h2 class="toptitle font-weight-bold text-white">${title}</h2>
<a href="${href_more}" style="text-decoration:none"><h6 class="bottomTitle">更多>></h6></a>
</div>
<div class="col-6 p-0 ml-2">
<a href="${href}"><img class="right_img" src="${pic}" alt=""></a>
</div> 
`
    parent.innerHTML += html;

    //  服饰：大图数据动态加载 
    var p = res.slice(2, 3);
    parent = document.querySelector("#dress");
    console.log(p);
    var { title, pic, href, href_more } = p[0]
    var html = `
<div class="col-3 clothes p-0">
<h2 class="toptitle font-weight-bold text-white">${title}</h2>
<a href="${href_more}" style="text-decoration:none"><h6 class="bottomTitle">更多>></h6></a>
</div>
<div class="col-6 p-0 ml-2">
<a href="${href}"><img class="right_img" src="${pic}" alt=""></a>
</div>
`
    parent.innerHTML += html;

    //  鞋包：大图数据动态加载 
    var p = res.slice(3, 4);
    parent = document.querySelector("#bags");
    console.log(p);
    var { title, pic, href, href_more } = p[0]
    var html = `
<div class="col-3 shoesAndBag p-0">
<h2 class="toptitle font-weight-bold text-white">${title}</h2>
<a href="${href_more}" style="text-decoration:none"><h6 class="bottomTitle">更多>></h6></a>
</div>
<div class="col-6 p-0 ml-2">
<a href="${href}"><img class="right_img" src="${pic}"></a>
</div>
`
    parent.innerHTML += html;

    //  饮食：大图数据动态加载 
    var p = res.slice(4, 5);
    parent = document.querySelector("#eat");
    console.log(p);
    var { title, pic, href_more } = p[0]
    var html = `
<div class="col-3 foods p-0">
<h2 class="toptitle font-weight-bold text-white">${title}</h2>
<a href="${href_more}" style="text-decoration:none"><h6 class="bottomTitle">更多>></h6></a>
</div>
<div class="col-6 p-0 ml-2">
<a href="${href}"><img class="right_img" src="${pic}" alt=""></a>
</div>
`
    parent.innerHTML += html;

})();

// 三：数据动态加载
(async function () {
    var res = await ajax({
        url: "http://localhost:3300/index/",
        type: "get",
        dataType: "json"
    });
    console.log(res);
    // 1.居家：数据库动态加载
    // 第一行
    var parent = document.querySelector("#jujia-first-detail");
    var p = res.slice(0, 1);
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0" onclick='window.open("${href}")' style="cursor: pointer;">
    <div class="card">
        <div class="card-body p-0">
             <img class="body_img" src="${pic}" alt="">
            <div class="card-footer text-center">
                <p class="text-muted">${details}</p>
                <p class="font-weight-bold">${title}</p>
                <p class="price_color">￥${price}</p>
            </div>
        </div>
    </div>
</div>`
    parent.innerHTML = html;

    var p = res.slice(1, 2);
    //console.log(p)  //[{…}]
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0 pl-2 pr-2" onclick='window.open("${href}")' style="cursor: pointer;">
<div class="card">
    <div class="card-body p-0">
         <img class="body_img" src="${pic}" alt="">
        <div class="card-footer text-center">
            <p class="text-muted">${details}</p>
            <p class="font-weight-bold">${title}</p>
            <p class="price_color">￥${price}</p>
        </div>
    </div>
</div>
</div>`
    parent.innerHTML += html;

    var p = res.slice(2, 3);
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0 pr-2" onclick='window.open("${href}")' style="cursor: pointer;">
<div class="card">
    <div class="card-body p-0">
         <img class="body_img" src="${pic}" alt="">
        <div class="card-footer text-center">
            <p class="text-muted">${details}</p>
            <p class="font-weight-bold">${title}</p>
            <p class="price_color">￥${price}</p>
        </div>
    </div>
</div>
</div>`
    parent.innerHTML += html;

    var p = res.slice(3, 4);
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0" onclick='window.open("${href}")' style="cursor: pointer;">
<div class="card">
    <div class="card-body p-0">
         <img class="body_img" src="${pic}" alt="">
        <div class="card-footer text-center">
            <p class="text-muted">${details}</p>
            <p class="font-weight-bold">${title}</p>
            <p class="price_color">￥${price}</p>
        </div>
    </div>
</div>
</div>`
    parent.innerHTML += html;

    // 第二行
    var parent = document.querySelector("#jujia-second-detail");
    var p = res.slice(4, 5);
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0" onclick='window.open("${href}")' style="cursor: pointer;">
<div class="card">
    <div class="card-body p-0">
         <img class="body_img" src="${pic}" alt="">
        <div class="card-footer text-center">
            <p class="text-muted">${details}</p>
            <p class="font-weight-bold">${title}</p>
            <p class="price_color">￥${price}</p>
        </div>
    </div>
</div>
</div>`
    parent.innerHTML = html;

    var p = res.slice(5, 6);
    //console.log(p)  //[{…}]
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0 pl-2 pr-2" onclick='window.open("${href}")' style="cursor: pointer;">
<div class="card">
    <div class="card-body p-0">
         <img class="body_img" src="${pic}" alt="">
        <div class="card-footer text-center">
            <p class="text-muted">${details}</p>
            <p class="font-weight-bold">${title}</p>
            <p class="price_color">￥${price}</p>
        </div>
    </div>
</div>
</div>`
    parent.innerHTML += html;

    var p = res.slice(6, 7);
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0 pr-2" onclick='window.open("${href}")' style="cursor: pointer;">
<div class="card">
    <div class="card-body p-0">
         <img class="body_img" src="${pic}" alt="">
        <div class="card-footer text-center">
            <p class="text-muted">${details}</p>
            <p class="font-weight-bold">${title}</p>
            <p class="price_color">￥${price}</p>
        </div>
    </div>
</div>
</div>`
    parent.innerHTML += html;

    var p = res.slice(7, 8);
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0" onclick='window.open("${href}")' style="cursor: pointer;">
<div class="card">
    <div class="card-body p-0">
         <img class="body_img" src="${pic}" alt="">
        <div class="card-footer text-center">
            <p class="text-muted">${details}</p>
            <p class="font-weight-bold">${title}</p>
            <p class="price_color">￥${price}</p>
        </div>
    </div>
</div>
</div>`
    parent.innerHTML += html;

    // 2.影音：数据库动态加载
    //  第一行
    var p = res.slice(8, 9);
    parent = document.querySelector("#video-first-detail");
    var { title, details, pic, price, href } = p[0];
    var html = `<div class="col-3 p-0" onclick='window.open("${href}")' style="cursor: pointer;">
     <div class="card">
         <div class="card-body p-0">
             <img class="body_img" src="${pic}" alt="">
             <div class="card-footer text-center">
                 <p class="text-muted">${details}</p>
                 <p class="font-weight-bold"> ${title}</p>
                 <p class="price_color">￥${price}</p>
             </div>
         </div>
     </div>
 </div>`;
    parent.innerHTML = html;

    var p = res.slice(9, 10)
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0 pl-2 pr-2" onclick='window.open("${href}")' style="cursor: pointer;">
        <div class="card">
            <div class="card-body p-0">
                 <img class="body_img" src="${pic}" alt="">
                <div class="card-footer text-center">
                    <p class="text-muted">${details}</p>
                    <p class="font-weight-bold">${title}</p>
                    <p class="price_color">￥${price}</p>
                </div>
            </div>
        </div>
        </div>`
    parent.innerHTML += html;

    var p = res.slice(10, 11);
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0 pr-2" onclick='window.open("${href}")' style="cursor: pointer;">
     <div class="card">
         <div class="card-body p-0">
              <img class="body_img" src="${pic}" alt="">
             <div class="card-footer text-center">
                 <p class="text-muted">${details}</p>
                 <p class="font-weight-bold">${title}</p>
                 <p class="price_color">￥${price}</p>
             </div>
         </div>
     </div>
     </div>`
    parent.innerHTML += html;

    var p = res.slice(11, 12);
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0" onclick='window.open("${href}")' style="cursor: pointer;">
     <div class="card">
         <div class="card-body p-0">
              <img class="body_img" src="${pic}" alt="">
             <div class="card-footer text-center">
                 <p class="text-muted">${details}</p>
                 <p class="font-weight-bold">${title}</p>
                 <p class="price_color">￥${price}</p>
             </div>
         </div>
     </div>
     </div>`
    parent.innerHTML += html;

    // 第二行
    parent = document.querySelector("#video-second-detail");
    var p = res.slice(12, 13);
    var { title, details, pic, price, href } = p[0];
    var html = `<div class="col-3 p-0" onclick='window.open("${href}")' style="cursor: pointer;">
  <div class="card">
      <div class="card-body p-0">
          <img class="body_img" src="${pic}" alt="">
          <div class="card-footer text-center">
              <p class="text-muted">${details}</p>
              <p class="font-weight-bold"> ${title}</p>
              <p class="price_color">￥${price}</p>
          </div>
      </div>
  </div>
</div>`;
    parent.innerHTML = html;

    var p = res.slice(13, 14)
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0 pl-2 pr-2" onclick='window.open("${href}")' style="cursor: pointer;">
     <div class="card">
         <div class="card-body p-0">
              <img class="body_img" src="${pic}" alt="">
             <div class="card-footer text-center">
                 <p class="text-muted">${details}</p>
                 <p class="font-weight-bold">${title}</p>
                 <p class="price_color">￥${price}</p>
             </div>
         </div>
     </div>
     </div>`
    parent.innerHTML += html;

    var p = res.slice(14, 15);
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0 pr-2" onclick='window.open("${href}")' style="cursor: pointer;">
  <div class="card">
      <div class="card-body p-0">
           <img class="body_img" src="${pic}" alt="">
          <div class="card-footer text-center">
              <p class="text-muted">${details}</p>
              <p class="font-weight-bold">${title}</p>
              <p class="price_color">￥${price}</p>
          </div>
      </div>
  </div>
  </div>`
    parent.innerHTML += html;

    var p = res.slice(15, 16);
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0" onclick='window.open("${href}")' style="cursor: pointer;">
  <div class="card">
      <div class="card-body p-0">
           <img class="body_img" src="${pic}" alt="">
          <div class="card-footer text-center">
              <p class="text-muted">${details}</p>
              <p class="font-weight-bold">${title}</p>
              <p class="price_color">￥${price}</p>
          </div>
      </div>
  </div>
  </div>`
    parent.innerHTML += html;


    // 3.服饰：数据库动态加载
    //  第一行
    var p = res.slice(16, 17);
    parent = document.querySelector("#clothes-first-detail");
    var { title, details, pic, price, href } = p[0];
    var html = `<div class="col-3 p-0" onclick='window.open("${href}")' style="cursor: pointer;">
     <div class="card">
         <div class="card-body p-0">
             <img class="body_img" src="${pic}" alt="">
             <div class="card-footer text-center">
                 <p class="text-muted">${details}</p>
                 <p class="font-weight-bold"> ${title}</p>
                 <p class="price_color">￥${price}</p>
             </div>
         </div>
     </div>
 </div>`;
    parent.innerHTML = html;

    var p = res.slice(17, 18)
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0 pl-2 pr-2" onclick='window.open("${href}")' style="cursor: pointer;">
        <div class="card">
            <div class="card-body p-0">
                 <img class="body_img" src="${pic}" alt="">
                <div class="card-footer text-center">
                    <p class="text-muted">${details}</p>
                    <p class="font-weight-bold">${title}</p>
                    <p class="price_color">￥${price}</p>
                </div>
            </div>
        </div>
        </div>`
    parent.innerHTML += html;

    var p = res.slice(18, 19);
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0 pr-2" onclick='window.open("${href}")' style="cursor: pointer;">
     <div class="card">
         <div class="card-body p-0">
              <img class="body_img" src="${pic}" alt="">
             <div class="card-footer text-center">
                 <p class="text-muted">${details}</p>
                 <p class="font-weight-bold">${title}</p>
                 <p class="price_color">￥${price}</p>
             </div>
         </div>
     </div>
     </div>`
    parent.innerHTML += html;

    var p = res.slice(19, 20);
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0" onclick='window.open("${href}")' style="cursor: pointer;">
     <div class="card">
         <div class="card-body p-0">
              <img class="body_img" src="${pic}" alt="">
             <div class="card-footer text-center">
                 <p class="text-muted">${details}</p>
                 <p class="font-weight-bold">${title}</p>
                 <p class="price_color">￥${price}</p>
             </div>
         </div>
     </div>
     </div>`
    parent.innerHTML += html;

    //  第二行
    parent = document.querySelector("#clothes-second-detail");
    var p = res.slice(20, 21);
    var { title, details, pic, price, href } = p[0];
    var html = `<div class="col-3 p-0" onclick='window.open("${href}")' style="cursor: pointer;">
     <div class="card">
         <div class="card-body p-0">
             <img class="body_img" src="${pic}" alt="">
             <div class="card-footer text-center">
                 <p class="text-muted">${details}</p>
                 <p class="font-weight-bold"> ${title}</p>
                 <p class="price_color">￥${price}</p>
             </div>
         </div>
     </div>
   </div>`;
    parent.innerHTML = html;

    var p = res.slice(21, 22)
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0 pl-2 pr-2" onclick='window.open("${href}")' style="cursor: pointer;">
        <div class="card">
            <div class="card-body p-0">
                 <img class="body_img" src="${pic}" alt="">
                <div class="card-footer text-center">
                    <p class="text-muted">${details}</p>
                    <p class="font-weight-bold">${title}</p>
                    <p class="price_color">￥${price}</p>
                </div>
            </div>
        </div>
        </div>`
    parent.innerHTML += html;

    var p = res.slice(22, 23);
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0 pr-2" onclick='window.open("${href}")' style="cursor: pointer;">
     <div class="card">
         <div class="card-body p-0">
              <img class="body_img" src="${pic}" alt="">
             <div class="card-footer text-center">
                 <p class="text-muted">${details}</p>
                 <p class="font-weight-bold">${title}</p>
                 <p class="price_color">￥${price}</p>
             </div>
         </div>
     </div>
     </div>`
    parent.innerHTML += html;

    var p = res.slice(23, 24);
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0" onclick='window.open("${href}")' style="cursor: pointer;">
     <div class="card">
         <div class="card-body p-0">
              <img class="body_img" src="${pic}" alt="">
             <div class="card-footer text-center">
                 <p class="text-muted">${details}</p>
                 <p class="font-weight-bold">${title}</p>
                 <p class="price_color">￥${price}</p>
             </div>
         </div>
     </div>
     </div>`
    parent.innerHTML += html;


    // 4.鞋包：数据库动态加载
    //  第一行
    var p = res.slice(24, 25);
    parent = document.querySelector("#shoes-first-detail");
    var { title, details, pic, price, href } = p[0];
    var html = `<div class="col-3 p-0" onclick='window.open("${href}")' style="cursor: pointer;">
     <div class="card">
         <div class="card-body p-0">
             <img class="body_img" src="${pic}" alt="">
             <div class="card-footer text-center">
                 <p class="text-muted">${details}</p>
                 <p class="font-weight-bold"> ${title}</p>
                 <p class="price_color">￥${price}</p>
             </div>
         </div>
     </div>
 </div>`;
    parent.innerHTML = html;

    var p = res.slice(25, 26)
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0 pl-2 pr-2" onclick='window.open("${href}")' style="cursor: pointer;">
        <div class="card">
            <div class="card-body p-0">
                 <img class="body_img" src="${pic}" alt="">
                <div class="card-footer text-center">
                    <p class="text-muted">${details}</p>
                    <p class="font-weight-bold">${title}</p>
                    <p class="price_color">￥${price}</p>
                </div>
            </div>
        </div>
        </div>`
    parent.innerHTML += html;

    var p = res.slice(26, 27);
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0 pr-2" onclick='window.open("${href}")' style="cursor: pointer;">
     <div class="card">
         <div class="card-body p-0">
              <img class="body_img" src="${pic}" alt="">
             <div class="card-footer text-center">
                 <p class="text-muted">${details}</p>
                 <p class="font-weight-bold">${title}</p>
                 <p class="price_color">￥${price}</p>
             </div>
         </div>
     </div>
     </div>`
    parent.innerHTML += html;

    var p = res.slice(27, 28);
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0" onclick='window.open("${href}")' style="cursor: pointer;">
     <div class="card">
         <div class="card-body p-0">
              <img class="body_img" src="${pic}" alt="">
             <div class="card-footer text-center">
                 <p class="text-muted">${details}</p>
                 <p class="font-weight-bold">${title}</p>
                 <p class="price_color">￥${price}</p>
             </div>
         </div>
     </div>
     </div>`
    parent.innerHTML += html;

    //  第二行
    parent = document.querySelector("#shoes-second-detail");
    var p = res.slice(28, 29);
    var { title, details, pic, price, href } = p[0];
    var html = `<div class="col-3 p-0" onclick='window.open("${href}")' style="cursor: pointer;">
     <div class="card">
         <div class="card-body p-0">
             <img class="body_img" src="${pic}" alt="">
             <div class="card-footer text-center">
                 <p class="text-muted">${details}</p>
                 <p class="font-weight-bold"> ${title}</p>
                 <p class="price_color">￥${price}</p>
             </div>
         </div>
     </div>
   </div>`;
    parent.innerHTML = html;

    var p = res.slice(29, 30)
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0 pl-2 pr-2" onclick='window.open("${href}")' style="cursor: pointer;">
        <div class="card">
            <div class="card-body p-0">
                 <img class="body_img" src="${pic}" alt="">
                <div class="card-footer text-center">
                    <p class="text-muted">${details}</p>
                    <p class="font-weight-bold">${title}</p>
                    <p class="price_color">￥${price}</p>
                </div>
            </div>
        </div>
        </div>`
    parent.innerHTML += html;

    var p = res.slice(30, 31);
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0 pr-2" onclick='window.open("${href}")' style="cursor: pointer;">
     <div class="card">
         <div class="card-body p-0">
              <img class="body_img" src="${pic}" alt="">
             <div class="card-footer text-center">
                 <p class="text-muted">${details}</p>
                 <p class="font-weight-bold">${title}</p>
                 <p class="price_color">￥${price}</p>
             </div>
         </div>
     </div>
     </div>`
    parent.innerHTML += html;

    var p = res.slice(31, 32);
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0" onclick='window.open("${href}")' style="cursor: pointer;">
     <div class="card">
         <div class="card-body p-0">
              <img class="body_img" src="${pic}" alt="">
             <div class="card-footer text-center">
                 <p class="text-muted">${details}</p>
                 <p class="font-weight-bold">${title}</p>
                 <p class="price_color">￥${price}</p>
             </div>
         </div>
     </div>
     </div>`
    parent.innerHTML += html;



    // 5.饮食：数据库动态加载
    //  第一行
    var p = res.slice(32, 33);
    parent = document.querySelector("#foods-first-detail");
    var { title, details, pic, price, href } = p[0];
    var html = `<div class="col-3 p-0" onclick='window.open("${href}")' style="cursor: pointer;">
     <div class="card">
         <div class="card-body p-0">
             <img class="body_img" src="${pic}" alt="">
             <div class="card-footer text-center">
                 <p class="text-muted">${details}</p>
                 <p class="font-weight-bold"> ${title}</p>
                 <p class="price_color">￥${price}</p>
             </div>
         </div>
     </div>
 </div>`;
    parent.innerHTML = html;

    var p = res.slice(33, 34)
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0 pl-2 pr-2" onclick='window.open("${href}")' style="cursor: pointer;">
        <div class="card">
            <div class="card-body p-0">
                 <img class="body_img" src="${pic}" alt="">
                <div class="card-footer text-center">
                    <p class="text-muted">${details}</p>
                    <p class="font-weight-bold">${title}</p>
                    <p class="price_color">￥${price}</p>
                </div>
            </div>
        </div>
        </div>`
    parent.innerHTML += html;

    var p = res.slice(34, 35);
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0 pr-2" onclick='window.open("${href}")' style="cursor: pointer;">
     <div class="card">
         <div class="card-body p-0">
              <img class="body_img" src="${pic}" alt="">
             <div class="card-footer text-center">
                 <p class="text-muted">${details}</p>
                 <p class="font-weight-bold">${title}</p>
                 <p class="price_color">￥${price}</p>
             </div>
         </div>
     </div>
     </div>`
    parent.innerHTML += html;

    var p = res.slice(35, 36);
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0" onclick='window.open("${href}")' style="cursor: pointer;">
     <div class="card">
         <div class="card-body p-0">
              <img class="body_img" src="${pic}" alt="">
             <div class="card-footer text-center">
                 <p class="text-muted">${details}</p>
                 <p class="font-weight-bold">${title}</p>
                 <p class="price_color">￥${price}</p>
             </div>
         </div>
     </div>
     </div>`
    parent.innerHTML += html;

    //  第二行
    parent = document.querySelector("#foods-second-detail");
    var p = res.slice(36, 37);
    var { title, details, pic, price, href } = p[0];
    var html = `<div class="col-3 p-0" onclick='window.open("${href}")' style="cursor: pointer;">
     <div class="card">
         <div class="card-body p-0">
             <img class="body_img" src="${pic}" alt="">
             <div class="card-footer text-center">
                 <p class="text-muted">${details}</p>
                 <p class="font-weight-bold"> ${title}</p>
                 <p class="price_color">￥${price}</p>
             </div>
         </div>
     </div>
   </div>`;
    parent.innerHTML = html;

    var p = res.slice(37, 38)
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0 pl-2 pr-2" onclick='window.open("${href}")' style="cursor: pointer;">
        <div class="card">
            <div class="card-body p-0">
                 <img class="body_img" src="${pic}" alt="">
                <div class="card-footer text-center">
                    <p class="text-muted">${details}</p>
                    <p class="font-weight-bold">${title}</p>
                    <p class="price_color">￥${price}</p>
                </div>
            </div>
        </div>
        </div>`
    parent.innerHTML += html;

    var p = res.slice(38, 39);
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0 pr-2" onclick='window.open("${href}")' style="cursor: pointer;">
     <div class="card">
         <div class="card-body p-0">
              <img class="body_img" src="${pic}" alt="">
             <div class="card-footer text-center">
                 <p class="text-muted">${details}</p>
                 <p class="font-weight-bold">${title}</p>
                 <p class="price_color">￥${price}</p>
             </div>
         </div>
     </div>
     </div>`
    parent.innerHTML += html;

    var p = res.slice(39, 40);
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="col-3 p-0" onclick='window.open("${href}")' style="cursor: pointer;">
     <div class="card">
         <div class="card-body p-0">
              <img class="body_img" src="${pic}" alt="">
             <div class="card-footer text-center">
                 <p class="text-muted">${details}</p>
                 <p class="font-weight-bold">${title}</p>
                 <p class="price_color">￥${price}</p>
             </div>
         </div>
     </div>
     </div>`
    parent.innerHTML += html;



    // 每日新品
    parent = document.querySelector("#topNew-first");
    var p = res.slice(40, 41);
    var { title, details, pic, price, href } = p[0];
    var html = `<div onclick='window.open("${href}")' style="cursor: pointer;">
     <img class="topNewLeft" src="${pic}">
     <div class="text1">
         <h5>${title}</h5>
         <h6 class="text-muted">${details}</h6>
         <h6 class="price_color">￥${price}</h6>
     </div>
 </div>`
    parent.innerHTML += html;

    parent = document.querySelector("#two-pics");
    var p = res.slice(41, 42);
    var { title, details, pic, price, href } = p[0];
    var html = `<div class="bg_color_one" onclick='window.open("${href}")' style="cursor: pointer;">
     <img class="topNewMiddle1" src="${pic}">
 </div>`
    parent.innerHTML += html;

    var p = res.slice(43, 44);
    var { title, details, pic, price, href } = p[0];
    var html = `<div class="pt-2" onclick='window.open("${href}")' style="cursor: pointer;">
     <div class="bg_color_two">
     <img class="topNewMiddle2" src="${pic}">
     </div>
   </div> `
    parent.innerHTML += html;

    parent = document.querySelector("#other-two-pic");
    console.log(parent);
    var p = res.slice(42, 43);


    var { title, details, pic, price, href } = p[0];

    var html = `<div class="bg_color_three" onclick='window.open("${href}")' style="cursor: pointer;">
     <img class="topNewRight1" src="${pic}">
     </div>`
    console.log(123)
    parent.innerHTML += html;

    console.log(123)

    parent = document.querySelector("#fourth-pic");
    var p = res.slice(44, 45);
    var { title, details, pic, price, href } = p[0];
    var html = ` <div class="pt-2">
     <div class="bg_color_four" onclick='window.open("${href}")' style="cursor: pointer;">
        <img class="topNewRight2" src="${pic}">
     </div>
 </div>`
    parent.innerHTML += html;


})();




