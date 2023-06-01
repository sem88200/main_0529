$(function(){
  const swiper = new Swiper('.swiper-container',{
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    spaceBetween: 30,
    autoplay: 4000,                     //셋뚜
    autoplayDisableOnInteraction: false //셋뚜
  });
});
