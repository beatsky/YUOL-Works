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


$("#change1").css("overflow","hidden");
function updata() {  
 $("#change1").css({background:"#0d75e1"});
 $("#change1").css("opacity","1");
 $("#change1").css("right","0");
    $("#change1").css("overflow","hidden");
 ("#change2").css("transform","rotateY(180deg)");
}
function updata1() {  
 $("#change1").css("right","100%");
 $("#change1").css("opacity","0");
 $("#change1").css("overflow","hidden");
}

$(document).ready(function(){  
 setInterval(updata, 1000);
}); 
$(document).ready(function(){  
 setInterval(updata1, 2000);
});
$("#change2").css("overflow","hidden");
function updata() {  
 $("#change2").css({background:"#0d75e1"});
 $("#change2").css("opacity","1");
 $("#change2").css("right","0");
    $("#change2").css("overflow","hidden");
 ("#change2").css("transform","rotateY(180deg)");
}
function updata1() {  
 $("#change2").css("right","100%");
 $("#change2").css("opacity","0");
 $("#change2").css("overflow","hidden");
}

$(document).ready(function(){  
 setInterval(updata, 3000);
}); 
$(document).ready(function(){  
 setInterval(updata1, 7000);
});
$("#change2").css("overflow","hidden");
function updata() {  
 $("#change2").css({background:"#0d75e1"});
 $("#change2").css("opacity","1");
 $("#change2").css("right","0");
    $("#change2").css("overflow","hidden");
 ("#change2").css("transform","rotateY(180deg)");
}
function updata1() {  
 $("#change2").css("right","100%");
 $("#change2").css("opacity","0");
 $("#change2").css("overflow","hidden");
}

$(document).ready(function(){  
 setInterval(updata, 3000);
}); 
$(document).ready(function(){  
 setInterval(updata1, 7000);
});

$("#change2").css("overflow","hidden");
function updata() {  
 $("#change2").css({background:"#0d75e1"});
 $("#change2").css("opacity","1");
 $("#change2").css("right","0");
    $("#change2").css("overflow","hidden");
 ("#change2").css("transform","rotateY(180deg)");
}
function updata1() {  
 $("#change2").css("right","100%");
 $("#change2").css("opacity","0");
 $("#change2").css("overflow","hidden");
}

$(document).ready(function(){  
 setInterval(updata, 3000);
}); 
$(document).ready(function(){  
 setInterval(updata1, 7000);
});












