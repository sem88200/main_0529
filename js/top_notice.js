$(function(){
 
  const ticker=function(){
    setTimeout(function(){

        $('#ticker li:first').animate({marginTop:'-30px'},400,function()
          {
            $(this).detach().appendTo('ul#ticker').removeAttr('style');
          });

       ticker();  
          },4000);    

          };  
    ticker();
    
    $('button').on('click',function(){
      $('.top_notic').hide();
    });
});