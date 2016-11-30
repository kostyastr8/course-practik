
$(document).ready(function(){
    var $slider = $('.slider');

    $(".slider:before").on('click', function(e) {
        e.preventDefault();
        $('this').slick('slickPrev');
    });

    $(".slider:after").on('click', function(e) {
        e.preventDefault();
        $slider2.slick('slickNext');
    });

$slider.slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 4,
    arrows:false,
    responsive:[
        {
            breakpoint:1200,
            settings:{
                slidesToShow:3,
                dots:true
            }
        },
        {
            breakpoint:960,
            settings:{
                slidesToShow:2,
                dots:true
            }
        }
    ]
});
});
