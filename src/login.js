const userEmail = document.getElementById('email');
const userPassword = document.getElementById('password');

document.getElementById('submit').addEventListener("click", ()=> {
  if (userEmail === 'admin' && userPassword === 'admin') {
    window.location.href = 'index.html';
    alert('hola')
  } else {
    alert('No es el usuario o contraseña correcta');
  }
})
