document.addEventListener("DOMContentLoaded", function () {
  var menuItems = document.querySelectorAll(".header__menu--text");

  menuItems.forEach(function (item, index) {
    item.addEventListener("click", function () {
      var target;
      switch (index) {
        case 0:
          target = document.querySelector(".howtowork");
          break;
        case 1:
          target = document.querySelector(".third-block");
          break;
        case 2:
          target = document.querySelector(".qna");
          break;
        case 3:
          target = document.querySelector(".form");
          break;
      }
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
