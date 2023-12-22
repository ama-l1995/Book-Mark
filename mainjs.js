var Name = document.getElementById('Name');
var Url = document.getElementById('Url');
var btnDel = document.getElementById('btnDel');
var btnVis = document.getElementById('btnVis');
var Btn = document.getElementById('Btn');
var BookmarkList = [];

if (localStorage.getItem('bookmark') != null) {
	BookmarkList = JSON.parse(localStorage.getItem('bookmark'));
	console.log(BookmarkList);
	display();
}

function Add() {
    if ( chekNameValidate() &&  chekUrlValidate() ) {
    var Bookmark = {
        name: Name.value,
        url: Url.value,
    };
    BookmarkList.push(Bookmark);
    localStorage.setItem("bookmark", JSON.stringify(BookmarkList));
    clear();
    display();
    console.log(BookmarkList);
}
}

function clear() {
	Name.value = '';
	Url.value = '';
}

function display() {
    console.log(BookmarkList);
    var disp = "";
    for (i = 0; i < BookmarkList.length; i++) {
        disp += `
        <tr>
            <td>${i+1}</td>
            <td>${BookmarkList[i].name}</td>
            <td>
            <a href="${BookmarkList[i].url}" target="_blank" class="btn btn-info btn-visit"  id="btnVis"><i class="fa-solid fa-eye"></i> Visit</a> 
            </td>
            <td>
                <button class="btn btn-danger" onclick="Delete(${i})" id="btnDel">
                <i class="fa-solid fa-trash"></i> Delete</button>
                
            </td> 
    </tr> 
    `;
    }
    document.getElementById("tablebody").innerHTML = disp;
}

function Delete(del){
    BookmarkList.splice(del , 1 )
    localStorage.setItem("bookmark", JSON.stringify(BookmarkList));
    display()
}

function chekNameValidate() {
    var regexName = /^[A-z]{1,10}$/;
    var invalidMess = document.getElementById("invalidMessN");
    regexName.test(Name.value);
    if (regexName.test(Name.value)) {
        Name.classList.add("is-valid");
        Name.classList.remove("is-invalid");
        invalidMess.classList.add("d-none");
        return true;
    } else {
        Name.classList.add("is-invalid");
        Name.classList.remove("is-valid");
        invalidMess.classList.remove("d-none");
        return false;
    }
}

function chekUrlValidate() {
    var regexUrl = /^https:\/\/(?:www\.)?[-a-zA-Z0-9@:%.\+#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%\+.#?&\/=]*)$/
    var invalidMess = document.getElementById("invalidMessU");
    regexUrl.test(Url.value);
    if (regexUrl.test(Url.value)) {
        Url.classList.add("is-valid");
        Url.classList.remove("is-invalid");
        invalidMess.classList.add("d-none");
        return true;
    } else {
        Url.classList.add("is-invalid");
        Url.classList.remove("is-valid");
        invalidMess.classList.remove("d-none");
        return false;
    }
}