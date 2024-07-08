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