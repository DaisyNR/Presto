let navbar = document.querySelector('#navbar');
let logos = document.querySelectorAll('.logo');
let links = document.querySelectorAll('.nav-link');
let icons = document.querySelectorAll('.icon');
let collapse = document.querySelector('.collapse');
let rotateIcon = document.querySelector('.rotate-icon');
let columns = document.querySelectorAll('.col-custom');
let check = false;

window.addEventListener('scroll', () => {
    let scrolled = window.scrollY;

    if (scrolled > 0) {
        navbar.classList.remove('bg-green')
        navbar.classList.add('navCustom')
        collapse.classList.remove('bg-green')
        collapse.classList.add('navCustom')
        logos.forEach((logo) => {
            logo.style.color = 'var(--white)'
            logo.style.transform = 'rotate(180deg)'
        });
        links.forEach((link) => {
            link.classList.add('nav-linkCustom')
        });
    } else {
        navbar.classList.add('bg-green')
        navbar.classList.remove('navCustom')
        collapse.classList.add('bg-green')
        collapse.classList.remove('navCustom')
        logos.forEach((logo) => {
            logo.style.color = 'var(--red)'
            logo.style.transform = ''
        });
        links.forEach((link) => {
            link.classList.remove('nav-linkCustom')
        });
    }
});


icons.forEach((icon) => {
    let check = false;

    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'rotateZ(360deg) scale(2)';
        icon.style.color = 'var(--red)'
        check = true;
    });

    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'rotateZ(-360deg) scale(2)';
        icon.style.color = 'var(--red)'
        check = false;
    });


});


confirm2 = true;

let observer2 = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting && confirm2){     
            
            icons.forEach((icon)=>{
                icon.style.transform = 'rotate(-360deg) scale(2)'
            })
    
            
        };
    });
});

observer2.observe(rotateIcon);


// Chiamate asincrone
let firstNumber = document.querySelector('#firstNumber')
let secondNumber = document.querySelector('#secondNumber')
let thirdNumber = document.querySelector('#thirdNumber')

let confirm = true;

function createInterval(n, element, time) {
    let counter = 0;

    let interval = setInterval(() => {
        if (counter < n) {
            counter++
            element.innerHTML = counter;
        } else {
            clearInterval(interval);
        }
    }, time);

    setTimeout(() => {
        confirm = true;
    }, 8000);
};


let observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting && confirm) {
            createInterval(100, firstNumber, 100);
            createInterval(200, secondNumber, 100);
            createInterval(50, thirdNumber, 100);
            confirm = false;
        }
    });
});

observer.observe(firstNumber);


// Swiper

let swiperWrapper = document.querySelector('.swiper-wrapper');

let reviews = [
    { user: 'Gigi', description: 'Come a casa propria!', rank: 4 },
    { user: 'Gigione', description: 'Clima rilassante e pacifico.', rank: 5 },
    { user: 'Frank', description: 'Troppo soleggiato, mi sono ustionato!', rank: 3 },
    { user: 'Wendy', description: 'Stanza sporca di un liquido rosso sospetto...', rank: 2 },
    { user:'Lorenzo', description:'Se vuoi vacci, potresti anche non andarci.', rank: 3 },
]


reviews.forEach((review) => {
    let div = document.createElement('div');
    div.classList.add('swiper-slide');
    div.innerHTML = `
    <div class="card-review d-flex flex-column justify-content-center">
        <p class="h4 text-center">${review.user}</p>
        <div class="d-flex justify-content-center star">
        </div>
        <p class="lead text-center">${review.description}</p>
      </div>`;
    swiperWrapper.appendChild(div);
});


let stars = document.querySelectorAll('.star');
   
stars.forEach((star, index)=>{
    
    for(let i = 1; i < reviews[index].rank ; i++){
        let stella = document.createElement('i');
        stella.classList.add('bi', 'bi-star-fill');
        star.appendChild(stella);
    }

    let difference = 5 - reviews[index].rank;

    for(let i = 1; i < difference ; i++){
        let stella = document.createElement('i');
        stella.classList.add('bi', 'bi-star');
        star.appendChild(stella);
    }
});

// Swiper

const swiper = new Swiper('.swiper', {
    effect: "cube",
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
});


