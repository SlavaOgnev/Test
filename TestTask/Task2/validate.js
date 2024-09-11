document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#form");

  const phonePattern = /^\+?[0-9\s\-()]{10,15}$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  form.addEventListener("submit", function (event) {
    clearMessage();
    event.preventDefault();
    let valid = true;

    const nameInput = document.getElementById("name");
    if (nameInput.value.trim() === "") {
      textMessage("Name", "The name field must be filled in");
      valid = false;
    }

    const phoneInput = document.getElementById("phone");
    if (!phonePattern.test(phoneInput.value.trim())) {
      textMessage("Phone", "Phone field entered incorrectly");
      valid = false;
    }

    const emailInput = document.getElementById("email");
    if (!emailPattern.test(emailInput.value.trim())) {
      textMessage("Email", "Email field entered incorrectly");
      valid = false;
    }

    if (valid) {
      clearMessage();
      alert("Form send successfully");
      form.reset();
    }
  });
  function textMessage(field, mess) {
    const erElem = document.getElementById(`error${field}`);
    erElem.textContent = mess;
  }
  function clearMessage() {
    const Errors = document.querySelectorAll(".errorMess");
    Errors.forEach((er) => (er.textContent = ""));
  }
});
