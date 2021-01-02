const $simpleCarousel = document.querySelector('js-carousel--simple')

new Glider($simpleCarousel, {
    slidesToShow: 2, 
    slidesToScroll: 2,
    draggable: true, 
})