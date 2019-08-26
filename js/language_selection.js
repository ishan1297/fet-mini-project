//if current user is 0
var currentuser = localStorage.getItem("currentUser");
if (currentuser == 0) {
    window.location.replace("login_register.html");
}

//append user's language and genre selection
$(document).ready(function () {
    $('.save').click(function () {
        for (i = 0; i < localStorage.length; i++) {
            let itemkey = localStorage.key(i);
            let values = localStorage.getItem(itemkey);
            let langCheckBoxArray = [];
            let genreCheckBoxArray = [];

            values = JSON.parse(values);

            //get all languages selected
            $.each($("input[name='lang']:checked"), function () {
                langCheckBoxArray.push($(this).val());
            });

            //get all genres selected
            $.each($("input[name='genre']:checked"), function () {
                genreCheckBoxArray.push($(this).val());
            });

            values.language = langCheckBoxArray;
            values.genre = genreCheckBoxArray;
            localStorage.setItem(itemkey, JSON.stringify(values));
        }
    });
});

// go to album page
function album() {
    event.preventDefault();
    return window.open('./album.html', '_self');
}

// display user's first name and photo
var name = JSON.parse(localStorage.getItem(localStorage.getItem('currentUser'))).fname;
document.getElementById('myUsername').innerText = name;