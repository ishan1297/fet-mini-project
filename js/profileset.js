var currentuser = localStorage.getItem("currentUser");
if (currentuser == 0) {
  window.location.replace("homepage.html");
}
document.getElementById("logout").addEventListener("click", function () {
  localStorage.setItem("currentUser", JSON.stringify(0));
  window.location.replace("homepage.html");
});


//function to check for unique email
function uniqueEmail() {
  var i = 0;
  var counterNumber = 0;
  var email = $('#email').val();
  for (i = 0; i < localStorage.length; i++) {
    var itemkey = localStorage.key(i);
    var values = localStorage.getItem(itemkey);
    values = JSON.parse(values);
    if (email == values.email) {
      counterNumber++;
    }
  }
  if (counterNumber > 0) {
    document.getElementById("email").setCustomValidity("Email is already registered with us!");
  } else {
    document.getElementById("email").setCustomValidity('');
  }
}

//function to check for unique contact number
function uniqueNumber() {
  var counterNumber = 0;
  var number = $('#number').val();
  for (var i = 0; i < localStorage.length; i++) {
    var itemkey = localStorage.key(i);
    var values = localStorage.getItem(itemkey);
    values = JSON.parse(values);
    if (number == values.number) {
      counterNumber++;
    }
  }
  if (counterNumber > 0) {
    document.getElementById("number").setCustomValidity('Number is already registered!');
  } else {
    document.getElementById("number").setCustomValidity('');
  }
}


//validate password and confirm-password match
function check(input) {
  if (input.value != document.getElementById("rpassword").value) {
    input.setCustomValidity("Password Must be Matching.");
  } else {
    input.setCustomValidity("");
  }
}



var currUser = JSON.parse(localStorage.getItem(localStorage.getItem('currentUser')));
console.log(currUser.fname);
document.getElementById("fname").value = currUser.fname;
console.log(currUser.fname);
document.getElementById("lname").value = currUser.lname;
document.getElementById("number").value = currUser.number;
document.getElementById("email").value = currUser.email;
document.getElementById("rpassword").value = currUser.password;

function save() {
  //event.preventDefault();
  console.log("hi " + currUser.fname);
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var number = document.getElementById("number").value;
  var email = document.getElementById("email").value;
  // var password = document.getElementById("rpassword").value;
  var password = currUser.password;
  var status = currUser.status;
  var languageAndGenre= currUser.languageAndGenre;
  


  let user = {

    fname: fname,
    lname: lname,
    email: email,
    number: number,
    password: password,
    status: status,
    genre: genre,
    language: language,
    languageAndGenre: languageAndGenre


  };

  // addToStorage = (user) => {
  localStorage.setItem(localStorage.getItem('currentUser'), JSON.stringify(user));
}
document.getElementById("img").src = "images/profile/1.webp";
document.getElementById("nav-img").src = "images/profile/1.webp";

var name=JSON.parse( localStorage.getItem(localStorage.getItem("currentUser"))).fname;
document.getElementById("myUsername").innerHTML=name;