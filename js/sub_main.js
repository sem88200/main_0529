    $(function(){
    const swiper = new Swiper('.swiper-container',{
      pagination: '.swiper-pagination',
      paginationClickable: true,
      spaceBetween: 30,
      autoplay: false,                     //셋뚜
      autoplayDisableOnInteraction: false //셋뚜
    });

    $(".filter_menu .btn").on('click',function(){
        $(".filter_menu ul").toggle();
        $(".filter_menu ul li").show();
      });
    $(".filter_menu").on('mouseleave',function(){
        $(".filter_list").stop().slideUp(500);
    });



  /* 오른쪽 주문 팝업 */
    /*$(function(){
      $('.prd-inner .cart a').on('click',function(e){
        $(this).parent().parent().parent().next().toggleClass("active");
       e.preventDefault();
       e.stopPropagation();
      });

      $('.order_list #close').on('click', function(e){
        $(this).parent().parent().parent().parent().hide();
       e.preventDefault();
       e.stopPropagation();
      });
    });*/

      $('.cart a, #close').on('click',function(){
        if($('#orderbox').hasClass('active')){
          $('.order_list').animate({marginRight:'0px'},300);
          setTimeout(() => {
            $('#orderbox').removeClass('active');
          },300);
          $('body').removeClass('of_hidden');
        }else{
          $('.order_list').animate({marginRight:'300px'},300);
          $('#orderbox').addClass('active');
          $('body').addClass('of_hidden');

          const imgSrc = $(this).closest(".prd_contents2").find(".swiper-slide:nth-child(1) img").attr("src");
          $(".order_inner .visual li img").attr("src",imgSrc);
        }
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





    });

    // $(function(){
//   $(".txt").on('click',function(){
//       $(".content").toggle();
//       $(".content>li").show();
//     });
//   $("#container .txt").on('mouseleave',function(){
//       $(".content").stop().slideUp(500);
//   });

//   });

// $(function(){
//     $('.txt').on('click',function(){
//       // $(".content").toggle();
//       $('.content').stop().slideDown(500);
//       $(".content>li").show();
//       if($(this).next().is(':visible'))
//       {
//           $(this).next().stop().slideUp(500);
//       }else{
//           $('.content').stop().slideUp(500);
//           $(this).next().stop().slideDown(500);
//       }
       
//       });
//     });

