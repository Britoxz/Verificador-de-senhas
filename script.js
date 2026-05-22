function checkPassword() {
  const password = document.getElementById('password').value;
  const result = document.getElementById('result');

  let strength = 0;

  if(password.length >= 8) strength++;
  if(/[A-Z]/.test(password)) strength++;
  if(/[0-9]/.test(password)) strength++;
  if(/[!@#$%^&*]/.test(password)) strength++;

  if(strength <= 1) {
    result.textContent = 'Senha fraca';
  } else if(strength <= 3) {
    result.textContent = 'Senha média';
  } else {
    result.textContent = 'Senha forte';
  }
}