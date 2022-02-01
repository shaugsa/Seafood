$(function(){

    $('.header-slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt="arrow-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt="arrow-next"></button>',
        vertical: true,
    });

    $('.product__name').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.product__content',
        vertical: true,
        prevArrow: '<button type="button" class="product-prev"><img src="images/name-arrow-up.svg" alt="arrow-prev"></button>',
        nextArrow: '<button type="button" class="product-next"><img src="images/name-arrow-down.svg" alt="arrow-next"></button>',
        centerMode: true,
      });
      $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        fade: true,
        arrows: false,
      });

});
