$(function(){
    $('.blog-info').slick({
        arrows:false,
        autoplay:3000,
        dots:true
    });
    $('.burger-menu').on('click',function(){
        $('.header-menu').toggleClass('active');
    });
    var Mixer = mixitup ('.galery-images');
});