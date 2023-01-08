/* ---------------------------------------------------------------------- */
/* DOM traversal                                                          */
/* ---------------------------------------------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

// let first = document.querySelector(".first");

let [fir, sec] = document.querySelectorAll("span");

function getNode(object) {
  return document.querySelector(object);
}

console.log(getNode(".first"));

/* 문서 대상 확인 */

// - matches
// 선택자 안에 class||id 를 가지고 있는 대상이 있어?

console.log(getNode(".first").matches(".first")); //true
console.log(getNode(".first").matches(".second")); //false

// - contains
// 선택자의 자식들 중에 해당 element 있어?

console.log(getNode("h1").contains(getNode(".first"))); //true;
console.log(getNode("h1").contains(getNode(".second"))); //true;
console.log(getNode("h1").contains(getNode(".third"))); //false;
