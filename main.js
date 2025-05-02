let navbar = document.querySelector('#navbar');
let logos = document.querySelectorAll('.logo');
let links = document.querySelectorAll('.nav-link');
let icons = document.querySelectorAll('.icon');
let check = false;

window.addEventListener('scroll', ()=>{
    let scrolled = window.scrollY;

    if(scrolled > 0){
        navbar.classList.remove('bg-green')
        navbar.classList.add('navCustom')
        logos.forEach((logo)=>{
            logo.style.color = 'var(--white)'
            logo.style.transform = 'rotate(180deg)'
        });
        links.forEach((link)=>{
            link.classList.add('nav-linkCustom')
        });
    }else{
        navbar.classList.add('bg-green')
        navbar.classList.remove('navCustom')
        logos.forEach((logo)=>{
            logo.style.color = 'var(--red)'
            logo.style.transform = ''
        });
        links.forEach((link)=>{
            link.classList.remove('nav-linkCustom')
        });
    }

});


icons.forEach((icon)=>{

    if(check == false){
        icon.addEventListener('click', ()=>{
            icon.style.transform = 'rotate(-360deg)';
            icon.style.color = 'var(--white)'
            check = true;
        });
    }else{
        check = false;
    }


});




