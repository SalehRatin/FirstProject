fetch("./js/Mockinfo.json")
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            if (data.length > 0){
                var temp = "";
                data.forEach((u)=>{
                  temp +="<tr>";
                  temp +="<td>"+u.ID+"</td>";
                  temp +="<td>"+u.Name+"</td>";
                  temp +="<td>"+u.Email+"</td>";
                  temp +="<td>"+u.Mobile+"</td></tr>";
                  document.getElementById("data").innerHTML = temp;
                })
            }
        })