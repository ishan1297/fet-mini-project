
var currentuser = localStorage.getItem("currentUser");
if (currentuser == 0) {
    window.location.replace("login_register.html");
}
// for retrieving data in localstorage
var i = 0;
if (localStorage.length == 0) {
    console.log("No entries in local storage");
} else {
    var values = localStorage.getItem(localStorage.getItem('currentUser'));
    values = JSON.parse(values);
    console.log(values);
    document.getElementById("first_name").innerText += values.fname;
    document.getElementById("last_name").innerText += values.lname;
    document.getElementById("mobile").innerText += values.number;
    document.getElementById("email").innerText += values.email;
    document.getElementById("img").src = "images/profile/1.webp";
    document.getElementById("nav-img").src = "images/profile/1.webp";
    document.getElementById("logout").addEventListener("click", function () {
        localStorage.setItem("currentUser", JSON.stringify(0));
        window.location.replace("login_register.html");
    });
}
//for Username changes
var name=JSON.parse( localStorage.getItem(localStorage.getItem("currentUser"))).fname;
document.getElementById("myUsername").innerHTML=name;
//for redirecting
function goToAlbum() {
    return window.open("album.html", "_self");
}
function goToLang() {
    return window.open("language_selection.html", "_self");
}
