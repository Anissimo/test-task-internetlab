import { qaData, svgPlus } from "./collections.js";

function createQABlock(data) {
  var qaBlock = document.querySelector(".q-n-a__block");

  if (qaBlock) {
    var firstP = document.createElement("p");
    firstP.className = "q-n-a__block--text1";
    firstP.textContent = data.firstPText;
    qaBlock.appendChild(firstP);

    var secondP = document.createElement("p");
    secondP.className = "q-n-a__block--text2";
    secondP.textContent = data.secondPText;
    qaBlock.appendChild(secondP);

    var svgElement = document.createElement("div");
    svgElement.className = "q-n-a__block--p-svg";
    svgElement.innerHTML = svgPlus;
    qaBlock.appendChild(svgElement);
  } else {
    console.log('Элемент с классом "q-n-a__block" не найден');
  }
}

qaData.forEach(function (data) {
  createQABlock(data);
});
