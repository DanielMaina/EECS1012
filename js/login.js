const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function login() {
  event.preventDefault();
  var username = document.getElementById("Username").value;
  var password = document.getElementById("Password").value;
  if (username === "NelsonXue" && password === "123456") {
    window.location.href = "dashboard.html";
  } else if (username === "DanMaina" && password === "abcdefg") {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("message").innerHTML = "The account does not exist, please try again!";
  }
}