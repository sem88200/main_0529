$(function(){
    $(".search").on("click",function(){
        $(".search-modal").stop().fadeIn(400);
    });      	
    function modalOn(){
        $('.search-modal').addClass('back_on');
        $('body').addClass('bady_lock');
    }
    $(".search-close").on("click", function() {
        $(".search-modal").stop().fadeOut(400,function(){
        $("#search-input").val('');
        });
      });
    function modalOff(){
        $('.search-modal').removeClass('back_on');
        $('body').removeClass('body_lock');
    }
        $('.search').on('click',function(){
            modalOn();
    });
        $('.search-close').on('click',function(){
            modalOff();
    });
    
    
    
	
    
 });















