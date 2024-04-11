const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(window.scrollY >= 45){
        navEl.classList.add('navbar-scrolled');
    }else if (window.scrollY < 45){
        navEl.classList.remove('navbar-scrolled');
    }
});

const noteArray = [];

function fetchData(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "json/notes.json", true);
    xhttp.send();
    xhttp.addEventListener('load', function() {
        let result = JSON.parse(xhttp.responseText);
        
        for (const note of result)
            noteArray.push(note);

        noteCard(noteArray);
    });
}

function noteCard(mappedNote){
    let cardNote = mappedNote.map( (notes) => {
        const {note_id,user,title,subject,body} = notes;
        return `
            <div class="col-md-3 mt-3">
                <div class="card" style="height: 300px;">
                    <div class="card-header">
                        <span class="user_name fw-bold">${user}</span>
                    </div>
                    <div class="card-body overflow-hidden">
                        <h5 class="card-title mt-1">${title}</h5>
                        <h6 class="card-subtitle mt-1">${subject}</h6>
                        <p class="card-text fw-normal mt-2">${body}</p>
                    </div>
                    <div class="card-footer">
                        <a href="" class="noteIcon" data-bs-toggle="modal" data-bs-target="#viewModal" onclick="viewNote('${encodeURIComponent(JSON.stringify(notes))}');"><i class="las la-edit"></i></a>
                    </div>
                </div>
            </div>
        `;
    });

    if (cardNote.length > 0)
        document.getElementById("noteGallery").innerHTML = cardNote.join('');
    else 
        document.getElementById("noteGallery").innerHTML = "<h1>Note is empty</h1>";

}

document.getElementById("addNote").addEventListener("click", function(){

    let addId = noteArray.length + 1;
    let noteUser = document.getElementById("exampleFormControlInput1").value;
    let noteTitle = document.getElementById("exampleFormControlInput2").value;
    let noteSubject = document.getElementById("exampleFormControlInput3").value;
    let noteBody = document.getElementById("exampleFormControlTextarea4").value;

    let objNote = {
        note_id: addId,
        user: noteUser,
        title: noteTitle,
        subject: noteSubject,
        body: noteBody
    }

    noteArray.push(objNote);
    noteCard(noteArray);

    document.getElementById("exampleFormControlInput1").value = '';
    document.getElementById("exampleFormControlInput2").value = '';
    document.getElementById("exampleFormControlInput3").value = '';
    document.getElementById("exampleFormControlTextarea4").value = '';

});

document.querySelector("#searchUser").addEventListener('keyup', function() {
    let noteUser = this.value;

    let filteredNotes = noteArray.filter( (notes) => {
        if (notes.user.toLowerCase().indexOf(noteUser.toLowerCase()) > -1)
            return notes;
    });

    noteCard(filteredNotes);
    
});

function viewNote(passedNote){
    const {note_id,user,title,subject,body} = JSON.parse(decodeURIComponent(passedNote));
    document.querySelector("#viewUser").innerHTML = "User:" + " " + `<span class='user_name fw-bold'>${user}</span>`;
    document.querySelector("#viewTitle").innerHTML = "Title:" + " " + title;
    document.querySelector("#viewSubject").innerHTML = "Subtitle:" + " " + subject;
    document.querySelector("#viewBody").innerHTML = body;
}

window.addEventListener('resize', () => {
    let width = window.innerWidth;
    let webWidth = document.querySelector(".note");
    let webButtons = document.querySelector(".notebuttons");
    if(width <= 575){
        webWidth.className = 'note col-11';
    }else{
        webWidth.className = 'note col-md-11 col-lg-11 col-sm-11';
        webButtons.className = 'notebuttons col-1 d-flex justify-content-end align-items-center';
    }
});

