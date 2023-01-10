// h1.insertAdjacentHTML('afterend', template);
function insertBefore(node, text) {
  if (typeof node === "string") {
    node = getNode(node);
  }
  //순서주의 typeof 체크를 먼저하고 해야한다.
  //왜냐하면 위의 if문을 거치지 않으면 node는 그저 string일 뿐이기 때문에  문자에 nodeType 에 아무것도 나오지 않는다.
  if(node.nodeType !== document.ELEMENT_NODE){
    typeError(
      'insertBefore 함수의 첫 번째 인자는 ELEMENT 노드여야합니다.'
    );
  }

  return node.insertAdjacentHTML("beforebegin", text);
}

function insertFirst(node, text) {
  if (typeof node === "string") node = getNode(node);
  if(node.nodeType !== document.ELEMENT_NODE){
    typeError(
      'insertBefore 함수의 첫 번째 인자는 ELEMENT 노드여야합니다.'
    );
  }
  node.insertAdjacentHTML("afterbegin", text);
}

function insertLast(node, text) {
  if (typeof node === "string") node = getNode(node);
  if(node.nodeType !== document.ELEMENT_NODE){
    refError(
      'insertBefore 함수의 첫 번째 인자는 ELEMENT 노드여야합니다.'
    );
  }
  node.insertAdjacentHTML("beforeend", text);
}

function insertAfter(node, text) {
  if (typeof node === "string") node = getNode(node);
  if(node.nodeType !== document.ELEMENT_NODE){
    refError(
      'insertBefore 함수의 첫 번째 인자는 ELEMENT 노드여야합니다.'
    );
  }
  node.insertAdjacentHTML("afterend", text);
}