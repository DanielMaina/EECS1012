function validateForm(){
    var username = document.forms["create-account"]["username"].value;
    var email = document.forms["create-account"]["email"].value;
    var password = document.forms["create-account"]["password"].value;
    var confirmPassword = document.forms["create-account"]["confirm-password"].value;

    var valid = /\S+@\S+\.\S+/;

    if (username == "") {
      alert("Please enter a username.");
      return false;
    }

    if (email == "" || email != valid) {
      alert("Please enter an email address.");
      return false;
    }

    // if (email == "") {
    //   alert("Please enter an email address.");
    //   return false;
    // }

    if (password == "") {
      alert("Please enter a password.");
      return false;
    }

    if (password != confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
}