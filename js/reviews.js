import { reviewData } from "./collections.js";

function createReviewCard(data) {
  var scrollBarContainer = document.querySelector(
    ".reviews__scroll-bar--container"
  );

  if (scrollBarContainer) {
    var card = document.createElement("div");
    card.className = "card";

    var imgContainer = document.createElement("div");
    imgContainer.className = "img-container";
    card.appendChild(imgContainer);

    var img = document.createElement("img");
    img.src = data.icon;
    img.className = "card-img";
    imgContainer.appendChild(img);

    var textContainer = document.createElement("div");
    textContainer.className = "text-container";
    imgContainer.appendChild(textContainer);

    var nameP = document.createElement("p");
    nameP.textContent = data.name;
    nameP.className = "card-name";
    textContainer.appendChild(nameP);

    var locationP = document.createElement("p");
    locationP.textContent = data.location;
    locationP.className = "card-location";
    textContainer.appendChild(locationP);

    var reviewContainer = document.createElement("div");
    reviewContainer.className = "review-container";
    card.appendChild(reviewContainer);

    var reviewP = document.createElement("p");
    reviewP.textContent = data.review;
    reviewP.className = "card-review";
    reviewContainer.appendChild(reviewP);

    scrollBarContainer.appendChild(card);
  } else {
    console.log('Элемент с классом "reviews__scroll-bar--container" не найден');
  }
}

document.addEventListener("DOMContentLoaded", function () {
  reviewData.forEach(function (data) {
    createReviewCard(data);
  });
});
