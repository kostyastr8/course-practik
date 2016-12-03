
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
            breakpoint:1130,
            settings:{
                slidesToShow:4,
                arrows:false,
                dots:true
            }
        },

        {
            breakpoint:1024,
            settings:{
                slidesToShow:3,
                arrows:false,
                dots:true
            }
        },
        {
            breakpoint:768,
            settings:{
                slidesToShow:2,
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