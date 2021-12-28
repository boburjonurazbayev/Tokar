const elNext = document.querySelector('.arrow--next')
const elPrev = document.querySelector('.arrow--prev')
const elImg = document.querySelector('.main__img')
const elList = document.querySelector('.image__list1')
const elButtons = document.querySelectorAll('.pop-button')
const elPop = document.querySelector('.pop-ups')
const elMain = document.querySelector('.main')
const elsExit = document.querySelectorAll('.pop-exit')
const elFlag = document.querySelectorAll('.flag__button')
const elTelType = document.querySelectorAll('.tel-type')
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

elButtons.forEach(element => {
    element.addEventListener('click', () => {
        elMain.style.background = "rgba(43, 42, 40, 0.6)";
        elMain.style.filter = "brightness(0.45)";
        elPop.classList.add('pop-ups--active')
    })
})

elsExit.forEach(element => {
    element.addEventListener('click', () => {
        elMain.style.background = "none";
        elMain.style.filter = "none";
        elPop.classList.remove('pop-ups--active')
    })
})

elFlag.forEach(element => {
    element.addEventListener('click', () => {
        elTelType.forEach(el => {
            el.classList.toggle('tel-type--active')
        })
    })
})