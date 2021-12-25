const elNext = document.querySelector('.arrow--next')
const elPrev = document.querySelector('.arrow--prev')
const elImg = document.querySelector('.main__img')
const elList = document.querySelector('.image__list1')
const elButton = document.querySelector('.price__button')
const elPop = document.querySelector('.pop-ups')
const elMain = document.querySelector('.main')
const counter = 1;

elNext.addEventListener('click', () => {
    counter + 1
    elList.classList.add(`image__list${counter}`)
    console.log('+image')
})

elPrev.addEventListener('click', () => {
    counter - 1;
    elList.classList.add(`image__list${counter}`)
    console.log('-image')
})

elButton.addEventListener('click', () => {
    elMain.style.background = "rgba(43, 42, 40, 0.6)";
    elMain.style.opacity = "0.6";
    elMain.style.filter = "brightness(0.45)";
    elPop.classList.add('pop-ups--active')
})