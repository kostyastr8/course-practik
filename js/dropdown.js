$(function () {

    var $headerLi = $('.menu nav li').has('ul');
    $headerLi.find('a:first').on('click', function (e) {
        e.preventDefault();
        $(this).siblings('ul').stop().slideToggle();
        $('.menu nav li').has('ul').toggleClass('open');
    });

    var $headerHideMenu = $('.hide-menu a');
    var $headerMenu = $('.menu nav > ul');
    $headerHideMenu.on('click', function (e) {
        e.preventDefault();
    });
    });