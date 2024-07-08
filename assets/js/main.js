
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function () {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()

var modalAnalisisNo = document.getElementById('myModalAnalisisNo');
var modalDialogAnalisisNo = document.querySelector('.modal-dialog');
var galleryImgAnalisisNo = document.getElementById('galleryImgAnalisisNo');
var imageContainerAnalisisNo = document.getElementById('imageContainerAnalisisNo');
var imagesAnalisisNo = [
  "/assets/img/slides/28.png"
];
var currentIndexAnalisisNo = 0;

document.getElementById("openModalBtnAnalisisNo").onclick = function () {
  $('#myModalAnalisisNo').modal('show');
}

function adjustModalSizeAnalisisNo() {
  var imgWidth = galleryImgAnalisisNo.naturalWidth;
  var imgHeight = galleryImgAnalisisNo.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerAnalisisNo.style.maxWidth = maxWidth + 'px';
  imageContainerAnalisisNo.style.maxHeight = maxHeight + 'px';
  AnalisisNo.style.maxWidth = maxWidth + 'px';
  modalDialog.style.maxHeight = maxHeight + 'px';
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalAnalisisNo').on('shown.bs.modal', function () {
  adjustModalSizeAnalisisNo();
});

var modalAnaliticaPre = document.getElementById('myModalAnaliticaPre');
var modalDialogAnaliticaPre = document.querySelector('.modal-dialog');
var galleryImgAnaliticaPre = document.getElementById('galleryImgAnaliticaPre');
var imageContainerAnaliticaPre = document.getElementById('imageContainerAnaliticaPre');
var imagesAnaliticaPre = [
  "/assets/img/slides/32.png"
];
var currentIndex = 0;

document.getElementById("openModalBtnAnaliticaPre").onclick = function () {
  $('#myModalAnaliticaPre').modal('show');
}

function adjustModalSizeAnaliticaPre() {
  var imgWidth = galleryImgAnaliticaPre.naturalWidth;
  var imgHeight = galleryImgAnaliticaPre.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerAnaliticaPre.style.maxWidth = maxWidth + 'px';
  imageContainerAnaliticaPre.style.maxHeight = maxHeight + 'px';
  AnaliticaPre.style.maxWidth = maxWidth + 'px';
  modalDialog.style.maxHeight = maxHeight + 'px';
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalAnaliticaPre').on('shown.bs.modal', function () {
  adjustModalSizeAnaliticaPre();
});

var modal = document.getElementById('myModalBI');
var modalDialog = document.querySelector('.modal-dialog');
var galleryImgBI = document.getElementById('galleryImgBI');
var imageContainerBI = document.getElementById('imageContainerBI');
var imagesBI = [
  "/assets/img/slides/1.png",
  "/assets/img/slides/2.png",
  "/assets/img/slides/3.png",
  "/assets/img/slides/4.png"
];
var currentIndex = 0;

document.getElementById("openModalBtnBI").onclick = function () {
  $('#myModalBI').modal('show');
}

function adjustModalSize() {
  var imgWidth = galleryImgBI.naturalWidth;
  var imgHeight = galleryImgBI.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerBI.style.maxWidth = maxWidth + 'px';
  imageContainerBI.style.maxHeight = maxHeight + 'px';
  modalDialog.style.maxWidth = maxWidth + 'px';
  modalDialog.style.maxHeight = maxHeight + 'px';
}

document.getElementById("prevBtnBI").onclick = function () {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : imagesBI.length - 1;
  galleryImgBI.src = imagesBI[currentIndex];
  adjustModalSize();
}

document.getElementById("nextBtnBI").onclick = function () {
  currentIndex = (currentIndex < imagesBI.length - 1) ? currentIndex + 1 : 0;
  galleryImgBI.src = imagesBI[currentIndex];
  adjustModalSize();
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalBI').on('shown.bs.modal', function () {
  adjustModalSize();
});

// IA Modal
var modalIA = document.getElementById('myModalIA');
var modalDialogIA = modalIA.querySelector('.modal-dialog');
var galleryImgIA = document.getElementById('galleryImgIA');
var imageContainerIA = document.getElementById('imageContainerIA');
var imagesIA = [
  "/assets/img/slides/33.png",
  "/assets/img/slides/34.png",
  "/assets/img/slides/35.png"
];
var currentIndexIA = 0;

document.getElementById("openModalBtnIA").onclick = function () {
  $('#myModalIA').modal('show');
}

function adjustModalSizeIA() {
  var imgWidth = galleryImgIA.naturalWidth;
  var imgHeight = galleryImgIA.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerIA.style.maxWidth = maxWidth + 'px';
  imageContainerIA.style.maxHeight = maxHeight + 'px';
  modalDialogIA.style.maxWidth = maxWidth + 'px';
  modalDialogIA.style.maxHeight = maxHeight + 'px';
}

document.getElementById("prevBtnIA").onclick = function () {
  currentIndexIA = (currentIndexIA > 0) ? currentIndexIA - 1 : imagesIA.length - 1;
  galleryImgIA.src = imagesIA[currentIndexIA];
  adjustModalSizeIA();
}

