
$(function () {
    addCtrl('#news-1-crtl .prev', '#news-1-crtl .next', '#news-1-news', 245);
    addCtrl('#news-2-ctrl .prev', '#news-2-ctrl .next', '#news-2-1', 285);
    addCtrl('#xwmt-ctrl .prev', '#xwmt-ctrl .next', '#xwmt-1', 245);
    addCtrl('#xsxx-ctrl .prev', '#xsxx-ctrl .next', '#xsxx-1', 245);
    addCtrl('#gxsy-ctrl .prev', '#gxsy-ctrl .next', '#gxsy-1', 245);
    addCtrl('#tzgg-ctrl .prev', '#tzgg-ctrl .next', '#tzgg-1', 245);
    

});



$(function(){
 
    $('#xsxx').click(function(){
      $('.xsxx').addClass('apear');
      $('#xsxx').addClass('bg');
      $('.xsxx').removeClass('disapear');
      $('#xwmt').removeClass('bg');
      $('#tzgg').removeClass('bg');
      $('#gxsy').removeClass('bg');
      $('.tzgg').addClass('disapear');
      $('.xwmt').addClass('disapear');
      $('.gxsy').addClass('disapear');
      
    });

    
});

$(function(){
 
    $('#gxsy').click(function(){
      $('.gxsy').addClass('apear');
      $('#gxsy').addClass('bg');
      $('.gxsy').removeClass('disapear');
      $('#xwmt').removeClass('bg');
      $('#xsxx').removeClass('bg');
      $('#tzgg').removeClass('bg');
      $('.xsxx').addClass('disapear');
      $('.xwmt').addClass('disapear');
      $('.tzgg').addClass('disapear');
      
    });

    
});

$(function(){
 
    $('#tzgg').click(function(){
      $('.tzgg').addClass('apear');
      $('#tzgg').addClass('bg');
      $('.tzgg').removeClass('disapear');
      $('#xwmt').removeClass('bg');
      $('#xsxx').removeClass('bg');
      $('#gxsy').removeClass('bg');
      $('.xsxx').addClass('disapear');
      $('.xwmt').addClass('disapear');
      $('.gxsy').addClass('disapear');
      
    });

    
});

$(function(){
 
    $('#xwmt').click(function(){
      $('.xwmt').addClass('apear');
      $('#xwmt').addClass('bg');
      $('.xwmt').removeClass('disapear');
      $('#tzgg').removeClass('bg');
      $('#xsxx').removeClass('bg');
      $('#gxsy').removeClass('bg');
      $('.xsxx').addClass('disapear');
      $('.tzgg').addClass('disapear');
      $('.gxsy').addClass('disapear');
      
    });

    
});

	jQuery(function($){


	$('#banner').slideBox({

		direction : 'top',//left,top#方向

		duration : 0.3,//滚动持续时间，单位：秒

		easing : 'swing',//swing,linear//滚动特效

		delay : 5,//滚动延迟时间，单位：秒

		startIndex : 1//初始焦点顺序

	});


});


function addCtrl(objCtrl_prev, objCtrl_next, obj, value) {

    $(objCtrl_prev).click(function () {
        if ($(obj).css('top') >= '0px') {
            $(obj).clearQueue();
            $(obj).stop(true).animate({
                top: "-"+value*2+"px"
            });
        } else {
            $(obj).animate({
                top: "+="+value+"px"
            }, 500);

        }

    });

    $(objCtrl_next).click(function () {
        if ($(obj).css('top') == "-"+value*2+"px") {
            $(obj).clearQueue();
            $(obj).stop(true).animate({
                top: '0px'
            });
        } else {
            $(obj).animate({
                top: "-="+value+"px"
            }, 500);
        }
    });

}
