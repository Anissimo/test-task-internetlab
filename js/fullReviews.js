import { fullReviewData } from "./collections.js";

// Функция для создания нового блока отзыва
function createReviewCard(data) {
  var fullReviewsSection = document.querySelector(".full-reviews");

  if (fullReviewsSection) {
    var reviewCard = document.createElement("div");
    reviewCard.className = "review-card";

    var firstP = document.createElement("p");
    firstP.className = "first-p";
    firstP.textContent = data.firstPText;
    reviewCard.appendChild(firstP);

    var secondP = document.createElement("p");
    secondP.className = "second-p";
    secondP.textContent = data.secondPText;
    reviewCard.appendChild(secondP);

    fullReviewsSection.appendChild(reviewCard);
  } else {
    console.log('Элемент с классом "full-reviews" не найден');
  }
}

fullReviewData.forEach(function (data) {
  createReviewCard(data);
});
