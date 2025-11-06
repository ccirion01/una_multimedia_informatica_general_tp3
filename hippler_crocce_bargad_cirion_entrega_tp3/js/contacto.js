const form = document.querySelector('.contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Obtener valores
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const asunto = document.getElementById('asunto').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  // Validación simple
  if (!nombre || !email || !mensaje) {
    alert('Por favor completa todos los campos obligatorios.');
    return;
  }

  // Simular envío
  console.log('Formulario enviado:', { nombre, email, asunto, mensaje });

  // Mensaje de confirmación
  alert(`¡Gracias ${nombre}! Tu mensaje fue enviado correctamente.`);

  // Limpiar formulario
  form.reset();
});