function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
//  console.log();
const refs= {
  colorChangeButton: document.querySelector('.change-color'),
  body: document.querySelector('body'),
  colorSpan: document.querySelector('.color'),
}

refs.colorChangeButton.addEventListener('click', colorChangeHendle);

const color = getRandomHexColor();

function colorChangeHendle(event){
  refs.body.setAttribute('style', `background-color: ${color}`);
  refs.colorSpan.textContent = `-${color}`;
  refs.colorSpan.value = color;
};


