const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

let daysTable = document.getElementById('days');

function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

for (let i = 0; i < dezDaysList.length; i++) {
  let li = document.createElement('li');
  li.classList.add('days');
  li.textContent = dezDaysList[i];
  if (dezDaysList[i] == 24 || dezDaysList[i] == 25 || dezDaysList[i] == 31) {
    li.classList.add('holiday');
  }

  if (
    dezDaysList[i] === 4 ||
    dezDaysList[i] === 11 ||
    dezDaysList[i] === 18 ||
    dezDaysList[i] === 25
  ) {
    li.classList.add('friday');
  }
  daysTable.appendChild(li);
}

let buttonsContainer = document.querySelector('.buttons-container');
let feriadoBtn = document.createElement('button');
feriadoBtn.textContent = 'Feriado';
feriadoBtn.setAttribute('id', 'btn-holiday');
buttonsContainer.appendChild(feriadoBtn);

let colors = false;

document.querySelector('#btn-holiday').addEventListener('click', () => {
  let holidays = document.querySelectorAll('.holiday');
  if (colors == false) {
    for (let holiday of holidays) {
      holiday.style.backgroundColor = 'green';
    }
    colors = true;
  } else {
    for (let holiday of holidays) {
      holiday.style.backgroundColor = 'rgb(238,238,238)';
    }
    colors = false;
  }
});

let allDays = document.querySelectorAll('.days');

for (let i = 0; i < dezDaysList.length; i++) {
  allDays[i].addEventListener('mouseover', () => {
    allDays[i].style.fontSize = '30px';
  });
}
for (let i = 0; i < dezDaysList.length; i++) {
  allDays[i].addEventListener('mouseout', () => {
    allDays[i].style.fontSize = '20px';
  });
}

let addBtn = document.querySelector('#btn-add');
addBtn.addEventListener('click', (e) => {
  let str = e.target.previousElementSibling;
  let task = document.createElement('span');
  task.textContent = str.value;
  document.querySelector('.my-tasks').appendChild(task);
  str.value = '';
});
