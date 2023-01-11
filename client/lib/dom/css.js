/* 05.styling.js  */


function addClass(node,className){
  if(typeof node === 'string'){
    node = getNode(node);
  }

  if(typeof className !== 'string'){
    typeError('addClass 함수의 두 번째 인자는 문자 타입입니다.')
  }
  
  return node.classList.add(className);
}

function removeClass(node,className){
  if(typeof node === 'string'){
    node = getNode(node);
  }

  if(!className){
    node.className='';
    return
  }
  if(typeof className !== 'string'){
    typeError('removeClass 함수의 두 번째 인자는 문자 타입입니다.');
  }

  // if(node.classList.contains(className)!==true){
  //   typeError('유효하지 않은 값입니다')
  // }
  node.classList.remove(className);
}

function togleClass(node,className){
  if(typeof node === 'string') node=getNode(node);
  if(typeof className !== 'string'){
    typeError('removeClass 함수의 두 번째 인자는 문자 타입입니다.');
  }

  node.classList.toggle(className)
}

//자바스크립트에선 객체의 key, value 값을 변수로 받기 위해서는 . 사용x
//[]각괄호 표기법
function getCss(node, prop){
  if(typeof node === 'string'){
    node = getNode(node);
  }
  if(!(prop in document.body.style)){
    syntaxError('getCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다')
  }
  return getComputedStyle(node)[prop];
}

function setCss(node,prop,value){
  if(typeof node === 'string'){
    node = getNode(node);
  }
  if(!(prop in document.body.style)){
    syntaxError('getCSS 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다')
  }
  if(!value){
    syntaxError('setCSS 함수의 세 번째 인자는 필수 값 입니다.')
  }
  node.style[prop]=value;
}
const css = (node,prop,value) => {
  return !value? getCss(node,prop): setCss(node,prop,value)}