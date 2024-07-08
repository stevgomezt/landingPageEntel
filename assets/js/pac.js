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