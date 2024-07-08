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

// document.getElementById("prevBtnAnalisisNo").onclick = function () {
//   currentIndexAnalisisNo = (currentIndexAnalisisNo > 0) ? currentIndexAnalisisNo - 1 : imagesAnalisisNo.length - 1;
//   galleryImgAnalisisNo.src = imagesAnalisisNo[currentIndexAnalisisNo];
//   adjustModalSizeAnalisisNo();
// }

// document.getElementById("nextBtnAnalisisNo").onclick = function () {
//   currentIndexAnalisisNo = (currentIndexAnalisisNo < imagesAnalisisNo.length - 1) ? currentIndexAnalisisNo + 1 : 0;
//   galleryImgAnalisisNo.src = imagesAnalisisNo[currentIndexAnalisisNo];
//   adjustModalSizeAnalisisNo();
// }

// Ajustar el tamaño del modal cuando se muestra
$('#myModalAnalisisNo').on('shown.bs.modal', function () {
  adjustModalSizeAnalisisNo();
});