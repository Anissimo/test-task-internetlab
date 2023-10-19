import { reviewData } from "./collections.js";

function createReviewCard(data) {
  var scrollBarContainer = document.querySelector(
    ".reviews__scroll-bar--container"
  );

  if (scrollBarContainer) {
    var card = document.createElement("div");
    card.className = "reviews__scroll-bar--container--card";

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
    console.log(
      'Элемент с классом "reviews__scroll-bar--container--card" не найден'
    );
  }
}

reviewData.forEach(function (data) {
  createReviewCard(data);
});
