const elNext = document.querySelector('.arrow--next')
const elPrev = document.querySelector('.arrow--prev')
const elImg = document.querySelector('.main__img')
const elList = document.querySelector('.image__list1')
const counter = 1;

elNext,addEventListener('click', () => {
    elList.classList.add('image__list2')
})