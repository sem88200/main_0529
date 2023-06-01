$(function(){

    $("ul.panel li:not("+$("ul.tab li a.selected").attr("href")+")").show();
                            //새로운 값 나왔을때 연결 +$
 //$('ul.panel li:not("#tab1")').show(); 
            $("ul.tab li a").on("click",function(){
                $("ul.tab li a").removeClass("selected")
                $(this).addClass("selected");
                $("ul.panel li").hide();
                $($(this).attr("href")).show();
                return false;
            });


      //커스텀 셀렉트
      const $sel = $(".cus_sel .txt");
      $sel.on("click",function(){
        if($(this).closest(".cus_sel").hasClass("active")){
          $(this).closest(".cus_sel").removeClass("active");
          $(this).closest(".cus_sel").find(".content").stop().slideUp(100);
        }else{
          $(this).closest(".cus_sel").addClass("active");
          $(this).closest(".cus_sel").find(".content").stop().slideDown(100);
        }
      });
       


/* 위로 이동 버튼 */ 

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