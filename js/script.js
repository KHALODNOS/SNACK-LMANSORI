//SEARCH SECTION
let searchForm = document.querySelector('.search-form')
let searchBtn = document.getElementById("search-btn")

searchBtn.onclick = ()  => {
    searchBtn.classList.toggle('fa-times');
    searchForm.classList.toggle("active");
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove("active");

}


//MENU/RESPONSIVE
let navbar = document.querySelector(' .header .navbar')
let menuBtn = document.querySelector('#menu-btn')

menuBtn.onclick = ()  => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
    searchBtn.classList.remove('fa-times');
}

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchForm.classList.remove("active");
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove("active");

    if (Window.scrollY > 0) {
        document.querySelector(".header").classList.add('active')
    }else {
        document.querySelector('.header').classList.remove('active')
    }
}

window.onload = () => {
    if(window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
        }else {
            document.querySelector('.header').classList.remove('active')
        }
    }