document.getElementById("nextBtnIA").onclick = function () {
  currentIndexIA = (currentIndexIA < imagesIA.length - 1) ? currentIndexIA + 1 : 0;
  galleryImgIA.src = imagesIA[currentIndexIA];
  adjustModalSizeIA();
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalIA').on('shown.bs.modal', function () {
  adjustModalSizeIA();
});


var modalMAC = document.getElementById('myModalMAC');
var videoMAC = document.getElementById('videoMAC');

document.getElementById("openModalBtnMAC").onclick = function () {
  $('#myModalMAC').modal('show');
  videoMAC.play(); // Iniciar la reproducción del video al abrir el modal
}

$('#myModalMAC').on('hidden.bs.modal', function () {
  videoMAC.pause();
  videoMAC.currentTime = 0;
});

var modalPAC = document.getElementById('myModalPAC');
var videoPAC = document.getElementById('videoPAC');

document.getElementById("openModalBtnPAC").onclick = function () {
  $('#myModalPAC').modal('show');
  videoPAC.play(); // Iniciar la reproducción del video al abrir el modal
}

$('#myModalPAC').on('hidden.bs.modal', function () {
  videoPAC.pause();
  videoPAC.currentTime = 0;
});

// PerfilC Modal
var modalPerfilC = document.getElementById('myModalPerfilC');
var modalDialogPerfilC = modalPerfilC.querySelector('.modal-dialog');
var galleryImgPerfilC = document.getElementById('galleryImgPerfilC');
var imageContainerPerfilC = document.getElementById('imageContainerPerfilC');
var imagesPerfilC = [
  "/assets/img/slides/20.png",
  "/assets/img/slides/21.png",
  "/assets/img/slides/22.png"
];
var currentIndexPerfilC = 0;

document.getElementById("openModalBtnPerfilC").onclick = function () {
  $('#myModalPerfilC').modal('show');
}

function adjustModalSizePerfilC() {
  var imgWidth = galleryImgPerfilC.naturalWidth;
  var imgHeight = galleryImgPerfilC.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerPerfilC.style.maxWidth = maxWidth + 'px';
  imageContainerPerfilC.style.maxHeight = maxHeight + 'px';
  modalDialogPerfilC.style.maxWidth = maxWidth + 'px';
  modalDialogPerfilC.style.maxHeight = maxHeight + 'px';
}

document.getElementById("prevBtnPerfilC").onclick = function () {
  currentIndexPerfilC = (currentIndexPerfilC > 0) ? currentIndexPerfilC - 1 : imagesPerfilC.length - 1;
  galleryImgPerfilC.src = imagesPerfilC[currentIndexPerfilC];
  adjustModalSizePerfilC();
}

document.getElementById("nextBtnPerfilC").onclick = function () {
  currentIndexPerfilC = (currentIndexPerfilC < imagesPerfilC.length - 1) ? currentIndexPerfilC + 1 : 0;
  galleryImgPerfilC.src = imagesPerfilC[currentIndexPerfilC];
  adjustModalSizePerfilC();
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalPerfilC').on('shown.bs.modal', function () {
  adjustModalSizePerfilC();
});

// SmartC Modal
var modalSmartC = document.getElementById('myModalSmartC');
var modalDialogSmartC = modalSmartC.querySelector('.modal-dialog');
var galleryImgSmartC = document.getElementById('galleryImgSmartC');
var imageContainerSmartC = document.getElementById('imageContainerSmartC');
var imagesSmartC = [
  "/assets/img/slides/29.png",
  "/assets/img/slides/30.png",
  "/assets/img/slides/31.png"
];
var currentIndexSmartC = 0;

document.getElementById("openModalBtnSmartC").onclick = function () {
  $('#myModalSmartC').modal('show');
}

function adjustModalSizeSmartC() {
  var imgWidth = galleryImgSmartC.naturalWidth;
  var imgHeight = galleryImgSmartC.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerSmartC.style.maxWidth = maxWidth + 'px';
  imageContainerSmartC.style.maxHeight = maxHeight + 'px';
  modalDialogSmartC.style.maxWidth = maxWidth + 'px';
  modalDialogSmartC.style.maxHeight = maxHeight + 'px';
}

document.getElementById("prevBtnSmartC").onclick = function () {
  currentIndexSmartC = (currentIndexSmartC > 0) ? currentIndexSmartC - 1 : imagesSmartC.length - 1;
  galleryImgSmartC.src = imagesSmartC[currentIndexSmartC];
  adjustModalSizeSmartC();
}

document.getElementById("nextBtnSmartC").onclick = function () {
  currentIndexSmartC = (currentIndexSmartC < imagesSmartC.length - 1) ? currentIndexSmartC + 1 : 0;
  galleryImgSmartC.src = imagesSmartC[currentIndexSmartC];
  adjustModalSizeSmartC();
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalSmartC').on('shown.bs.modal', function () {
  adjustModalSizeSmartC();
});
