function validate() {

  let firstPass = document.getElementById("pass1").value;
  let secondPass = document.getElementById("pass2").value;

  if ((firstPass.length < 8) || (secondPass.length < 8)) {
    alert("Password is too short! - Must be 8 characters");
  }
  else if (firstPass != secondPass) {
    alert("Passwords don't match!");
  }
  else {
    alert("Passwords match! :)");
  }
}
