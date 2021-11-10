const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function modifyLesson(obj, key, value) {
  obj[key] = value;
  return obj;
}

// console.log(modifyLesson(lesson2, 'farofa', 'Melhor turma'));

function listKeys(obj) {
  let keys = Object.keys(obj);
  keys.forEach((key) => {
    console.log(key);
  });
}

// listKeys(lesson1);

function showSize(obj) {
  return Object.entries(obj).length;
}

// console.log(showSize(lesson2));

function listValues(obj) {
  obj = Object.values(obj);
  obj.forEach((value) => {
    console.log(value);
  });
}

// listValues(lesson1);

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// console.log(allLessons);

function totalStudents(obj) {
  const keys = Object.keys(obj);
  let total = 0;
  keys.forEach((key) => {
    total += obj[key].numeroEstudantes;
  });

  return total;
}

// console.log(totalStudents(allLessons));

function getValueByPos(obj, pos) {
  let arr = Object.entries(obj);
  return arr[pos][1];
}

// console.log(getValueByPos(lesson1, 2));

function verifyPair(obj, key, value) {
  let arr = Object.entries(obj);
  let res = false;
  arr.forEach((e) => {
    if (e[0] === key && e[1] === value) {
      res = true;
    }
  });
  return res;
}

console.log(verifyPair(lesson1, 'turno', 'manhã'));
