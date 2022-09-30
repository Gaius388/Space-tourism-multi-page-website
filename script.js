'use strict'

const crewAll = document.querySelectorAll('.crew__tab');
const destinationAll = document.querySelectorAll('.destination__tab');
const technologyAll = document.querySelectorAll('.technology__tab');
const [...dotsContainer] = document.querySelectorAll('.dots__container');
const [...destContainer] = document.querySelectorAll('.destination__links');
const [...techContainer] = document.querySelectorAll('.technology__text--1');
const hamburger = document.querySelector('.hamburger');
const homeLinks = document.querySelector('.home__links');
const iconClose = document.querySelector('.icon__close');


const addDots = function() {
    crewAll.forEach(mov => {
        const dots = mov.classList[1];
        dotsContainer.forEach(mov => mov.insertAdjacentHTML('beforeend', `<div class="dots dots__${dots}" data-slide="${dots}"></div>`));
    })
}
addDots();

const addDestLinks = function() {
    destinationAll.forEach(mov => {
        const destination = mov.classList[1];
        destContainer.forEach(mov => mov.insertAdjacentHTML('beforeend', `<li><a href="#" class="tabs tabs__${destination}" data-slide="${destination}">${destination.toUpperCase()}</a></li>`))       
    })
}
addDestLinks();

const addTechLinks = function() {
    technologyAll.forEach((mov, i) => {
        const technology = mov.classList[1];
        
        techContainer.forEach(mov => mov.insertAdjacentHTML('beforeend', `<p class="tech tech__${technology}" data-slide="${technology}">${i + 1}</p>`));
    })
}
addTechLinks();


// Active Links 
document.querySelector(`.dots__douglas`)?.classList.add('dots__active');
const activeDot = function(change) {
    document.querySelectorAll('.dots').forEach(dot => {
        dot.classList.remove('dots__active');
        if(dot.classList.contains(`dots__${change}`)) {
            dot.classList.add('dots__active');
        }});
    }

document.querySelector(`.tabs__moon`)?.classList.add('active');
const activeDestLinks = function(change) {
    document.querySelectorAll('.tabs').forEach(mov => {
        mov.classList.remove('active');
        if(mov.classList.contains(`tabs__${change}`)) {
            mov.classList.add('active');
     }});
}
document.querySelector(`.tech__launch`)?.classList.add('technology__active');
const activeTechLinks = function(change) {
    document.querySelectorAll('.tech').forEach(mov => {
        mov.classList.remove('technology__active');
        if(mov.classList.contains(`tech__${change}`)) {
            mov.classList.add('technology__active');
    }});

}

// Change View
const viewForAll = function(change,element) {
    element.forEach(view => view.classList.add('hidden'));

    document.querySelector(`.${change}`).classList.remove('hidden'); 
}

// Event Listeners
dotsContainer.forEach(mov => mov.addEventListener('click',(e) =>{
    if (e.target.classList.contains('dots')) {
        const uniqueNames = e.target.dataset.slide;
        viewForAll(uniqueNames, crewAll);
        activeDot(uniqueNames);
    }
}));


destContainer.forEach(mov => mov.addEventListener('click', (e) => {
    if(e.target.classList.contains('tabs')) {
        const uniqueDest = e.target.dataset.slide;
        viewForAll(uniqueDest, destinationAll);
        activeDestLinks(uniqueDest);
    }
}))

techContainer.forEach(mov => mov.addEventListener('click', (e) => {
    if(e.target.classList.contains('tech')) {
        const uniqueTech = e.target.dataset.slide;
        viewForAll(uniqueTech, technologyAll);
        activeTechLinks(uniqueTech);
    }
}));

hamburger.addEventListener('click', () => {
    homeLinks.style.display = 'flex';
    iconClose.classList.remove('hidden');
    iconClose.classList.add('close');
});

iconClose.addEventListener('click', ()=> {
    homeLinks.style.display = 'none';
    iconClose.classList.add('hidden');
})
