import { qaData, svgPlus } from "./collections.js";

function createQABlock(data) {
  var qaBlock = document.querySelector(".qa-block");

  if (qaBlock) {
    var firstP = document.createElement("p");
    firstP.className = "first-p";
    firstP.textContent = data.firstPText;
    qaBlock.appendChild(firstP);

    var secondP = document.createElement("p");
    secondP.className = "second-p";
    secondP.textContent = data.secondPText;
    qaBlock.appendChild(secondP);

    var svgElement = document.createElement("div");
    svgElement.className = "p-svg";
    svgElement.innerHTML = svgPlus;
    qaBlock.appendChild(svgElement);
  } else {
    console.log('Элемент с классом "qa-block" не найден');
  }
}

qaData.forEach(function (data) {
  createQABlock(data);
});
