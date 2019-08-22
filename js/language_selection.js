//append user's language and genre selection
$(document).ready(function () {
    $('.save').click(function () {
        for (i = 0; i < localStorage.length; i++) {
            let itemkey = localStorage.key(i);
            let values = localStorage.getItem(itemkey);
            let checkBoxArray = [];
            let radioButtonArray = [];

            values = JSON.parse(values);

            // get value of all checked checkboxes
            $('input:checkbox:checked').each(function () {
                checkBoxArray.push($(this).val());
            });

            values.languageAndGenre = checkBoxArray;
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
