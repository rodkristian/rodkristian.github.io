let empdata = [];
let avg = 0;

document.getElementById("btn-log").addEventListener('click', function() {
    let employeeid = document.getElementById("txtempid").value;
    let fullname = document.getElementById("txtfullname").value;
    let workinghours = parseFloat(document.getElementById("txtworkhrs").value);

    if(employeeid == "" || fullname == "" || workinghours == ""){
        alert("Input required text in text fields");
    }else{
        empdata.push( [employeeid, fullname, workinghours] );
        outputtable();
    }
});

function outputtable(){
    let tabledata = "";
    for(var x = 0; x < empdata.length; x++){
        tabledata+="<tr>" +
                      "<td>" + empdata[x][0] + "</td>"
                    + "<td>" + empdata[x][1] + "</td>" 
                    + "<td>" + empdata[x][2] + "</td>" 
                    + "<td>" + "<button class='btn btn-secondary' onclick='empdeldata("+x+");'>Remove</button>" + "</td>" +
                      "</tr>";
    }
    document.getElementById("tdata").innerHTML = tabledata;
    document.getElementById("avg-hrs").innerHTML = average(avg);
}

function average(ave){
    for(var x = 0; x < empdata.length; x++){
        if((empdata[x][2])==0){
            ave = 0;
        }else{
            ave+=empdata[x][2];
        }
    }
    return ave;
}

function empdeldata(index) {
    empdata.splice(index, 1);
    outputtable();
}