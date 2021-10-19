document.getElementById('header-container').style.color = 'black';

let emergency = document.getElementsByClassName('emergency-tasks')[0];
emergency.style.backgroundColor = 'salmon';
emergency.children[0].children[0].style.backgroundColor = 'purple';
emergency.children[1].children[0].style.backgroundColor = 'purple';

let no_emergency = document.getElementsByClassName('no-emergency-tasks')[0];
no_emergency.style.backgroundColor = '#e9fda1';
no_emergency.children[0].children[0].style.backgroundColor = 'black';
no_emergency.children[1].children[0].style.backgroundColor = 'black';
