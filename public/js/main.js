
const navBtn = document.getElementById('nav-btn')
const wrapper = document.querySelector('.menu-wrapper')

navBtn.addEventListener('click', () => {
    console.log("open");
    wrapper.classList.toggle('open-wrapper')
    document.body.classList.toggle('fixed-pos')
})


const navLogo = document.querySelector('.nav-logo')

navLogo.addEventListener("click", () => {
    location.replace("https://www.mjboumelhem.com")
    console.log('working');
})


const toggleBtn = document.getElementById('checkbox')
let darkIcon = document.querySelector('.bi-moon-stars')
let lightIcon = document.querySelector('.bi-brightness-high')

toggleBtn.addEventListener('click', () =>{
    if(toggleBtn.checked == true){
        document.body.classList.add('dark-mode')
        darkIcon.style.transform ="translateY(0)"
        darkIcon.style.opacity ="1"
        lightIcon.style.transform ="translateY(-200%)"
        lightIcon.style.opacity ="0"
    } else {
        document.body.classList.remove('dark-mode')
        darkIcon.style.transform ="translateY(-200%)"
        lightIcon.style.transform ="translateY(0)"
        lightIcon.style.opacity ="1"
        darkIcon.style.opacity ="0"
    }
})