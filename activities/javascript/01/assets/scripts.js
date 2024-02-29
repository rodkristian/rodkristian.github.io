let morning = document.getElementById("btn-morning");
let afternoon = document.getElementById("btn-afternoon");
let evening = document.getElementById("btn-evening");
let greetmorning = "Good Morning ";
let greetafternoon = "Good Afternoon ";
let greetevening = "Good Evening ";

morning.addEventListener('click', () =>{
    let name = document.getElementById("input").value;

    document.getElementById("output-day").innerHTML = greetmorning;
    document.getElementById("output-name").innerHTML = name;
});
afternoon.addEventListener('click', () =>{
    let name = document.getElementById("input").value;

    document.getElementById("output-day").innerHTML = greetafternoon;
    document.getElementById("output-name").innerHTML = name;
});
evening.addEventListener('click', () =>{
    let name = document.getElementById("input").value;

    document.getElementById("output-day").innerHTML = greetevening;
    document.getElementById("output-name").innerHTML = name;
});