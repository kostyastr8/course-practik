
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
            breakpoint:1024,
            settings:{
                slidesToShow:2,
                arrows:false,
                dots:true
            }
        },

        {
            breakpoint:768,
            settings:{
                infinite: true,
                slidesToShow:2,
                arrows:false,
                dots:true
            }
        },
        {
            breakpoint:565,
            settings: {
                slidesToShow:1,
                arrows:false,
                dots:true
            }
        }
    ]
});


    $slider2.slick({
        arrows:false,
        autoplay:true,
        dots:true
    });
});