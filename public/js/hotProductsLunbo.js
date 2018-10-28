var $bigbanner =$("#bigbanner")
var ulwidth=1100;
var $hot1 =$("#hot1");
var $hot2 = $('#hot2');
var ltbt = $(".btnlt");
var rtbt = $(".btnrt");
var isMove = true;

function stop(){
    clearInterval(hotTimer)
}
function start(){
    clearInterval(hotTimer);
    setTime();
}

function setTime(){
    hotTimer = setInterval(function(){
        if(isMove){
            $hot1.css('transition','0.6s');
            $hot2.css('transition','0.6s');
            var hot1Left = parseInt($hot1.css('left'));
            var hot2Left = parseInt($hot2.css('left'));
            $hot1.css("left",hot1Left -ulwidth+'px');
            $hot2.css("left",hot2Left -ulwidth+'px');
            isMove = false;
        }
     },2000);
 }
 setTime();
$hot1.on('transitionend',function(){
    console.log(6666);
    isMove = true;
    var hot1Left = parseInt($hot1.css('left'));
    if(hot1Left ==-2200){
        $hot2.css('transition','0s');
        $hot2.css('left',1100+'px');
    }
})
$hot2.on('transitionend',function(){
    isMove = true;
    var hot2Left = parseInt($hot2.css('left'));
    if(hot2Left ==-2200){
        $hot1.css('transition','0s');
        $hot1.css('left',1100+'px');
    }
})
ltbt.click(function()
{   
    if(isMove){
        $hot1.css('transition','0.6s');
        $hot2.css('transition','0.6s');
        var hot1Left = parseInt($hot1.css('left'));
        var hot2Left = parseInt($hot2.css('left'));
        $hot1.css("left",hot1Left -ulwidth+'px');
        $hot2.css("left",hot2Left -ulwidth+'px');
        isMove = false;
    }

})

rtbt.click(function()
{   
    if(isMove){
        $hot1.css('transition','0.6s');
        $hot2.css('transition','0.6s');
        var hot1Left = parseInt($hot1.css('left'));
        var hot2Left = parseInt($hot2.css('left'));
        $hot1.css("left",hot1Left -ulwidth+'px');
        $hot2.css("left",hot2Left -ulwidth+'px');
        isMove = false;
    }
  
})