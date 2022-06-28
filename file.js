class task {
  constructor(name, description, date, status) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.status = status;
  }
};
let firstTaskDate = new Date("2018-02-18").toISOString().split('T')[0];
let secondTaskDate = new Date("2019-12-12").toISOString().split('T')[0];
let thirdTaskDate = new Date("2023-06-01").toISOString().split('T')[0];
let fouterTaskDate = new Date("2022-03-21").toISOString().split('T')[0];
let task_list = [
  new task("Go to ATB", "bay fruit and water", firstTaskDate, true),
  new task("Make breakfast", "coffee and sandwith", secondTaskDate, true),
  new task("Call to the mother", "ask her when they come", thirdTaskDate, false),
  new task("Go to the city", "work meeting", fouterTaskDate, false),
];
let new_task;
const mainForm = document.getElementById("form");
const button = document.getElementById("button");

function retrieveFormValue() {
  console.log("conect");
  const name = mainForm.querySelector('[name="nameInput"]');
  const description = mainForm.querySelector('[name="descriptionInput"]');
  const date = mainForm.querySelector('[name="dateInput"]');

  const values = {
    name: name.value,
    description: description.value,
    date: date.value,
  };
  console.log(values.name);
  console.log(values.description);
  console.log(values.date);

  new_task = new task(values.name, values.description, values.date);
  task_list.push(new_task);
  appendTask(new_task);
  return false;
}

function test() {

}

const taskListElement = document.getElementById("task_list");
function appendTask(task) {
  const { name, description, date, status } = task;
  if (name && name.length) {

  taskListElement.innerHTML += `
        <div class="task ${checkHideClass(status)}">
          <div class="name_button">
            <h4 class="${checkTaskStatus(status)}">${name}</h4>
            <span class="closebtn" onclick="deleteTask(this)">&times;</span>
          </div>  
            <p class="color_text">${description}</p>
            <div class="status_date">
              <p class="paragrath" class="${dateCompasion(date, status)}">${date}</p>
              <input type="checkbox" class="checkbox" ${isChecked(status)} onclick="changeTaskStatus(this), dateChecked(this), addHideClass(this) ">
            </div>
        </div>`;
}else{
  alert("Write name of task")
}

}
task_list.forEach(appendTask);
function isChecked(status) {
    if (status) {
        return 'checked'
    }
    else{
        return ""
    }
}

function checkTaskStatus(status) {
    if (status) {
        return 'done_checkbox'
    }
    else{
        return ''
    }
}
function changeTaskStatus(element) {
    const titleClassList = element.parentElement.parentElement.querySelector("h4").classList
    if (element.checked) {
        titleClassList.add('done_checkbox')

    }
    else{
        titleClassList.remove('done_checkbox')

    }
}


function dateCompasion(date, status) {
  let dateNow = new Date().toISOString().split('T')[0];
  if (status) {
    return ""
  }
  else{
    if (dateNow > date) {
      return "timeOver"
      
    }
    else{
      return ""
    }
  }
  }


function dateChecked(element) {
  const checkDate = element.parentElement.querySelector("p").classList
  if (element.checked) {
    checkDate.remove('timeOver')
  }
  else{
    checkDate.add('timeOver')
  }
}

function deleteTask(element) {
  const delButton = element.parentElement.parentElement
  delButton.remove()
}

function displayTaskList() {
  let listClass = document.querySelector('main').querySelector('div').classList
  listClass.toggle('showTaskList')
}

function addHideClass(element) {
  let task = element.parentElement.parentElement.classList
  if (element.checked) {
    task.add('done_task')
  } 
  else{
    task.remove('done_task')
  }
}
function checkHideClass(status) {
  if (status) {
    return "done_task"
  }
  else{
    return " "
  }
}
