var elNext = document.querySelector('.arrow--next')
var elPrev = document.querySelector('.arrow--prev')
var elImg = document.querySelector('.main__img')
var elList = document.querySelector('.image__list')
var elButtons = document.querySelectorAll('.pop-button')
var elPop = document.querySelector('.pop-ups')
var elMain = document.querySelector('.main')
var elsExit = document.querySelectorAll('.pop-exit')
var elFlag = document.querySelectorAll('.flag__button')
var elTelType = document.querySelectorAll('.tel-type')
var elTelUkr = document.querySelectorAll('.button__ukr')
var elTelRus = document.querySelectorAll('.button__rus')
var elForm = document.querySelectorAll('.form__inputs')
var elFlagArrow = document.querySelectorAll('.flag__arrow')
let counter = 0;

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

elTelUkr.forEach(element => {
    element.addEventListener('click', ukrFunction)
})

elTelRus.forEach(element => {
    element.addEventListener('click', rusFunction)
})

function rusFunction() {
    elTelType.forEach(type => {
        type.classList.remove('tel-type--active');
    });
    elForm.forEach(el => {
        el.classList.add('form__rus')
    });
}

function ukrFunction() {
    elForm.forEach(el => {
        el.classList.remove('form__rus')
    });
    elTelType.forEach(type => {
        type.classList.remove('tel-type--active');
    });
}

elNext.addEventListener('click', () => {
    counter++;
    elList.classList.add("image__list"+counter);
    
    if (counter > 3) {
        counter = 0;
        elList.classList.remove("image__list1", "image__list2", "image__list3");
        elList.className = "image__list";
    }
})

elPrev.addEventListener('click', () => {
    elList.classList.remove("image__list"+counter);
    counter--;
})

if (counter < 0) {
    void (0)
}

