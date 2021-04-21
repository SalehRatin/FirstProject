var selectedRow = null

function insertToForm(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("userid").value = selectedRow.cells[0].innerHTML;
  document.getElementById("id").value = selectedRow.cells[1].innerHTML;
  document.getElementById("title").value = selectedRow.cells[2].innerHTML;
  document.getElementById("completion").value = selectedRow.cells[3].innerHTML
  topFunction();
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.userid;
  selectedRow.cells[1].innerHTML = formData.id;
  selectedRow.cells[2].innerHTML = formData.title;
  selectedRow.cells[3].innerHTML = formData.completion;
}
function resetForm() {
  document.getElementById("userid").value = "";
  document.getElementById("id").value = "";
  document.getElementById("title").value = "";
  document.getElementById("completion").value = "";
  selectedRow = null;
}
function readFormData() {
  var formData = {};
  formData["userid"] = document.getElementById("userid").value;
  formData["id"] = document.getElementById("id").value;
  formData["title"] = document.getElementById("title").value;
  formData["completion"] = document.getElementById("completion").value;
  return formData;
}
function submitFormData() {
  var formData = readFormData();
  updateRecord(formData);
  resetForm();
}
function deleteRow(r) {
  if (confirm('Are you sure?')){
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
    resetForm();
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}