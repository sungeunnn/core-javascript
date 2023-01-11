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
