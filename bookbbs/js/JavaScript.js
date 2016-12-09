var brightness;
//显示遮罩
function cover(brightness) {
    if (typeof(div) == 'undefined') {
        div = document.createElement('div');
        div.setAttribute('style', 'position:fixed;top:0;left:0;outline:5000px solid;z-index:99999;');
        document.body.appendChild(div);
    } else {
        div.style.display = '';
    }
    div.style.outlineColor = 'rgba(0,0,0,' + brightness + ')';
}
//事件监听
window.addEventListener('keydown', function(e) {
    if (e.altKey && e.keyCode == 90) { //Alt+Z:打开夜间模式
        cover(brightness = 0.3);
    }
    if (e.altKey && e.keyCode == 88) { //Alt+X:关闭
        cover(brightness = 0);
    }
    if (e.altKey && e.keyCode == 38) { //Alt+↑:增加亮度
        if (brightness - 0.05 > 0.05) cover(brightness -= 0.05);
    }
    if (e.altKey && e.keyCode == 40) { //Alt+↓:降低亮度
        if (brightness + 0.05 < 0.95) cover(brightness += 0.05);
    }
}, false);
$(document).ready(function(){$(".flexy-menu").flexymenu({speed: 400});});
$.fn.flexymenu=function(e){function r(){$(".flexy-menu").find("li").unbind();$(".flexy-menu").find("ul").hide(0);if(window.innerWidth<=768){o();s();if(n==true){a();n=false}}else{u();i();if(t.type=="horizontal"&&t.align=="right"&&n==false){a();n=true}}}function i(){$(".flexy-menu li").bind("mouseover",function(){$(this).children("ul").stop(true,true).fadeIn(t.speed)}).bind("mouseleave",function(){$(this).children("ul").stop(true,true).fadeOut(t.speed)})}function s(){$(".flexy-menu > li").bind("click",function(){if($(this).children("ul").css("display")=="none"){$(this).find("ul").slideDown(t.interval)}else{$(this).children("ul").slideUp(t.interval)}})}function o(){$(".flexy-menu > li:not(.showhide)").hide(0);$(".flexy-menu > li.showhide").show(0);$(".flexy-menu > li.showhide").bind("click",function(){if($(".flexy-menu > li").is(":hidden")){$(".flexy-menu > li").slideDown(300)}else{$(".flexy-menu > li:not(.showhide)").slideUp(300);$(".flexy-menu > li.showhide").show(0)}})}function u(){$(".flexy-menu > li").show(0);$(".flexy-menu > li.showhide").hide(0)}function a(){$(".flexy-menu > li").addClass("right");var e=$(".flexy-menu").width();var t=$(".flexy-menu").children("li");var n=0;$(".flexy-menu").children("li:not(.showhide)").detach();for(var r=t.length;r>=1;r--){$(".flexy-menu").append(t[r])}}var t={speed:300,type:"horizontal",align:"left"};$.extend(t,e);var n=false;if(t.type=="vertical"){$(".flexy-menu").addClass("vertical");if(t.align=="right"){$(".flexy-menu").addClass("right")}}$(".flexy-menu").prepend("<li class='showhide'><span class='title'></span><span class='icon'><em></em><em></em><em></em><em></em></span></li>");r();$(window).resize(function(){r()})};

function night() {      
$(".cover").css("display","block");
}   











