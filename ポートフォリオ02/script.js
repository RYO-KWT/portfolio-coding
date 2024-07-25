$(function () {
    /* ハンバーガーメニュー↓ */
    $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active');
        $(".header-nav").toggleClass('is-active');
        $(".header-nav-list").toggleClass('is-active');
        $('body').css('overflow', $(this).hasClass('is-active') ? 'hidden' : 'auto');
    });

    $('.header-nav-list a').on('click', function () {
        $(".hamburger").removeClass('is-active');
        $(".header-nav").removeClass('is-active');
        $(".header-nav-list").removeClass('is-active');
        $('body').css('overflow', 'auto');
    });
    /* ハンバーガーメニュー↑ */

    /* sec3 カルーセル↓ */
    $('.works-slide-item').slick({
        slidesToShow: 5,
        variableWidth: true,
        centerMode: true,
        autoplay: true,
        dots: true,
    });
    /* sec3 カルーセル↑ */
});




/* autoplay: true,
autoplaySpeed: 5000,
slidesToShow: 3, // 3,に指定しないと左側に余白が生まれる。
variableWidth: true,
centerMode: true,
arrows: true, //← 表示されない
dots: true, //← 表示されるが写真に重なっている、ulに指定したマージンがリセットされる。*/