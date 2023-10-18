import { reviewData } from "./collections.js";

function createReviewCard(data) {
  var scrollBarContainer = document.querySelector(".scroll-bar-container");

  if (scrollBarContainer) {
    var card = document.createElement("div");
    card.className = "card";

    var nameP = document.createElement("p");
    nameP.textContent = data.name;
    card.appendChild(nameP);

    var locationP = document.createElement("p");
    locationP.textContent = data.location;
    card.appendChild(locationP);

    var reviewP = document.createElement("p");
    reviewP.textContent = data.review;
    card.appendChild(reviewP);

    scrollBarContainer.appendChild(card);
  } else {
    console.log('Элемент с классом "scroll-bar-container" не найден');
  }
}

reviewData.forEach(function (data) {
  createReviewCard(data);
});
