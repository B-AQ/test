'use strict';

let form = document.getElementById('form');
let table = document.getElementById('table');
let allStudents = [];
// Returns a random integer from 0 to 100:
function random() {
  let grade = Math.floor(Math.random() * 101);
  return grade;

}

function Student(studentName, course) {

  this.studentName = studentName;
  this.course = course;
  this.grade = random();
  this.status = '';
  allStudents.push(this);


}


function updateStorage() {
  let stringing = JSON.stringify(allStudents);
  localStorage.setItem('student', stringing);

}

function reternStorage() {
  let data = localStorage.getItem('student');

  let parsing = JSON.parse(data);

  if (parsing) {

    for (let i = 0; i < parsing.length; i++) {

      let newStudentOb = new Student(parsing[i].studentName,parsing[i].course);
      newStudentOb.render();

    }

  }
}


Student.prototype.getStatus = function () {
  if (this.grade < 50)
    this.status= 'Fail';

  else {
    this.status = 'Pass';

  }

};

Student.prototype.render = function () {

  let trElement = document.createElement('tr');

  table.appendChild(trElement);


  let tdElement1 = document.createElement('td');

  trElement.appendChild(tdElement1);

  tdElement1.textContent = this.studentName;


  let tdElement2 = document.createElement('td');

  trElement.appendChild(tdElement2);

  tdElement2.textContent = this.course;

  let tdElement3 = document.createElement('td');

  trElement.appendChild(tdElement3);

  tdElement3.textContent = this.grade;

  let tdElement4 = document.createElement('td');

  trElement.appendChild(tdElement4);

  tdElement4.textContent = this.status;


  //   console.log(this.studentName);


};

// let bashar = new Student('bashar','art');
// bashar.render();
// console.log(bashar);





form.addEventListener('submit', submitter);

function submitter(event) {
  event.preventDefault();
  let userName = event.target.studentName.value;
  let courseName = event.target.course.value;

  let newStudent = new Student(userName, courseName);

  newStudent.getStatus();
  newStudent.render();

  updateStorage();

}

reternStorage();






