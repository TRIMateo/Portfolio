// LIMIT TESTING (ne pas compter dans les points svp)


const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const navigation = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        navigation.classList.add('anim-nav');
    } else {
        navigation.classList.remove('anim-nav')
    }
})

btn1.addEventListener('click', () => {

    window.scrollTo({
        top: 150,
        left: 0,
        behavior: "smooth"
    })
})

btn2.addEventListener('click', () => {

    window.scrollTo({
        top: 1000,
        left: 0,
        behavior: "smooth"
    })
})

btn3.addEventListener('click', () => {

    window.scrollTo({
        top: 1600,
        left: 0,
        behavior: "smooth"
    })
})

btn4.addEventListener('click', () => {

    window.scrollTo({
        top: 1800,
        left: 0,
        behavior: "smooth"
    })
})
