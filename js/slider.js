
$(document).ready(function(){
    var $slider = $('.slider');
    var $slider2 = $('.slider2');


$slider.slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 4,
    arrows:true,
    responsive:[
        {
            breakpoint:960,
            settings:{
                slidesToShow:3,
                dots:true
            }
        },
        {
            breakpoint:780,
            settings:{
                slidesToShow:2,
                dots:true
            }
        }
    ]
});


    $slider2.slick({
        arrows:false,
        autoplay:false,
        dots:true
    });
});