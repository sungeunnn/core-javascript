//06event.js

function bindEvent(node,type,handler){
  if(typeof node == 'string') node = getNode(node);

  //하나라도 있으면 true, 정규표현식 test
  if(!(/mouseenter|click|mousemove|mouseleave/g.test(type))){
    typeError('bindEvent 함수의 두 번째 인자는 유효한 이벤트 타입 이어야 합니다.')
  }
  node.addEventListener(type, handler);

  return () => node.removeEventListener(type,handler);
}