var array = [{
  id: 0,
  name: 'richard',
  hobby: function() {
    console.log('hobby: lifting weights');
  }
},{
  id: 1,
  name: 'ben',
  hobby: function() {
    console.log('hobby: gaming');
  }
},{
  id: 2,
  name: 'samip',
  hobby: function() {
    console.log('hobby: gaming');
  }
},{
  id: 3,
  name: 'shelby',
  hobby: function() {
    console.log('hobby: gaming');
  }
},{
  id: 4,
  name: 'heaven',
  hobby: function() {
    console.log('hobby: gaming');
  }
}];

function submit() {
  var name = document.getElementById("name_input").value;
  var hobby = document.getElementById("hobby_input").value;

  array.push({ id: array.length++, name: name, hobby: hobby });
}

function display() {

  array.forEach(function(person) {
    console.log(person.name);
    person.hobby();
  });

  //for (var x = 0; x < array.length; x++) {
  //  console.log(array[x].name);
  //}

  //var input1 = document.getElementById("our_input_id_1").value;
  //var input2 = document.getElementById("our_input_id_2").value;
  //if (input1 != input2) {
  //  alert('they are NOT the same!!!');
  //} else if (input1 == input2) {
  //  alert('they are the same');
  //}

  //console.log(input1 + ' ' + input2);
  //var name = prompt('Tell us your name?');
  //alert(input);
}
