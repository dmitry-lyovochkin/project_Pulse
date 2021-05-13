$(document).ready(function(){ /* обертка говорит что загрузка слайдера будет только тогда, когда документ полностью готов. Обращаемся через $=JQuery */
    $('.carousel__inner').slick({
        speed: 1100,
        /* adaptiveHeight: true, */ /* это автоматическое переключение высоты  */
        autoplay: true,
        autoplaySpeed: 1500,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,  /* будут работать от 0 до 1024px. Всё что выше - будет работать по правилам, что описаны выше */ /* 768 - классическая граница перехода с мелких комп на мобильные и планшетные версии */
                settings: { /* те же настройки, что и сверху */
                    dots: true, /* появятся точки вместо стрелок */
                    arrows: false /* отключит стрелки после опред разрешения */
                }    
            }      
        ]
    }); 
// JQuery-tabs с сайта denis-creative.com с модификацией под себя
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('active');
    });
});