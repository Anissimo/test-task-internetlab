var input = document.querySelector(".form__input");
input.addEventListener("input", function () {
  if (input.type === "text" && input.value.length <= 20) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else if (input.type === "tel" && /^[0-9]+$/.test(input.value)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
