let add = 0;
let totgrade = 0;

document.querySelector("#btnAddGrade").addEventListener("click", function(){
    let Input = document.createElement("input");
    Input.className = "form-control form-control-sm";
    Input.type = "number";
    Input.placeholder = `Enter Grade`;
    Input.id = 'gradesub';

    let Li = document.createElement("li");
    Li.className = "mt-2 mb-2";

    Li.append(Input);

    document.querySelector("#grade-parent").append(Li);
});

document.querySelector("#btnRemoveGrade").addEventListener("click", function () {
    document.querySelector("li:last-child").remove();
});

document.querySelector("#btnCalculateGrade").addEventListener("click", function () {
    let allgrade = document.querySelector("#gradesub").value;
    add+=parseFloat(allgrade);
    document.querySelector("#grades").innerHTML = add;
});