function getAttr(node,prop){
  if(typeof node === 'string'){
    node = getNode(node);
  }
  return node.getAttribute(prop);
}

// - elementNode.dataset
//set함수 만들기
// set은 속성을 추가하고, 값을 넣기
function setAttr(node, prop, value){
  if(typeof node == 'string') node = getNode(node);
  if(typeof prop !== 'string') throw new TypeError('setAttr 함수의 두번째 인자는 문자 타입 입니다.');
  
  if(prop.includes('data')){
    let rest = prop.slice(5);
    node.dataset[rest] = value;
  }
  if(!value) throw new SyntaxError('setAttr 함수의 세번 째 인자는 필수 값 입니다.')

  //함수를 통해 무엇을 얻고자 하는게 아니기 때문에 return을 쓰지 않아도 된다.
  node.setAttribute(prop, value);
}



//get,set을 모두 사용하는 함수
function attr(node, prop, value){
  //get
  if(!value){
    return getAttr(node,prop);
  } else{
    setAttr(node,prop,value);
  }
  //return !value? getAttr(node,porp) : setAttr(node,prop,value);
}