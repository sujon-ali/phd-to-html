// Smooth Scroll
const scroll = new SmoothScroll('nav a[href*="#"]', {
    speed:1000
});

// Mobile Menu Open Close 
const hamIcon = document.querySelector('.mobile-menu-container i');
const mobNav = document.querySelector('.mobile-nav');
let hamCliked = false;

hamIcon.addEventListener('click', function(){
    if(hamCliked == false){
        mobNav.classList.remove('close-nav');
        mobNav.classList.add('open-nav');
        mobNav.style.height = '234px';
        hamIcon.style.color = 'rgb(255,140,0)';
        hamCliked = true;     
    } else {
        mobNav.classList.remove('open-nav');
        mobNav.classList.add('close-nav');
        mobNav.style.height = '234px';
        hamIcon.style.color = 'rgb(0,0,0)';
        hamCliked = false;   
    }
});

// Mobile Menu Link Backgournd
const mobNavLink = document.querySelectorAll('.mobile-nav a');
let i;
for (i = 0; i < mobNavLink.length; i++){
    mobNavLink[i].addEventListener('click', mobileNavBack);
}

function mobileNavBack(e){
    for(i = 0; i < mobNavLink.length; i++){
        mobNavLink[i].classList.remove('current-link');
    }
    e.target.classList.add('current-link');
}

// Desktop Menu Link Backgournd
const deskNavLink = document.querySelectorAll('.desktop-nav a');
let j;
for (j = 0; j < deskNavLink.length; j++){
    deskNavLink[j].addEventListener('click', deskNavBack);
}

function deskNavBack(e){
    for(j = 0; j < deskNavLink.length; j++){
        deskNavLink[j].classList.remove('current-link');
    }
    e.target.classList.add('current-link');
}