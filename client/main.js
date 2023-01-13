/* eslint no-undef:'warn' */
/* eslint no-unused-vars:'off' */

let firstNumber = getNode("#firstNumber");
let secondNumber = getNode("#secondNumber");
let done = getNode("#done");

function getNumberValue(node) {
  if (typeof node === "string") node = getNode(node);
  if (node.tagName !== "INPUT")
    refError("getInputValue 함수는 INPUT 요소만 허용합니다.");
  return node.value;
}

const sum = (valueA, valueB) => valueA + valueB;

function clearContents(node) {
  if (typeof node === "string") node = getNode(node);
  node.textContent = "";
}

function handler(e) {
  e.preventDefault();

  let firstValue = +getNumberValue(firstNumber);
  let secondValue = +getNumberValue(secondNumber);
  let total = sum(firstValue, secondValue);

  clearContents(".result");
  insertLast(".result", total);
}

done.addEventListener("click", handler);
