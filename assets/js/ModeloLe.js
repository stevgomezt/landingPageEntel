// ModeloLe Modal
var modalModeloLe = document.getElementById('myModalModeloLe');
var modalDialogModeloLe = modalModeloLe.querySelector('.modal-dialog');
var galleryImgModeloLe = document.getElementById('galleryImgModeloLe');
var imageContainerModeloLe = document.getElementById('imageContainerModeloLe');
var imagesModeloLe = [
  // "/assets/img/slides/29.png",
  // "/assets/img/slides/30.png",
  // "/assets/img/slides/31.png"
  "/assets/img/slides/ma-1.jpg",
  "/assets/img/slides/ma-2.jpg",
  "/assets/img/slides/ma-3.jpg",
  "/assets/img/slides/ma-4.jpg",
];
var currentIndexModeloLe = 0;

document.getElementById("openModalBtnModeloLe").onclick = function () {
  $('#myModalModeloLe').modal('show');
}

function adjustModalSizeModeloLe() {
  var imgWidth = galleryImgModeloLe.naturalWidth;
  var imgHeight = galleryImgModeloLe.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerModeloLe.style.maxWidth = maxWidth + 'px';
  imageContainerModeloLe.style.maxHeight = maxHeight + 'px';
  modalDialogModeloLe.style.maxWidth = maxWidth + 'px';
  modalDialogModeloLe.style.maxHeight = maxHeight + 'px';
}

document.getElementById("prevBtnModeloLe").onclick = function () {
  currentIndexModeloLe = (currentIndexModeloLe > 0) ? currentIndexModeloLe - 1 : imagesModeloLe.length - 1;
  galleryImgModeloLe.src = imagesModeloLe[currentIndexModeloLe];
  adjustModalSizeModeloLe();
}

document.getElementById("nextBtnModeloLe").onclick = function () {
  currentIndexModeloLe = (currentIndexModeloLe < imagesModeloLe.length - 1) ? currentIndexModeloLe + 1 : 0;
  galleryImgModeloLe.src = imagesModeloLe[currentIndexModeloLe];
  adjustModalSizeModeloLe();
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalModeloLe').on('shown.bs.modal', function () {
  adjustModalSizeModeloLe();
});
