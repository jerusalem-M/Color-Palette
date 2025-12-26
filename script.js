function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.getElementById('generate').onclick = () => {
  for (let i = 1; i <= 4; i++) {
    const color = getRandomColor();
    document.getElementById('color' + i).style.background = color;
    document.getElementById('hex' + i).textContent = color;
  }
};

const toggle = document.getElementById('theme-toggle');
toggle.onclick = () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme',
    document.body.classList.contains('dark') ? 'dark' : 'light');
};

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

