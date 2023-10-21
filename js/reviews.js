import { reviewData } from "./collections.js";

let currentIndex = 0; // начальный индекс для отображения карточек
const cardsToShow = 3; // количество активных карточек

function createReviewCard(data) {
  var cardsContainer = document.querySelector(".reviews__cards");

  if (cardsContainer) {
    var card = document.createElement("div");
    card.className = "card";
    card.style.display = "none"; // по умолчанию все карточки скрыты

    var imgWrap = document.createElement("div");
    imgWrap.className = "card__img-wrap";
    card.appendChild(imgWrap);

    var img = document.createElement("img");
    img.src = data.icon;
    img.className = "card__img";
    imgWrap.appendChild(img);

    var textWrap = document.createElement("div");
    textWrap.className = "card__text-wrap";
    imgWrap.appendChild(textWrap);

    var nameP = document.createElement("p");
    nameP.textContent = data.name;
    nameP.className = "card__name";
    textWrap.appendChild(nameP);

    var locP = document.createElement("p");
    locP.textContent = data.location;
    locP.className = "card__loc";
    textWrap.appendChild(locP);

    var reviewWrap = document.createElement("div");
    reviewWrap.className = "card__review-wrap";
    card.appendChild(reviewWrap);

    var reviewP = document.createElement("p");
    reviewP.textContent = data.review;
    reviewP.className = "card__review";
    reviewWrap.appendChild(reviewP);

    cardsContainer.appendChild(card);
  } else {
    console.log('Элемент с классом "reviews__cards" не найден');
  }
}

// функция для обновления видимости карточек
function updateCardVisibility() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    if (index >= currentIndex && index < currentIndex + cardsToShow) {
      card.style.display = "flex";
      card.style.animation = "slide-in 2s forwards";
    } else {
      card.style.display = "none";
    }
  });
}

// функция для обновления цвета кружков
function updateCircles() {
  const circles = document.querySelectorAll("svg circle");
  circles.forEach((circle, index) => {
    if (
      index ===
      Math.floor((currentIndex + Math.floor(cardsToShow / 2)) / cardsToShow)
    ) {
      circle.setAttribute("fill", "#2A6CEA");
    } else {
      circle.setAttribute("fill", "#C2C8CD");
    }
  });
}

// функция для создания кружков
function createCircles() {
  const svg = document.querySelector("svg");
  const numberOfCircles = Math.ceil(reviewData.length / cardsToShow);

  for (let i = 0; i < numberOfCircles; i++) {
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", `${4 + i * 25}`);
    circle.setAttribute("cy", "4");
    circle.setAttribute("r", "4");
    circle.setAttribute("fill", "#C2C8CD");

    svg.appendChild(circle);
  }
}

// функция для изменения изображения при наведении и нажатии
function changeImageOnHoverAndClick(arrow, normalSrc, activeSrc) {
  arrow.addEventListener("mouseover", function () {
    arrow.src = activeSrc;
  });

  arrow.addEventListener("mouseout", function () {
    arrow.src = normalSrc;
  });

  arrow.addEventListener("mousedown", function () {
    arrow.src = activeSrc;
  });

  arrow.addEventListener("mouseup", function () {
    arrow.src = normalSrc;
  });
}

// обработчики событий для кнопок
const leftArrowElement = document.querySelector(".fi-sr-angle-left");
leftArrowElement.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = reviewData.length - cardsToShow;
  }

  updateCardVisibility();
  updateCircles();
});

const rightArrowElement = document.querySelector(".fi-sr-angle-right");
rightArrowElement.addEventListener("click", () => {
  if (currentIndex < reviewData.length - cardsToShow) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }

  updateCardVisibility();
  updateCircles();
});

// применяем функцию к обоим стрелкам
changeImageOnHoverAndClick(
  leftArrowElement,
  "./public/icons/fi-sr-angle-left.svg",
  "./public/icons/fi-sr-angle-left-active.svg"
);
changeImageOnHoverAndClick(
  rightArrowElement,
  "./public/icons/fi-sr-angle-right.svg",
  "./public/icons/fi-sr-angle-right-active.svg"
);

// вызов функции при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
  reviewData.forEach(function (data) {
    createReviewCard(data);
  });

  createCircles(); // создаем кружки
  updateCardVisibility(); // обновляем видимость карточек после их создания
  updateCircles(); // обновляем цвета кружков после создания карточек
});
