$(function(){

    function modalOn(){
        $('.modal_back').addClass('back_on');
        $('body').addClass('bady_lock');
    }
    function modalOff(){
        $('.modal_back').removeClass('back_on');
        $('body').removeClass('body_lock');
    }
        $('.menu').on('click',function(){
            modalOn();
    });
        $('.cross').on('click',function(){
            modalOff();
    });
});

