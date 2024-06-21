document.getElementById('consulta-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Enviamos tu consulta, en la brevedad nos comunicaremos, gracias por confiar en nosotros.');
    this.reset();
});
