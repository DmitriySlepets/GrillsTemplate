$(function () {
    //слайдеры
    if ($('div').is('.gallery__grid')) {
        var gallerySwiper = new Swiper('.gallery__grid', {
            speed: 400,
            spaceBetween: 0,
            watchOverflow: true,
            pagination: {
                el: '.gallery__pagination.swiper-pagination',
                type: 'bullets',
            },
            init: false
        });
        function galleryInit() {
            if($(window).outerWidth() < 768) {
                gallerySwiper.init();
                $(window).resize(function () {
                    if($(window).outerWidth() >= 768) {
                        gallerySwiper.destroy();
                    } else {
                        gallerySwiper.init().update();
                    }
                });
            }
        }
        galleryInit();
        $(window).resize(function () {
            galleryInit();
        });
    }
    if ($('div').is('._short.recommend__slider')) {
        var recommendSwiper = new Swiper('.recommend__slider', {
            speed: 400,
            spaceBetween: 25,
            watchOverflow: true,
            loop: true,
            navigation: {
                nextEl: '.recommend__control.swiper-button-next',
                prevEl: '.recommend__control.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                414: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 3
                }
            },
            init: false
        });
        recommendSwiper.init();
    }
    if ($('div').is('._wide.recommend__slider')) {
        var recommendSwiper = new Swiper('.recommend__slider', {
            speed: 400,
            spaceBetween: 25,
            watchOverflow: true,
            navigation: {
                nextEl: '.recommend__control.swiper-button-next',
                prevEl: '.recommend__control.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                414: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 3
                },
                1024: {
                    slidesPerView: 4
                },
                1200: {
                    slidesPerView: 5
                },
                1440: {
                    slidesPerView: 6
                },
            },
            init: false
        });
        recommendSwiper.init();
    }
    if ($('div').is('.set__slider')) {
        var setSwiper = new Swiper('.set__slider', {
            speed: 400,
            spaceBetween: 25,
            watchOverflow: true,
            loop: true,
            navigation: {
                nextEl: '.set__control.swiper-button-next',
                prevEl: '.set__control.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                414: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 3
                },
                1024: {
                    slidesPerView: 4
                }
            },
            init: false
        });
        setSwiper.init();
    }
    //яндекс карта
    if($('div').is('#map')) {
        ymaps.ready(init);
        function init(){
            // Создание карты.
            var indexMap = new ymaps.Map("map", {
                center: [55.914716, 37.407546],
                zoom: 16,
                controls: []
            });
        }
    }
    //бургер меню
    $('.burger').on('click', function () {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            bodyScrollLock.clearAllBodyScrollLocks();
        } else {
            $(this).addClass('active');
            bodyScrollLock.disableBodyScroll($('.burger__popup'));
        }
    });
    //окно поиска
    $('.header__search').on('click', function () {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            bodyScrollLock.clearAllBodyScrollLocks();
        } else {
            $(this).addClass('active');
            bodyScrollLock.disableBodyScroll($('.header__search-popup'));
        }
    });
    $(document).mouseup(function (e){
        if($('.header__search').hasClass('active')) {
            var div = $(".search__popup");
            if (!div.is(e.target)
                && div.has(e.target).length === 0) {
                $('.header__search').removeClass('active');
                bodyScrollLock.clearAllBodyScrollLocks();
            }
        }
    });
    //окно обратки
    $('.popup-feedback').on('click', function () {
        if($('.feedback').hasClass('active')) {
            $('.feedback').removeClass('active');
            bodyScrollLock.clearAllBodyScrollLocks();
        } else {
            $('.feedback').addClass('active');
            bodyScrollLock.disableBodyScroll($('.feedback'));
        }
    });
    $(document).mouseup(function (e){
        if($('.feedback').hasClass('active')) {
            var div = $(".feedback__form");
            if (!div.is(e.target)
                && div.has(e.target).length === 0) {
                $('.feedback').removeClass('active');
                bodyScrollLock.clearAllBodyScrollLocks();
            }
        }
    });
    //мобильный сайдбар
    if($('div').is('.sidebar')) {
        var count = $('.sidebar li').length,
            heightList = count * 46;
        $('.sidebar__toggle').on('click', function () {
            $(this).toggleClass('active');
            if($(this).hasClass('active')) {
                $('.sidebar ul').css('max-height', heightList);
            } else {
                $('.sidebar ul').css('max-height', 0);
            }
        });
        $(window).resize(function () {
            $('.sidebar__toggle').removeClass('active');
            $('.sidebar ul').removeAttr('style');
        });
    }
    //превью гриля
    $('.detailed__wrap-dots span').each(function (i) {
        $(this).on('click', function () {
            $('.detailed__wrap-dots span.active').removeClass('active');
            $('.detailed__wrap-item.active').removeClass('active');
            $(this).addClass('active');
            $('.detailed__wrap-item').eq(i).addClass('active');
        });
    })
    //табы в инструкциях
    $('.page-tabs__header .readmore').each(function (i) {
        $(this).on('click', function () {
            $('.page-tabs__header .active').removeClass('active');
            $('.page-tabs__item.active').removeClass('active');
            $(this).addClass('active');
            $('.page-tabs__item').eq(i).addClass('active');
        });
    })
});
