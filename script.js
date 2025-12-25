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

