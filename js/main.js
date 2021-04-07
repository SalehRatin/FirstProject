var myRequest = new XMLHttpRequest();
myRequest.open('GET', './js/MOCK_DATA.json');
myRequest.onload = function(){
    var myData = JSON.parse(myRequest.responseText);
    dataTable(myData);
    // console.log(ourData[0]);
};
myRequest.send();

function dataTable(data) {
    if (data.length > 0){
        var temp = "";
        data.forEach((u)=>{
            temp +="<tr>";
            temp +="<td>"+u.id+"</td>";
            temp +="<td>"+u.first_name+"</td>";
            temp +="<td>"+u.last_name+"</td>";
            temp +="<td>"+u.email+"</td>";
            temp +="<td>"+u.gender+"</td>";
            temp +="<td>"+u.phone+"</td></tr>";
            document.getElementById("data").innerHTML = temp;
        })
    }
}