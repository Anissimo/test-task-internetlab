document.addEventListener("DOMContentLoaded", function () {
  var nameInput = document.querySelector('input[name="name"]');
  var phoneInput = document.querySelector('input[name="phone"]');

  nameInput.addEventListener("input", function () {
    var errorMessage = this.parentNode.querySelector(".form__input-error");
    if (this.value.length > 10) {
      this.classList.add("invalid");
      this.classList.remove("valid");
      errorMessage.style.display = "block";
    } else if (this.value.length === 0) {
      this.classList.remove("valid", "invalid");
      errorMessage.style.display = "none";
    } else {
      this.classList.remove("invalid");
      this.classList.add("valid");
      errorMessage.style.display = "none";
    }
  });

  phoneInput.addEventListener("input", function () {
    var errorMessage = this.parentNode.querySelector(".form__input-error");
    var nonNumeric = /[^0-9]/g;
    if (this.value.match(nonNumeric)) {
      this.classList.add("invalid");
      this.classList.remove("valid");
      errorMessage.style.display = "block";
    } else if (this.value.length === 0) {
      this.classList.remove("valid", "invalid");
      errorMessage.style.display = "none";
    } else {
      this.classList.remove("invalid");
      this.classList.add("valid");
      errorMessage.style.display = "none";
    }
  });
});
