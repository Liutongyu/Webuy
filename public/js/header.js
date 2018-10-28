(async function(){ 
  // var a = location.search;  //获取url中"?"符后的字串
  // url: "http://localhost:3300/login/singin?lid="+a,
          $.ajax({
            url: "http://localhost:3300/login/singin",
            type: "get",
            success:function(res){
               var uname=res.sessionUname
                var $uname = $("#uname");
                var $singin = $("#singin");
                var $login = $("#login");
                if(uname != null)
                { 
                  $uname.html(uname);
                  $singin.removeClass("disappear");
                  $login.addClass("disappear");
                }
                else
                {
                   $singin.addClass("disappear");
                   $login.removeClass("disappear");
                }
            }    
   });

   var $login = $("#login");
   var $uname = $("#uname");
   var $singin = $("#singin");
   var $btnSignout = $("#btnSignout");
   $btnSignout.click(function(){
    $.ajax({
      url: "http://localhost:3300/login/signout",
      type: "get",
      success:function(res){
         alert('账号已注销');
         $uname.html(null);
         $singin.addClass("disappear");
         $login.removeClass("disappear"); 
      }    
  });
  
  
    
  })
  
})();


