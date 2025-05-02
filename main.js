let navbar = document.querySelector('#navbar');
let icons = document.querySelectorAll('.icon');
let links = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', ()=>{
    let scrolled = window.scrollY;

    if(scrolled > 0){
        navbar.classList.remove('bg-green')
        navbar.classList.add('navCustom')
        icons.forEach((icon)=>{
            icon.style.color = 'var(--white)'
            icon.classList.add('icon-custom')
        });
        links.forEach((link)=>{
            link.classList.add('nav-link-custom')
        });
    }else{
        navbar.classList.add('bg-green')
        navbar.classList.remove('navCustom')
        icons.forEach((icon)=>{
            icon.style.color = 'var(--red)'
            icon.classList.remove('icon-custom')
        });
        links.forEach((link)=>{
            link.classList.remove('nav-link-custom')
        });
    }

});

