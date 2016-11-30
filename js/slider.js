
$(document).ready(function(){
    var $slider = $('.slider');


$slider.slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 4,
    arrows:true,
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
