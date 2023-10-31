
var studentName = document.getElementById("studentName");
var courseName = document.getElementById("courseName");
var student = document.getElementById("student");
var course = document.getElementById("course");
var grade = document.getElementById("grade");
var congress = document.getElementById("congress");

function markCal() {
  var marks = parseInt(document.getElementById("markes").value);
   
if (marks <= 32) {
    student.innerHTML = `Name: ${studentName.value}`;
    course.innerHTML = `Your Course name: ${courseName.value}`;
    grade.innerHTML = "Fail";
    congress.innerHTML = "You Are Failed";
    document.getElementById("studentName").value = "";
    document.getElementById("courseName").value = "";
    document.getElementById("marks").value = "";
  } else if (marks <= 40) {
    student.innerHTML = `Name: ${studentName.value}`;
    course.innerHTML = `Your Course name: ${courseName.value}`;
    grade.innerHTML = "You got C";
    congress.innerHTML = "Congratulations";
    document.getElementById("studentName").value = "";
    document.getElementById("courseName").value = "";
    document.getElementById("marks").value = "";
  } else if (marks <= 50) {
    student.innerHTML = `Name: ${studentName.value}`;
    course.innerHTML = `Your Course name: ${courseName.value}`;
    grade.innerHTML = "You got B-";
    congress.innerHTML = "Congratulations";
    document.getElementById("studentName").value = "";
    document.getElementById("courseName").value = "";
    document.getElementById("marks").value = "";
  } else if (marks <= 60) {
    student.innerHTML = `Name: ${studentName.value}`;
    course.innerHTML = `Your Course name: ${courseName.value}`;
    grade.innerHTML = "You got B";
    congress.innerHTML = "Congratulations";
    document.getElementById("studentName").value = "";
    document.getElementById("courseName").value = "";
    document.getElementById("marks").value = "";
  } else if (marks <= 70) {
    student.innerHTML = `Name: ${studentName.value}`;
    course.innerHTML = `Your Course name: ${courseName.value}`;
    grade.innerHTML = "You got A-";
    congress.innerHTML = "Congratulations";
    document.getElementById("studentName").value = "";
    document.getElementById("courseName").value = "";
    document.getElementById("marks").value = "";
  } else if (marks <= 85) {
    student.innerHTML = `Name: ${studentName.value}`;
    course.innerHTML = `Your Course name: ${courseName.value}`;
    grade.innerHTML = "You got A";
    congress.innerHTML = "Congratulations";
    document.getElementById("studentName").value = "";
    document.getElementById("courseName").value = "";
    document.getElementById("marks").value = "";
  } else if (marks <= 90) {
    student.innerHTML = `Name: ${studentName.value}`;
    course.innerHTML = `Your Course name: ${courseName.value}`;
    grade.innerHTML = "You got A+";
    congress.innerHTML = "Congratulations";
    document.getElementById("studentName").value = "";
    document.getElementById("courseName").value = "";
    document.getElementById("marks").value = "";
  } 
}


