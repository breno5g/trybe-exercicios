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
      console.log(opt);
      document.querySelector('#input-state').appendChild(opt);
    });
  });
