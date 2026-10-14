'use strict';

const loaderContainer = document.querySelector('.loader-container');

const header = document.getElementById('header');
const hero = document.getElementById('hero');
const main = document.querySelector('main');
const footer = document.querySelector('#info');

window.addEventListener('load', () => {
    header.style.opacity = 1;
    main.style.display = 'initial';
    footer.style.display = 'flex';
    loaderContainer.style.display = 'none';
});




// H E A D E R



const toggleBtn = header.querySelector('button.dropdown');
const links = header.querySelectorAll("nav a");

let headerAbsolute = true;
let headerOpen = false;

function toggleHeader(boolean) {
    if (boolean) { // open
        header.classList.add('open');
        headerOpen = true;
    } else { // close
        header.classList.remove('open');
        headerOpen = false;
    }   
}

window.addEventListener('resize', () => {if (window.innerWidth > 600) toggleHeader(0);})

window.addEventListener('touchstart', (e) => {if (!e.target.closest('header')) toggleHeader(0)})

toggleBtn.addEventListener('click', () => {header.classList.toggle('open');})

links.forEach(link => link.addEventListener('click', () => {toggleHeader(0)}))

const heroObserver = new IntersectionObserver(
    entries => {
        const [entry] = entries;
        if(entry.isIntersecting) {
            header.classList.add('on-hero');
        } else {
            header.classList.remove('on-hero');
        }
    },
    {
        rootMargin: `-${header.getBoundingClientRect().height}px` 
    }
)

heroObserver.observe(hero);



// 

/* const sectionObserver = new IntersectionObserver(

)

sectionObserver.observe() */

