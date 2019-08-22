//check Name validation
function checkName() {
  let fname = $('#fname').val();
  let lname = $('#lname').val();

  //check for first name
  if(fname.length<3 || fname.length>25) {
    document.getElementById('fname').setCustomValidity('Name should be 3-25 character only');
  }
  else {
    document.getElementById('fname').setCustomValidity('');
  }

  //check for last name
  if(lname.length<3 || lname.length>25) {
    document.getElementById('lname').setCustomValidity('Name should be 3-25 character only');
  }
  else {
    document.getElementById('lname').setCustomValidity('');
  }
}

//check for password validation
function passCheck() {
  let password = $('#rpassword').val();

  //check for password
  if(password.length<5 || password.length>25) {
    document.getElementById('rpassword').setCustomValidity('Password should be 5-25 character only');
  }
  else {
    document.getElementById('rpassword').setCustomValidity('');
  }
}

//function to check for unique email
function uniqueEmail() {
  let i = 0;
  let counterNumber = 0;
  let email = $('#email').val();

  for (i = 0; i < localStorage.length; i++) {
    let itemkey = localStorage.key(i);
    let values = localStorage.getItem(itemkey);

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
  let counterNumber = 0;
  let number = $('#number').val();
  
  for (var i = 0; i < localStorage.length; i++) {
    let itemkey = localStorage.key(i);
    let values = localStorage.getItem(itemkey);

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
  let i;
  let newDate = new Date();
  let values = new Array();
  let itemId = newDate.getTime();
  let fname = $("#fname").val();
  let lname = $("#lname").val();
  let email = $("#email").val();
  let number = $("#number").val();
  let password = $("#rpassword").val();
  let status = 0;
  let languageAndGenre = [];

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
  let i = 0;
  let username = $('#username').val();
  let password = $('#password').val();
  let loginAttempt = 0;
  if (localStorage.length == 0) {
    alert("No entries in local storage");
  } else {
    for (i = 0; i < localStorage.length; i++) {
      let itemkey = localStorage.key(i);
      let values = localStorage.getItem(itemkey);

      values = JSON.parse(values);

      //check if both username and password match
      if ((username == values.email || username == values.number) && (password == values.password)) {
        event.preventDefault();
        localStorage.setItem('currentUser', itemkey);
        values.status = 1;
        localStorage.setItem(itemkey, JSON.stringify(values));
        loginAttempt++;
      }
    }

    if (loginAttempt > 0) {
      event.preventDefault();
      return window.open('./language_selection.html', '_self');
    } 
    else {
      alert("Invalid Credentials");
    }
  }
}

//  guest user
function guestUser() {
  let curruser = localStorage.getItem("currentUser");
  let currUser=0;
  localStorage.setItem('currentUser',currUser);
}