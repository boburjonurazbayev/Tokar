// required variables

var elNext = document.querySelector('.arrow--next')
var elPrev = document.querySelector('.arrow--prev')
var elImg = document.querySelector('.main__img')
var elList = document.querySelector('.image__list')
var elButtons = document.querySelectorAll('.pop-button')
var elPop = document.querySelector('.pop-ups')
var elMain = document.querySelector('.main')
var body = document.querySelector('.page')
var elsExit = document.querySelectorAll('.pop-exit')
var elFlag = document.querySelectorAll('.flag__button')
const elTelType = document.querySelectorAll('.tel-type')
var elTelUkr = document.querySelectorAll('.button__ukr')
var elTelRus = document.querySelectorAll('.button__rus')
var elForm = document.querySelectorAll('.form__inputs')
var elFlagArrow = document.querySelectorAll('.flag__arrow')
const galButtons = document.querySelectorAll('.gallery__button')
const itemOpener = document.querySelectorAll('.full__opener')
const elPrItem = document.querySelectorAll('.process__item')
var flagCounter = []
var screenRes = window.matchMedia("(max-width: 590px)")
var navButton = document.querySelectorAll('.nav__link')
var navOpener = document.querySelectorAll('.nav__item')
var headerNavs = document.querySelector('.header').querySelector('.nav').querySelectorAll('.nav__item')
var footerNavs = document.querySelector('.footer').querySelector('.nav').querySelectorAll('.nav__item')
var menuButton = document.querySelector('.header__hamburger')
let count = 0;
let counter = 0;

//card gallery

elNext.addEventListener('click', () => {
    counter++;
    elList.classList.add(`image__list${counter}`);

    if (counter > 3) {
        counter = 0;
        elList.classList.remove("image__list1", "image__list2", "image__list3");
        elList.className = "image__list";
    }
})

elPrev.addEventListener('click', () => {
    elList.classList.remove(`image__list${counter}`);
    counter--;

    if (counter < 0) {
        counter = 3;
        elList.classList.add("image__list1", "image__list2", "image__list3");
    }
})

if (counter < 0) {
    void (0)
}

//pop-up

elButtons.forEach(element => {
    element.addEventListener('click', () => {
        body.style.background = "rgba(43, 42, 40, 0.6)";
        body.style.filter = "brightness(0.45)";
        elPop.classList.add('pop-ups--active')
    })
})

elsExit.forEach(element => {
    element.addEventListener('click', () => {
        body.style.background = "none";
        body.style.filter = "none";
        elPop.classList.remove('pop-ups--active')
    })
})

//tel numbers

for (let i = 0; i < elTelUkr.length; i++) {
    elTelUkr[i].addEventListener('click', () => {
        elTelUkr.forEach(element => {
            elTelType.forEach(el => {
                el.classList.remove('tel-type--active')
            })

            elForm.forEach(el => {
                el.classList.remove('form__rus')
            })
        })
    })
}

for (let i = 0; i < elTelRus.length; i++) {
    elTelRus[i].addEventListener('click', () => {
        elTelRus.forEach(element => {
            elTelType.forEach(el => {
                el.classList.remove('tel-type--active')
            })

            elForm.forEach(el => {
                el.classList.add('form__rus')
            })
        })
    })
}

//tel type window

for (let i = 1; i < elTelType.length+1; i++) {
    var specialCounter = i * 2;
    flagCounter[i-1] = [elFlag[specialCounter-2], elFlag[specialCounter-1]]
    flagCounter[i-1].forEach(element => {
        element.addEventListener("click", () => {
            elTelType.forEach(el => {
                el.classList.remove("tel-type--active")
            })

            elTelType[i-1].classList.toggle("tel-type--active")
            console.log("clicked")
        })
    });
}

//process windows

for (let i = 0; i < elPrItem.length; i++) {
    itemOpener[i].addEventListener('click', () => {
        elPrItem[i].classList.toggle("process__item--active")
    })
}

//header and footer navigation settings

if (screenRes.matches) {
    navButton[0].removeAttribute("onclick")
    navButton[1].removeAttribute("onclick")
    navButton[2].removeAttribute("onclick")
    navButton[7].removeAttribute("onclick")
    navButton[8].removeAttribute("onclick")
    navButton[9].removeAttribute("onclick")

    for (let i = 0; i < footerNavs.length; i++) {
        footerNavs[i].addEventListener("click", () => {
            document.querySelector('.footer').querySelectorAll('.nav__item__content')[i].classList.toggle("nav__item__content--active")
        })
    
        footerNavs[3,4].addEventListener("click", () => {
            null
        })
    }

    for (let i = 0; i < headerNavs.length; i++) {
        headerNavs[i].addEventListener("click", () => {
            document.querySelector('.header').querySelectorAll('.nav__item__content')[i].classList.toggle("nav__item__content--active")
        })
    
        headerNavs[3,4].addEventListener("click", () => {
            null
        })
    }

} else {
    null
}

menuButton.addEventListener("click", () => {
    document.querySelector('.header').classList.add("header--active")
})

document.querySelector('.header__closer').addEventListener("click", () => {
    document.querySelector('.header').classList.remove("header--active")
})