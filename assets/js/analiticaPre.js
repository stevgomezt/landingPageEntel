var modalAnaliticaPre = document.getElementById('myModalAnaliticaPre');
var modalDialogAnaliticaPre = document.querySelector('.modal-dialog');
var galleryImgAnaliticaPre = document.getElementById('galleryImgAnaliticaPre');
var imageContainerAnaliticaPre = document.getElementById('imageContainerAnaliticaPre');
var imagesAnaliticaPre = [
  "/assets/img/slides/32-0.jpg",
  "/assets/img/slides/32.png",
  "/assets/img/slides/32-1.jpg",
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

document.getElementById("prevBtnAnaliticaPre").onclick = function () {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : imagesAnaliticaPre.length - 1;
  galleryImgAnaliticaPre.src = imagesAnaliticaPre[currentIndex];
  adjustModalSizeAnaliticaPre();
}

document.getElementById("nextBtnAnaliticaPre").onclick = function () {
  currentIndex = (currentIndex < imagesAnaliticaPre.length - 1) ? currentIndex + 1 : 0;
  galleryImgAnaliticaPre.src = imagesAnaliticaPre[currentIndex];
  adjustModalSizeAnaliticaPre();
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalAnaliticaPre').on('shown.bs.modal', function () {
  adjustModalSizeAnaliticaPre();
});