$(function () {

    var $headerLi = $('li').has('.dropdown');
    $headerLi.find('a:first').on('click', function (e) {
        e.preventDefault();
        $('li').has('.dropdown').toggleClass('open');
        $(this).siblings('.dropdown').stop().slideToggle();
    });
    });