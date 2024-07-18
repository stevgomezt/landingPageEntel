var modalSmartC = document.getElementById('myModalSmartC');
var modalDialogSmartC = document.querySelector('.modal-dialog');
var galleryImgSmartC = document.getElementById('galleryImgSmartC');
var imageContainerSmartC = document.getElementById('imageContainerSmartC');
var imagesSmartC = [
  // "/assets/img/slides/28.png",
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
  SmartC.style.maxWidth = maxWidth + 'px';
  modalDialog.style.maxHeight = maxHeight + 'px';
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