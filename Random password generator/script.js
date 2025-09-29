function generate() {
  let length = document.getElementById("length").value;


  let chars = "";

  if (document.getElementById("uppercase").checked) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (document.getElementById("lowercase").checked) {
    chars += "abcdefghijklmnopqrstuvwxyz";
  }
  if (document.getElementById("numbers").checked) {
    chars += "0123456789";
  }
  if (document.getElementById("symbols").checked) {
    chars += "!@#$%^&*()_+[]{}<>?/|";
  }

  if (chars === "") {
    alert("Please select at least one character type.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  document.getElementById("password").innerText = password;
}

function copyPassword() {
  let password = document.getElementById("password").innerText;

  if (!password || password === "Your password will appear here") {
    alert("Nothing to copy!");
    return;
  }

  navigator.clipboard.writeText(password);
  alert("Password copied to clipboard!");
}


document.getElementById("length").value = 8;
document.getElementById("length").disabled = true;


window.onload = () => {
  const lengthInput = document.getElementById("length");
  lengthInput.value = 8;
  lengthInput.disabled = true; 
};
