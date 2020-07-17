$(document).ready(function() {
    $('.slider').slick({
        arrows:true,            //стрелки вкл/выкл
        dots: false,             //точки
        adaptiveHeight: true,   // адаптив слайдера
        slidesToShow:4,         // количество слайдов на эк.
        slidesToScroll:1,       // количество пролистывемых слайдов
        speed: 500,             // скорость пролистывания слайдов
        easing:'linear',        // рисунок анимации
        infinite:true,          // будет ли слайдер бесконечным
        initialSlide:0,         // с какова слада начать отображение первым
        autoplay:false,         // автопролистывание слайдов
        autoplaySpeed:1500,     // скорость автопролистывания сладов
        pauseOnFocus:true,      // остановка слайда при фокусе на него
        pauseOnHover:true,      // остановка слайда при наведении мыши
        pauseOnDotsFocus:true,  // остановка слайда при наведении на точки 
        draggable:true,         // отключение перелистывания мошью
        swipe:true,             // отключение пепелистывания на смартфоне
        touchTreshold:5,        // не понятно что это но по умолчании значение 5))
        touchMove:true,         // удержание слайда (например на смартфоне)
        waitForAnimate:false,   // при нажании на стрелу следующий слайд не появится пока предыдущий не закончит анимацию
        centerMode:false,       // ставит средний слад по центру
        variableWidth:false,    // автоопределение ширишы слайда
        rows:1,                 // этажи содержимого слайдов
        slidesPerRow:1,         // количество колонн в этажах слайда
        vertical:false,         // делает вертикальным слады (не забудь переключиться [.slider .slick-track{display: block}])
        verticalSwiping:false,  // скролл для вертикального слайда
        asNavFor:false,  // объеденение двух слайдов
        // колличество слайдов про размере экрана 768 и 480
        responsive:[
            {
                breakpoint: 1082,
                settings: {
                    slidesToShow:3,
                }
            },
            {
                breakpoint: 821,
                settings: {
                    slidesToShow:2,
                }
            },
            {
                breakpoint: 558,
                settings: {
                    slidesToShow:1,
                },
                centerMode:true,
            }
        ],
        mobileFirst:false,    // подмена breakpoint c max-width на min-width
        //appendArrows:$('.exemple'), // пепемещение стрелок (нужно указать в какой блок он переезжают)
        //appendDots:$('exemple'),    // пепемещение стрелок (нужно указать в какой блок он переезжают)
        
    });
});

$(document).ready(function() {
    $('.slider__second').slick({
        arrows:false,            //стрелки вкл/выкл
        dots:true,             //точки
        adaptiveHeight: true,   // адаптив слайдера
        slidesToShow:1,         // количество слайдов на эк.
        slidesToScroll:1,       // количество пролистывемых слайдов
        speed: 500,             // скорость пролистывания слайдов
        easing:'linear',        // рисунок анимации
        infinite:true,          // будет ли слайдер бесконечным
        initialSlide:0,         // с какова слада начать отображение первым
        autoplay:false,         // автопролистывание слайдов
        autoplaySpeed:1500,     // скорость автопролистывания сладов
        pauseOnFocus:true,      // остановка слайда при фокусе на него
        pauseOnHover:true,      // остановка слайда при наведении мыши
        pauseOnDotsFocus:true,  // остановка слайда при наведении на точки 
        draggable:true,         // отключение перелистывания мошью
        swipe:true,             // отключение пепелистывания на смартфоне
        touchTreshold:5,        // не понятно что это но по умолчании значение 5))
        touchMove:true,         // удержание слайда (например на смартфоне)
        waitForAnimate:false,   // при нажании на стрелу следующий слайд не появится пока предыдущий не закончит анимацию
        centerMode:false,       // ставит средний слад по центру
        variableWidth:false,    // автоопределение ширишы слайда
        rows:1,                 // этажи содержимого слайдов
        slidesPerRow:1,         // количество колонн в этажах слайда
        vertical:false,         // делает вертикальным слады (не забудь переключиться [.slider .slick-track{display: block}])
        verticalSwiping:false,  // скролл для вертикального слайда
        asNavFor:false,  // объеденение двух слайдов
        // колличество слайдов про размере экрана 768 и 480
        responsive:[
            {
                breakpoint: 1094,
                settings: {
                    slidesToShow:1,
                }
            }
        ],
        mobileFirst:false,    // подмена breakpoint c max-width на min-width
        //appendArrows:$('.exemple'), // пепемещение стрелок (нужно указать в какой блок он переезжают)
        //appendDots:$('exemple'),    // пепемещение стрелок (нужно указать в какой блок он переезжают)
        
    });
});