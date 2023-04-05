$(function () {

  document.addEventListener("touchstart", function(){}, true);

  $('.catalog__filters-btn').on('click', function () {
    $('.catalog__filters').removeClass('catalog__filters--active')
  })

  $('.catalog-top__btn').on('click', function () {
    $('.catalog__filters').addClass('catalog__filters--active')
  });

  $(window).resize(function(){
    var windowWidth = $('body').innerWidth();
      if(windowWidth < 992){$('.best__products-box, .catalog-sale__items').slick({
      fade: true,
      arrows: false,
      dots: true
    });}
  });

  $(window).resize(function(){
    var windowWidth = $('body').innerWidth();
    if(windowWidth < 1200){$(".popular__filter-btn").addClass('btn-nohover');}
    if(windowWidth > 1200){$(".popular__filter-btn").removeClass('btn-nohover')}
  });

  $(window).resize(function(){
    var windowWidth = $('body').innerWidth();
    if(windowWidth < 1200){$(".product-best").addClass('product-nohover');}
    if(windowWidth > 1200){$(".product-best").removeClass('product-nohover')}
  });

  $('.menu__btn').on('click', function() {
    $('.mobile-menu').addClass('mobile-menu--active');
    $('.user-nav__link-item').addClass('user-nav__link-item--opacity');
    $('.body').addClass('body--active')
  });

  $('.mobile-menu__btn').on('click', function () {
    $('.mobile-menu').removeClass('mobile-menu--active');
    $('.user-nav__link-item').removeClass('user-nav__link-item--opacity')
    $('.body').removeClass('body--active')
  });

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });


  $('.product__slider').slick({
        fade: true,
        responsive: [
    {
      breakpoint: 600,
      settings: {
        arrows: false
      }
    }
  ]
    });

  $('.product-slider__box').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        centerMode: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        centerMode: true
      }
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 475,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true
      }
    }
  ]
    });

  $(".product__star-rating").rateYo({
    starWidth: "16px",
    readOnly: true,
    spacing: "5px",
    normalFill: "#C1C1C14D",
    ratedFill: "#FFB800"
  });

  $(".form__star-rating").rateYo({
    starWidth: "16px",
    readOnly: false,
    spacing: "5px",
    normalFill: "#C1C1C14D",
    ratedFill: "#FFB800"
  });

  $('select, .product__info-num').styler();

  $(".js-range-slider").ionRangeSlider({
    skin: "round",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    }
  });

  var mixer = mixitup('.popular__filter-items');

   $('.feedback__slider').slick({
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

});