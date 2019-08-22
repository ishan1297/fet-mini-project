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

//function to implement register functionality
function register() {
  var i;
  var newDate = new Date();
  var values = new Array();
  var itemId = newDate.getTime();
  var fname = $("#fname").val();
  var lname = $("#lname").val();
  var email = $("#email").val();
  var number = $("#number").val();
  var password = $("#rpassword").val();
  var status = 0;
  var languageAndGenre = [];
  user = {
    fname: fname,
    lname: lname,
    email: email,
    number: number,
    password: password,
    status: status,
    languageAndGenre: languageAndGenre
  };
  try {
    localStorage.setItem(itemId, JSON.stringify(user));
    alert("Registeration successful!");
  } catch (e) {
    if (e == QUOTA_EXCEEDED_ERR) {
      alert('Quota exceeded!');
    }
  }

}

//function to implement login functionality
function login() {
  var i = 0;
  var username = $('#username').val();
  var password = $('#password').val();
  var loginAttempt = 0;
  if (localStorage.length == 0) {
    console.log("No entries in local storage");
  } else {
    for (i = 0; i < localStorage.length; i++) {
      var itemkey = localStorage.key(i);
      var values = localStorage.getItem(itemkey);
      values = JSON.parse(values);
      if ((username == values.email || username == values.number) && (password == values.password)) {
        event.preventDefault();
        localStorage.setItem("currentUser", itemkey);
        values.status = 1;
        localStorage.setItem(itemkey, JSON.stringify(values));
        loginAttempt++;
      }
    }
    if (loginAttempt > 0) {
      event.preventDefault();
      return window.open("./language_selection.html", "_self");
    } 
    else {
      alert("Login Failure");
    }
  }
}

function goToAlbum() {
  return window.open("album.html", "_self");
}