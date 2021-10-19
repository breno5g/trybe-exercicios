/*
Acesse o elemento elementoOndeVoceEsta .
Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
Acesse o primeiroFilho a partir de pai .
Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
Agora acesse o terceiroFilho a partir de pai .
*/

let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');

console.log(ondeVoceEsta);
ondeVoceEsta.parentElement.style.color = 'tomato';

ondeVoceEsta.children[0].textContent = 'add Farofa';

console.log(ondeVoceEsta.parentElement.children[0]);
console.log(ondeVoceEsta.previousElementSibling);
