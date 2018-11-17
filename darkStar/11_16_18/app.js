var studentArray = [{
  id: 0,
  name: 'samip',
  email: 'samip@gmail.com'
},{
  id: 1,
  name: 'shelby',
  email: 'shelby@gmail.com'
},{
  id: 2,
  name: 'heaven',
  email: 'heaven@gmail.com'
},{
  id: 3,
  name: 'levi',
  email: 'levi@gmail.com'
}];

function addStudent() {
  var name = document.getElementById("name_input").value;
  var email = document.getElementById("email_input").value;
  studentArray.push({ id: studentArray.length + 1, name: name, email: email });
  $("#alert_notification").removeClass("hide");
  $("#alert_notification").addClass("show");
}

function addRow() {
    var table = document.getElementById("student-table");
    var row = table.insertRow(0);
    var nameCell = row.insertCell(0);
    var emailCell = row.insertCell(1);
    nameCell.innerHTML = "richard heaton";
    emailCell.innerHTML = "richard@gmail.com";
}

function addAllStudents() {
  var table = document.getElementById("student-table");

  for (var x = 0; x < studentArray.length; x++) {
    var row = table.insertRow(x + 1);
    var nameCell = row.insertCell(0);
    var emailCell = row.insertCell(1);
    nameCell.innerHTML = studentArray[x].name;
    emailCell.innerHTML = studentArray[x].email;
  }

}
