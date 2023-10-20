import { reviewData } from "../public/icons/collections.js";

function createReviewCard(data) {
  var scrollBarContainer = document.querySelector(
    ".reviews__scroll-bar--container"
  );

  if (scrollBarContainer) {
    var cardContainer = document.createElement("div");
    cardContainer.className = "card-container";

    var imageContainer = document.createElement("div");
    imageContainer.className = "image-container";
    cardContainer.appendChild(imageContainer);

    var img = document.createElement("img");
    img.src = data.icon;
    img.className = "reviews__scroll-bar--container--card--img";
    imageContainer.appendChild(img);

    var textContainer = document.createElement("div");
    textContainer.className = "text-container";
    imageContainer.appendChild(textContainer);

    var nameP = document.createElement("p");
    nameP.textContent = data.name;
    nameP.className = "reviews__scroll-bar--container--card--p1";
    textContainer.appendChild(nameP);

    var locationP = document.createElement("p");
    locationP.textContent = data.location;
    locationP.className = "reviews__scroll-bar--container--card--p2";
    textContainer.appendChild(locationP);

    var reviewContainer = document.createElement("div");
    reviewContainer.className = "review-container";
    cardContainer.appendChild(reviewContainer);

    var reviewP = document.createElement("p");
    reviewP.textContent = data.review;
    reviewP.className = "reviews__scroll-bar--container--card--p3";
    reviewContainer.appendChild(reviewP);

    scrollBarContainer.appendChild(cardContainer);
  } else {
    console.log('Элемент с классом "reviews__scroll-bar--container" не найден');
  }
}

reviewData.forEach(function (data) {
  createReviewCard(data);
});
