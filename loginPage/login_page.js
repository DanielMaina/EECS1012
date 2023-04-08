//done by Mahdiyar
function login_page(){
  var username = document.forms["create-account"]["username"].value;
  var password = document.forms["create-account"]["password"].value;
  
  var valid = /\S+@\S+\.\S+/;

  if (username == "") {
    alert("Please enter a username.");
    return false;
  }


  if (password == "") {
    alert("Please enter a password.");
    return false;
  }

  
}