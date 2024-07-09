// PerfilC Modal
var modalPerfilC = document.getElementById('myModalPerfilC');
var modalDialogPerfilC = modalPerfilC.querySelector('.modal-dialog');
var galleryImgPerfilC = document.getElementById('galleryImgPerfilC');
var imageContainerPerfilC = document.getElementById('imageContainerPerfilC');
var imagesPerfilC = [
  "/assets/img/slides/perfil.jpg",
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
