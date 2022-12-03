
const body = document.querySelector('body');
const nav = document.querySelector('.navigation');
const menu = document.querySelector('.navigation__burger');
const menuDisplay = document.querySelector('.navigation__nav');
const menuList = document.querySelectorAll('.navigation__menu');
const mainMenu = document.querySelector('.navigation__menu--main');
const subMenu = document.querySelectorAll('.navigation__arr');
const backBtn = document.querySelector('.btn-back');

const carouselSlides = document.querySelectorAll('.events__carousel');
const prev = document.querySelector('.btn--prev');
const next = document.querySelector('.btn--next');


menu.addEventListener('click', e => {
    body.classList.toggle('toggled');
    menuDisplay.classList.toggle('open');
    menuList.forEach(item => item.classList.remove('open'));
    backBtn.classList.add('hidden');
})

subMenu.forEach(menuItem => menuItem.addEventListener('click', e => {
    const subMenu = document.querySelector(`.navigation__${e.target.closest('.navigation__item').getAttribute('value')}`);
    subMenu.classList.add('open');
    backBtn.classList.toggle('hidden');
    e.preventDefault();
}));

backBtn.addEventListener('click', e => {
    e.preventDefault();
    backBtn.classList.toggle('hidden');
    menuList.forEach(item => item.classList.remove('open'));
})

mainMenu.addEventListener('click', e => {
    if (!e.target.classList.contains('arr')) return;
    const subMenu = document.querySelector(`.${e.target.closest('li').dataset.id}`);
    subMenu.style.transform = 'translate(0)';
})



const carousel = slide => {
    let currentSlide = 0;
    const totalSlides = carouselSlides.length;


    const shift = shift => {
        carouselSlides.forEach((event, i) => {
            event.style.transform = `translateX(${100 * (i - shift)}%)`;
        })
    }

    next.addEventListener('click', () => {
        if (currentSlide !== totalSlides - 1) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        shift(currentSlide);
    })

    prev.addEventListener('click', () => {
        if (currentSlide !== 0) {
            currentSlide--;
        } else {
            currentSlide = totalSlides - 1;
        }
        shift(currentSlide);
    })

    const init = () => {
        shift(currentSlide);
    }

    init();
}

carousel();