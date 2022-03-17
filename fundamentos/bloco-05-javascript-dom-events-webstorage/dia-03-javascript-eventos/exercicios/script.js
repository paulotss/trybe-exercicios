function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//Exercício 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const ulDays = document.getElementById('days');

function createDayDez(arr) {
  let li;
  for(let val of arr) {
    li = document.createElement('li');
    li.classList.add('day');
    li.innerText = val;
    li.addEventListener('click', addTaskColor);
    switch(val) {
      case 24:
        li.classList.add('holiday');
        break;
      case 25:
        li.classList.add('holiday');
        li.classList.add('friday');
        break;
      case 31:
        li.classList.add('holiday');
        break;
      case 4:
        li.classList.add('friday');
        break;
      case 11:
        li.classList.add('friday');
        break;
      case 18:
        li.classList.add('friday');
        break;
    }
    ulDays.appendChild(li);
  }
}

createDayDez(dezDaysList);

//Exercício 2
function createButton(src, id) {
  let buttonHol = document.createElement("button");
  buttonHol.setAttribute('id', id);
  buttonHol.innerText = src;
  return buttonHol;
}

document.querySelector(".buttons-container").appendChild(createButton("Feriados", "btn-holiday"));

//Exercício 3
function holidays() {
  let hol = document.getElementsByClassName('holiday');
  for(let val of hol) {
    if(val.style.backgroundColor === "blue") {
      val.style.backgroundColor = "rgb(238,238,238)";
    } else {
      val.style.backgroundColor = "blue";
    }
  }
}

document.getElementById('btn-holiday').addEventListener('click',holidays);

//Exercício 4
document.querySelector(".buttons-container").appendChild(createButton("Sexta-Feira", "btn-friday"));

//Exercício 5
function fridays() {
  let fri = document.getElementsByClassName('friday');
  for(let val of fri) {
    if(val.style.fontWeight === 'bold') {
      val.style.fontWeight = 'normal';
    } else {
      val.style.fontWeight = 'bold';
    }
  }
}

document.getElementById('btn-friday').addEventListener('click', fridays);


//Exercício 6
let days = document.getElementsByClassName('day');
for(let val of days) {
  val.addEventListener('mouseover', zoomIn);
  val.addEventListener('mouseout', zoomOut);
}

function zoomIn(e) {
  e.target.style.fontSize = "24px";
}

function zoomOut(e) {
  e.target.style.fontSize = "20px";
}

//Exercício 7
function addTask(src) {
  let task = document.createElement('span');
  task.innerText = src;
  document.querySelector('.my-tasks').appendChild(task);
}

addTask('Tarefa');

//Exercício 8
function addLegend(color) {
  let task = document.createElement('div');
  task.classList.add('task');
  task.style.backgroundColor = color;
  
  //Exercicio 9
  task.addEventListener('click', function(e) {
    e.target.classList.toggle('selected');
  });

  document.querySelector('.my-tasks').appendChild(task);
}

addLegend('green');

//Exercicio 10
function addTaskColor(e) {
  let selected = document.querySelector('.selected');
  if(selected !== null) {
    let color = selected.style.backgroundColor;
    let colorLi = e.target.style.color;
    e.target.style.color = color === colorLi ? 'rgb(119,119,119)' : color;
  }
}