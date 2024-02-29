let english = document.getElementById("inp-eng");
let math = document.getElementById("inp-math");
let datastructure = document.getElementById("inp-datastruct");
let compprogramming = document.getElementById("inp-comprog");
let webprogramming = document.getElementById("inp-webprog");

// let tot = parseInt(english) + parseInt(math) + parseInt(datastructure) + parseInt(compprogramming) + parseInt(webprogramming);

english.addEventListener('keyup', function() {
    let total = parseFloat(english.value) + parseFloat(math.value) + parseFloat(datastructure.value) + parseFloat(compprogramming.value) + parseFloat(webprogramming.value);
    document.getElementById("tot-grade").value = total;
    let average = total / 5;
    document.getElementById("ave").value = average;
});

math.addEventListener('keyup', function() {
    let total = parseFloat(english.value) + parseFloat(math.value) + parseFloat(datastructure.value) + parseFloat(compprogramming.value) + parseFloat(webprogramming.value);
    document.getElementById("tot-grade").value = total;
    let average = total / 5;
    document.getElementById("ave").value = average;
});

datastructure.addEventListener('keyup', function() {
    let total = parseFloat(english.value) + parseFloat(math.value) + parseFloat(datastructure.value) + parseFloat(compprogramming.value) + parseFloat(webprogramming.value);
    document.getElementById("tot-grade").value = total;
    let average = total / 5;
    document.getElementById("ave").value = average;
});

compprogramming.addEventListener('keyup', function() {
    let total = parseFloat(english.value) + parseFloat(math.value) + parseFloat(datastructure.value) + parseFloat(compprogramming.value) + parseFloat(webprogramming.value);
    document.getElementById("tot-grade").value = total;
    let average = total / 5;
    document.getElementById("ave").value = average;
});

webprogramming.addEventListener('keyup', function() {
    let total = parseFloat(english.value) + parseFloat(math.value) + parseFloat(datastructure.value) + parseFloat(compprogramming.value) + parseFloat(webprogramming.value);
    document.getElementById("tot-grade").value = total;
    let average = total / 5;
    document.getElementById("ave").value = average;
});

