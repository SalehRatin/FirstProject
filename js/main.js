var myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    myRequest.onload = function () {
    myData = JSON.parse(myRequest.responseText);
    fillTable(myData, currentPage);
    fillPagination(myData);
    };
    myRequest.send();

function fillTable(data, page) {
    const body = document.getElementById('data')
    body.innerHTML = data.slice((page - 1) * 20, page * 20).map(function (item) {
    return `<tr>
      <td style="text-align: center">${item.userId}</td>
      <td style="text-align: center">${item.id}</td>
      <td>${item.title}</td>
      <td style="text-align: center">${item.completed}</td>
      <td><input type="button" value="Delete" onclick="deleteRow(this)">
      <input type="button" value="Edit" onclick="insertToForm(this)"></td>
      </tr>`
    }).join("")
}
let currentPage = 1;
function fillPagination(data) {
    const pagination = document.getElementById('pagination')
    const pageCount = Math.floor(data.length / 20);
    pagination.innerHTML = "";
    for (let i = 0; i < pageCount; i++) {
        const li = document.createElement("li");
        li.innerHTML = i + 1;
        li.onclick = function () {
            currentPage = i + 1;
            fillTable(myData, currentPage);
        }
        pagination.append(li)
    }
}
