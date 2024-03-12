const mulclick = document.getElementById('btnExecute');

mulclick.addEventListener('click', function(){
    let row = document.getElementById('rowLimit').value;
    let col = document.getElementById('colLimit').value;
    let mulspace = "";
    for (var mulrow = 1; mulrow <= row; ++mulrow) {
        for (var mulcol = 1; mulcol <= col; ++mulcol) {
            mulspace +=
            "<table class='table' style='height:5rem; width:5rem'>" +
             "<tr>" + "<td>" + mulrow * mulcol + "</td>" + "</tr>" + "</table";
        }
        mulspace += "<div class='margin'></div>";
      }
    
      document.getElementById("div-wrapper").innerHTML = mulspace;
});


