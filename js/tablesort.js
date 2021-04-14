function sortTable(col){
    myData.sort(function(a, b) {
        if(asc[col]){
            return a[col] > b[col]? 1:-1;
        }
        else{
            return a[col] > b[col]? -1:1;;
        }  
    });
    asc[col] = !asc[col];
    document.getElementById('data').innerHTML = '';
    dataTable(myData);
}