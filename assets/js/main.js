console.log(1);

const btnShowMore = document.querySelector('.btn--blog');
const btnHideAll = document.querySelector('.btn--hide');
const blogItem = document.querySelectorAll('.blog__item').length;
let sawItem = 1;


btnShowMore.addEventListener('click', ()=> {
    sawItem += 2;
    const array = Array.from(document.querySelector('.blog__box').children);
    var visItems = array.slice(0, sawItem);


    visItems.forEach( el => el.classList.add('is-visible'));

    if(visItems.length === blogItem) {
        btnShowMore.style.display = 'none';
        btnHideAll.style.display = 'block';
    }
});

btnHideAll.addEventListener('click', ()=>{
    let blogVisible = document.querySelectorAll('.is-visible');

    sawItem = 1;
    blogVisible.forEach( el => el.classList.remove('is-visible'));
    btnShowMore.style.display = 'block';
    btnHideAll.style.display = 'none';
});

//burger

const burger = document.getElementById('burger');
const navBar = document.querySelector('.navbar');

burger.addEventListener('click', (event)=> {
    $this = event.currentTarget;

    $this.classList.toggle('active');
    navBar.classList.toggle('active');
});

// scroll header

const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', ()=> {
    let scrollTop = window.scrollY;

    if(scrollTop > headerHeight) {
        header.style.backgroundColor = 'rgba(41, 44, 52, 0.9)';
        header.style.borderBottom = 'none';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.borderBottom = '1px solid rgba(103, 100, 100, 0.5)';
    }


});

//smooth scroll

const scrollLink = document.querySelectorAll('[data-scroll]');
let headerHeiht = header.offsetHeight;

scrollLink.forEach((item)=>{
    item.addEventListener('click', event => {
    event.preventDefault();
    let $this = event.currentTarget;

    let scrollTo = $this.getAttribute('data-scroll');
    let elementScroll = document.getElementById(scrollTo);
    let elementPosition = elementScroll.offsetTop;

        window.scroll({
            top:elementPosition - headerHeiht,
            behavior: 'smooth'
        });

        toggleClass ();

    });
})

function toggleClass () {
    burger.classList.remove('active');
    navBar.classList.remove('active');
};




//Spoiler

const spoilerBtn = document.querySelectorAll('[data-spoiler]');


spoilerBtn.forEach((item)=> {
    item.addEventListener('click', event =>{
        let $this = event.currentTarget;
        let spoilerBtnId = $this.getAttribute('data-spoiler');
        let spoilerList = document.getElementById(spoilerBtnId);

        $this.classList.toggle('open');
        spoilerList.classList.toggle('open');

    })
});


//pop-up
let openPop = document.querySelectorAll('[data-pop]');

openPop.forEach((item)=> {
    item.addEventListener('click', event=> {
        event.preventDefault();
        $this = event.currentTarget;
        let popPage = $this.getAttribute('data-pop');
        let popPageId = document.getElementById(popPage);
        let body = document.querySelector('body');



        popPageId.classList.add('see');
        body.classList.add('no-scroll');



    })

});

//CLOSE POPUP
let closePop = document.querySelectorAll('.sign__close');

closePop.forEach((item)=> {
    item.addEventListener('click', event => {
        $this = event.currentTarget;
        let activePage = $this.closest('.sign.see');
        let body = document.querySelector('body');

        activePage.classList.remove('see');
        body.classList.remove('no-scroll');

    });
})

//

let reLink = document.querySelectorAll('[data-relink]');


reLink.forEach((item)=> {

    item.addEventListener('click', event =>{
        event.preventDefault;
        $this = event.currentTarget;
        let popPage = $this.getAttribute('data-relink');
        let popPageId = document.getElementById(popPage);
        let activeSing =  $this.closest('.sign.see');

        activeSing.classList.remove('see');
        popPageId.classList.add('see');

    })
})


/*let seePage = document.querySelectorAll('.sign');

seePage.forEach((item)=> {
    item.addEventListener('click', event=> {
        console.log(event);
        let signBlock = document.querySelector('sign__block');
        signBlock.stopPropagation(event);

    })
})
*/



//checkbox

let checkbox = document.querySelectorAll('.sign__chekbox');

checkbox.forEach((item)=>{
    item.addEventListener('click', event =>{
        $this = event.currentTarget;
        let labelCheck = $this.closest('.sign__check-form');
        let boxCheck = labelCheck.childNodes[1];

        boxCheck.classList.toggle('on-off');

    });
})


//swiper plan


let mySwiper = new Swiper('.testimonials__box', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 50,
    autoplay: {
        delay:3000,
        disableOnInteraction:false
    },
    speed:1200,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

//plan swiper

new Swiper('.plans__box', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 5,
    autoplay: {
        delay:3000,
        disableOnInteraction:false
    },
    speed:1200,

    breakpoints: {


        768: {
          slidesPerView: 3,
          spaceBetween: 5
        },
        // when window width is >= 640px
        480: {
            slidesPerView: 2,
            spaceBetween: 5
          },

          320: {
            slidesPerView: 1,
            spaceBetween: 5
          },
    },


    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
