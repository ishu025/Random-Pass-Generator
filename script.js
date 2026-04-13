const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

function generate() {
  let pass = '';
  for (let i = 0; i < 16; i++) {
    pass += CHARS[Math.floor(Math.random() * CHARS.length)];
  }
  document.getElementById('display').textContent = pass;
}

document.getElementById('gen').addEventListener('click', generate);

document.getElementById('copy-btn').addEventListener('click', () => {
  const pass = document.getElementById('display').textContent;
  navigator.clipboard.writeText(pass);
});