'use strict'
//Sticy nav
const sectionGoalsEl = document.querySelector(".main-section");
const obs = new IntersectionObserver( function(entries) {
    const ent = entries[0];
    if(ent.isIntersecting === false){
        document.body.classList.add('sticky')
    }
    if(ent.isIntersecting === true){
      document.body.classList.remove('sticky')
  }
},
{
  root: null,
  threshold: 0,
  rootMargin: '-40px',
});
obs.observe(sectionGoalsEl);
//mobile nav
const btnNavigation = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header')

// btnNavigation.addEventListener('click', function(){
//     header.classList.toggle('nav-open')
// })
//Smooth scrolling animation
//Scroll to other links
const allLinks = document.querySelectorAll('a')
allLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault();
        const href = link.getAttribute('href')

        //Scroll back to top
        if(href === '#')  window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        if(href !== '#'  && href.startsWith('#')){
          const scrollEl = document.querySelectorAll(href)
          scrollEl.scrollIntoVeiw({behavior: 'smooth'})

        }
        // if(link.classList.contains('.main-nav-link')){
        //     header.classList.toggle('nav-open')
        // }
    })
})