document.getElementById('date-id').DatePickerX.init();

document.getElementById('send').addEventListener('click', function(e) {
  e.preventDefault();
  let check = document.getElementById('photo-agree-id').checked;
  console.log(check);
  if(!check) {
    alert('Dados inválidos!');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
});