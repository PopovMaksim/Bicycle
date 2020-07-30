
/*           SLIDER             */

let slides = document.querySelectorAll('.slider__slide'),
    dots = document.querySelectorAll('.slider__dots'),
    dotsActive;

dots.forEach((e, i) => {
    if (e.classList.contains('slider__dots_active')) {
        dotsActive = i;
        slides[dotsActive].style.opacity = '1';
    }
    e.addEventListener('click', () => {
        dots[dotsActive].classList.remove('slider__dots_active');
        slides[dotsActive].classList.remove('slider__slide_active');
        slides[dotsActive].style.opacity = '0';
        dotsActive = i;
        e.classList.add('slider__dots_active');
        slides[dotsActive].classList.add('slider__slide_active');
        
        setTimeout(() => {
            slides[dotsActive].style.opacity = '1';
        }, 50)
    }, false);    
});
