$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".albums div").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

document.getElementById("nav-img").src = "./images/profile/1.webp";
document.getElementById("logout").addEventListener("click", function () {
    localStorage.setItem("currentUser", JSON.stringify(0));
    window.location.replace("homepage.html")
});

function goToLang() {
    return window.open("language_selection.html", "_self");
}

var name = JSON.parse(localStorage.getItem(localStorage.getItem("currentUser"))).fname;
document.getElementById("myUsername").innerHTML = name;