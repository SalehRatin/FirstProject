var myData, asc = {'userId':true, 'id':true, 'title':true, 'completed':true};
function sortTable(col, e){
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
    fillTable(myData, currentPage);
    var currentTarget = e.currentTarget;
   
    Array.from(currentTarget.parentElement.children).forEach(function(ele) {
    ele.classList.remove('asc', 'des');
    })

    if(!asc[col]) {
        currentTarget.classList.add('asc');
    } else {
      currentTarget.classList.add('des');
    }
}