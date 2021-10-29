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
  if (Math.sign(Number(spaces[2]))) {
    alert('Ano inserido invalido');
  }
}

document
  .querySelector('button[type="submit"]')
  .addEventListener('click', (e) => {
    e.preventDefault();
    mountCurriculum();
  });

let classes = [
  'personName',
  'email',
  'cpf',
  'adress',
  'adress-type',
  'resume',
  'charge',
  'date',
];

function mountCurriculum() {
  const formData = new FormData(document.querySelector('form'));
  document.querySelector('.personName').textContent =
    formData.get('input-name');
  document.querySelector('.email').textContent = formData.get('input-email');
  document.querySelector('.cpf').textContent = formData.get('input-cpf');
  document.querySelector('.adress').textContent = formData.get('input-adress');
  document.querySelector('.state').textContent = formData.get('input-state');
  document.querySelector('.adress-type').textContent =
    formData.get('radio-tipo');
  document.querySelector('.charge').textContent = formData.get('input-charge');
  document.querySelector('.resume').textContent =
    formData.get('charge-description');
  document.querySelector('.date').textContent = formData.get('input-date');
}
