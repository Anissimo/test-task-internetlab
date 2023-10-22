import { qaData, svgPlus, svgCircle } from "./collections.js";

function createQABlock(data) {
  var qaBlock = document.querySelector(".qna__block");

  if (qaBlock) {
    var container = document.createElement("div");
    container.className = "qna__container";
    qaBlock.appendChild(container);

    var innerContainer = document.createElement("div");
    innerContainer.className = "qna__container-inner";
    container.appendChild(innerContainer);

    var firstP = document.createElement("p");
    firstP.className = "qna__text1";
    firstP.textContent = data.firstPText;
    innerContainer.appendChild(firstP);

    if (data.secondPText.trim() !== "") {
      var secondP = document.createElement("p");
      secondP.className = "qna__block-text2";
      secondP.textContent = data.secondPText;
      innerContainer.appendChild(secondP);
    }

    var svgContainer = document.createElement("div");
    svgContainer.className = "qna__svg-container";
    container.appendChild(svgContainer);

    var svgElementPlus = document.createElement("div");
    svgElementPlus.className = "qna__block-svg-plus";
    svgElementPlus.innerHTML = svgPlus;
    svgContainer.appendChild(svgElementPlus);

    var svgElementCircle = document.createElement("div");
    svgElementCircle.className = "qna__block-svg-circle";
    svgElementCircle.innerHTML = svgCircle;
    svgContainer.appendChild(svgElementCircle);
  } else {
    console.log('Элемент с классом "qna__block" не найден');
  }
}

qaData.forEach(function (data) {
  createQABlock(data);
});
