function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.getElementById('generate').addEventListener('click', () => {
  for (let i = 1; i <= 4; i++) {
    document.getElementById('color' + i).style.backgroundColor = getRandomColor();
  }
});
