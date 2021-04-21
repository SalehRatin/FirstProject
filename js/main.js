var myData, asc = {'userId':true, 'id':true, 'title':true, 'completed':true};
var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos');
myRequest.onload = function () {
  myData = JSON.parse(myRequest.responseText);
  dataTable(myData);
};
myRequest.send();

function dataTable(data) {
  if (data.length > 0) {
    var temp = '';
    data.forEach((u) => {
      temp += '<tr>';
      temp += "<td style='text-align: center'>" + u.userId + '</td>';
      temp += "<td style='text-align: center'>" + u.id + '</td>';
      temp += '<td>' + u.title + '</td>';
      temp += "<td style='text-align: center'>" + u.completed + '</td>';
      temp += "<td>" + '<input type="button" value="Delete" onclick="deleteRow(this)"> <input type="button" value="Edit" onclick="insertToForm(this)">' + '</td></tr>';
      document.getElementById('data').innerHTML = temp;
    });
  } 
}