$(function(){
 
	//$('.cross').hide();

    $('.menu ,.cross').on('click',function(){
        if($("#menubox").hasClass("active")){
            $('.menu_list').animate({marginLeft:'0px'},300);
            setTimeout(() => {
                $("#menubox").removeClass("active");
            }, 300);
            $("body").removeClass("of_hidden");
            //$('.menu').hide();
        }else{
            $('.menu_list').animate({marginLeft:'300px'},300);
            $("#menubox").addClass("active");
            $("body").addClass("of_hidden");
            //$('.menu').hide();
        }
        
        //$('.cross').show();
    });
    // $('.cross').on('click',function(){
    //     if($("#menubox").hasClass("active")){
    //         $('.menu_list').animate({marginLeft:'0px'},300);
    //         //$('.menu').hide();
    //     }else{
    //         $('.menu_list').animate({marginLeft:'400px'},300);
    //         //$('.menu').hide();
    //     }
        
    //     //$('.cross').show();
    // });

    $('.menu_list >ul >li >a').on('click',function(){
        if($(this).next().is(':visible'))
        {
            $(this).next().stop().slideUp(500);
            $(this).children('img').attr('src','img/m_img/down_icon.png');
        }else{
            $('.sub_menu').stop().slideUp(500);
            $('.menu_list >ul >li >a').children('img').attr('src','img/m_img/down_icon.png');
            $(this).next().stop().slideDown(500);
            $(this).children('img').attr('src','img/m_img/up_icon.png');
        };
    });

    // $('.cross').on('click',function(){
    //     $('.menu_list').animate({marginLeft:'0px'},300);
    //     $('.menu').show();
});
    
    
    

/* foot customer */
$(function(){
    $('.nav1>li>a').bind('mouseover focus',function(){
        $('.nav1 ul').hide();
        $(this).next().show();
    });
    $('.nav1').mouseleave(function(){
        $('.nav1 ul').stop().slideUp(300);
    });
   
});
/* 모바일/테블릿 */
$(function(){
    $("button").click(function(){
        $(".cs_menu ul").toggle();
        $(".cs_menu ul li").show();
      });
    $(".cs_menu").on('mouseleave',function(){
        $(".cs").stop().slideUp(500);
    });  
    });


/* 위로 이동 버튼 */ 
$(function(){
       const defaultTop=parseInt($('#top_button').css('top'));
      $(window).on('scroll',function(){
       const scv=$(window).scrollTop();
      $('#top_button').stop().animate({top:scv+defaultTop+"px"},1000);
      });
       $('#top_button').on('click',function(){
        $('html,body').animate({scrollTop:0},500);
        return false;
     });
});
    
    