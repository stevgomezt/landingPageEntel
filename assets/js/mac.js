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