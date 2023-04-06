//done by Mahdiyar
function login_info() {
    var username = document.forms["login.info"]["username"].value;
    var password = document.forms["create-account"]["password"].value;

    var validUsername = "123456";

    if (username == "") {
      alert("Please enter a username.");
      return false;
    }


    if (password == "") {
      alert("Please enter a password.");
      return false;
    }

    
}