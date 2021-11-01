// function start() {
const URL = `https://servicodados.ibge.gov.br/api/v1/localidades/estados`;

fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then((res) => {
    res.forEach((e) => {
      let opt = document.createElement('option');
      opt.value = e.sigla;
      opt.text = e.nome;
      document.querySelector('#input-state').appendChild(opt);
    });
  });

let date = document.querySelector('#initial-date');

date.addEventListener('keyup', (e) => {
  if (Number(e.target.value) === NaN) {
    return false;
  }
  if (e.key !== 'Backspace') {
    if (e.target.value.length === 2) {
      e.target.value += '/';
    }
    if (e.target.value.length === 5) {
      e.target.value += '/';
    }
  }
});

function dateFormater() {
  let spaces = date.value.split('/');
  for (let cel of spaces) {
    if (isNaN(Number(cel)) || Math.sign(Number(cel)) === -1) {
      return false;
    }
  }
  if (spaces[0] <= 0 || spaces[0] > 31) {
    alert('Dia inserido invalido');
  }
  if (spaces[1] <= 0 || spaces[1] > 12) {
    alert('Mês inserido invalido');
  }
  if (Math.sign(Number(spaces[2]) === -1)) {
    alert('Ano inserido invalido');
  }
}

document
  .querySelector('button[type="submit"]')
  .addEventListener('click', (e) => {
    e.preventDefault();
    dateFormater();
    mountCurriculum();
  });

function mountCurriculum() {
  const formData = new FormData(document.querySelector('form'));
  for (let data of formData) {
    let span = document.createElement('span');
    span.textContent = data[1];
    document.querySelector('.curriculum-vitae').appendChild(span);
  }
}
