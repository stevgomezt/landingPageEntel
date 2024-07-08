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
