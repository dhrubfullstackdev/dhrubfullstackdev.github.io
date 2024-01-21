/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu=document.getElementById('nav-menu'),
navToggle=document.getElementById('nav-toggle'),
navClose=document.getElementById('nav-close')
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink=document.querySelector('.nav_link')

function linkAction(){
    const navMenu=document.getElementById('nav-menu')
    // When we click on each nav_link,we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach((n)=>{n.addEventListener('click',linkAction)});    

/*==================== ACCORDION SKILLS ====================*/
function toggleSkills(index){
const content = document.getElementsByClassName('skills__content')[index-1].className;
const skillsContent=document.getElementsByClassName('skills__content')

   for(i=0;i<skillsContent.length;i++){
       skillsContent[i].className='skills__content skills__close'
   }
   if(content==='skills__content skills__close'){
    document.getElementsByClassName('skills__content')[index-1].className='skills__content skills__open'
   }
}

    
/*==================== QUALIFICATION TABS ====================*/
function showqualification(index){
    var content;
    const tabs=document.querySelectorAll('[data-target]'),
    tabContents=document.querySelectorAll('[data-content]')
    tabs.forEach(tab=>{
       tab.addEventListener('click',()=>{
           const target=document.querySelector(tab.dataset.target)

           tabContents.forEach(tabContent=>{
            
               if(tabContent.id==target.id){
                target.style.display='block'
               }
               else{
                content=tabContent.id;
                var element = document.getElementById(content);
                element.style.display='none'

               }
           })
           tabs.forEach(tab=>{
               tab.classList.remove('qualification__active')
           })
           tab.classList.add('qualification__active')
       })
     })
}


/*==================== SERVICES MODAL ====================*/
function openModal(id) {
    debugger;
    const modal = document.getElementById(`modal${id}`);
    const overlay = document.getElementById('overlay');
    modal.style.display = "block";
    overlay.style.display = "block";
}

function closeModal(id) {
    const modal = document.getElementById(`modal${id}`);
    const overlay = document.getElementById('overlay');
    modal.style.display = "none";
    overlay.style.display = "none";
}

function closeAllModals() {
    const modals = document.querySelectorAll(".services__modal");
    const overlay = document.getElementById('overlay');
    
    modals.forEach((modal) => {
        modal.style.display = "none";
    });

    overlay.style.display = "none";
}
// const modalViews = document.querySelectorAll('.services__modal');
// const   modalBtns = document.querySelectorAll('.services__button');
// const   modalCloses = document.querySelectorAll('.services__modal-close');

// let modal = function(modalClick) {
//     modalViews[modalClick].classList.add('active-modal');
// };

// modalBtns.forEach((modalBtn, i) => {
//     modalBtn.addEventListener('click', () => {
//         modal(i);
//     });
// });

// modalCloses.forEach((modalClose) => {
//     modalClose.addEventListener('click', () => {
//         modalViews.forEach((modalView) => {
//             modalView.classList.remove('active-modal');
//         });
//     });
// });


/*==================== PORTFOLIO SWIPER  ====================*/
// 		let swiper = new Swiper('.mySwiper', {
//     cssMode: true,
//     loop:true,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable:true,
//     }
//   });

/*==================== TESTIMONIAL ====================*/
// let swiper1 = new Swiper('.mySwiper', {
//     cssMode: true,
//     loop:true,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable:true,
//     },
// breakpoints:568:{
//     slidesPreView:2,
// }
//   });


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections=document.querySelectorAll('section[id]')

function scrollActive(){
    debugger;
    const scrollY=window.PageYOffset

    sections.forEach(current=>{
        const sectionHeight=current.offsetHeight
        const sectionTop=current.offsetTop-50;
        sectionId=current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nva__menu a[href*=' + sectionId+']').classList.add('active-link')
        }
        else{
            document.querySelector('.nva__menu a[href*=' + sectionId+']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)
/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    debugger;
    const nav=document.getElementById('header')
    if(this.scrollY>=80) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)
/*==================== SHOW SCROLL UP ====================*/ 
// function scrollUp(){
//     debugger;
//     const scrollUp=document.getElementById('scroll-up');
//     if(this.scrollY>=560) 
//     scrollUp.classList.add('show-scroll');
//     else 
//     scrollUp.classList.remove('show-scrollTop')
// }
// window.addEventListener('scroll',scrollUp)
// function scrollUp() {
//     const scrollUp = document.getElementById('scroll-up');
//     if (this.scrollY >= 560) 
//         scrollUp.classList.add('scrollup');
//     else 
//         scrollUp.classList.remove('scrollup');
// }

// window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton=document.getElementById('theme-button')
const iconTheme='uil-sun'
const darkTheme='dark-theme'

// Previously seleceted topic(if user selected)
const selectedTheme=localStorage.getItem('selected-theme')
const selectedIcon=localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme=()=>document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon=()=>themeButton.classList.contains(iconTheme)? 'uil-moon':'uil-sun'

//We validate if the user previously chose a topic
if(selectedTheme){
    //If the validation is fulfilled, we ask what the isssue was to know if we activated or deactivated the dark theme
    documnet.body.classList[selectedTheme=== 'dark'? 'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon=== 'uil-moon' ? 'add':'remove'](iconTheme)
}

//Activate / deactivate the theme manually with the button
themeButton.addEventListener('click',()=>{
    //Add or remove the dark/icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //We save the theme and the current icon that the user choose
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})
/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr=ScrollReveal({
    origin:'toop',
    distance:'30px',
    duration:'2000',
    reset:true
});

