//append user's language and genre selection
$(document).ready(function () {
    $('.save').click(function () {
        for (i = 0; i < localStorage.length; i++) {
            var itemkey = localStorage.key(i);
            var values = localStorage.getItem(itemkey);
            values = JSON.parse(values);
            let checkBoxArray = [];
            let radioButtonArray = [];
            $('input:checkbox:checked').each(function () {
                checkBoxArray.push($(this).val());
            });
            values.languageAndGenre = checkBoxArray;
            localStorage.setItem(itemkey, JSON.stringify(values));
        }
    });
});

function goToHomepage() {
    var currentUser = localStorage.getItem("currentUser");
    currentUser = 0;
    localStorage.setItem("currentUser", currentUser);
    return window.open("./homepage.html", "_self");
}

function album() {
    event.preventDefault();
    return window.open("./album.html", "_self");
}

var name = JSON.parse(localStorage.getItem(localStorage.getItem("currentUser"))).fname;
console.log("name" + name);
document.getElementById("myUsername").innerText = name;
document.getElementById("nav-img").src = "images/profile/1.webp";