let bg = document.querySelector('.bg');
let textColor = document.querySelector('.text-color');
let fontSize = document.querySelector('.font-size');
let lineSpace = document.querySelector('.line-space');
let fontFamily = document.querySelector('.font-family');

bg.children[1].addEventListener('click', () => {
  let color = bg.children[0].value;
  document.body.style.background = color;
  localStorage.setItem('bg', color);
});
textColor.children[1].addEventListener('click', () => {
  let color = textColor.children[0].value;
  document.body.style.color = color;
  localStorage.setItem('textColor', color);
});
fontSize.children[1].addEventListener('click', () => {
  let font = fontSize.children[0].value;
  document.body.style.fontSize = `${font}px`;
  localStorage.setItem('fontSize', `${font}px`);
});
lineSpace.children[1].addEventListener('click', () => {
  let space = lineSpace.children[0].value;
  document.body.style.lineHeight = `${space}px`;
  localStorage.setItem('lineSpace', `${space}px`);
});
fontFamily.children[1].addEventListener('click', () => {
  let family = fontFamily.children[0].value;
  document.body.style.fontFamily = family;
  localStorage.setItem('fontFamily', family);
});

function bootLoad() {
  document.body.style.backgroundColor = localStorage.getItem('bg');
  document.body.style.color = localStorage.getItem('textColor');
  document.body.style.fontSize = localStorage.getItem('fontSize');
  document.body.style.lineHeight = localStorage.getItem('lineSpace');
  document.body.style.fontFamily = localStorage.getItem('fontFamily');
}

document.querySelector('.clear').addEventListener('click', () => {
  localStorage.clear();
  bootLoad();
});

document.body.addEventListener('onload', bootLoad());
