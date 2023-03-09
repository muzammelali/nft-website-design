// swiper js 
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
  },
  loop: true,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
});


// faq section js

let faqBoxs = document.querySelectorAll('.faq_boxs')

  faqBoxs.forEach( box => {
    box.onclick = () => {
      faqBoxs.forEach( boxs => {
        boxs.classList.remove('active_faw_answer')
      })
     box.classList.add('active_faw_answer')
     
    }
  })