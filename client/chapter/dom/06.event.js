/* ---------------------------------------------------------------------- */
/* Event Handling                                                         */
/* ---------------------------------------------------------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])

/* 이벤트 추가/제거 --------------------------------------------------------- */

const first = getNode(".first");
const ground = getNode(".ground");
const ball = getNode(".ball");


function handler() {
  console.log("hit!");

  //css('.second','display', 'none');
}
first.addEventListener('click',handler);

// first.addEventListener("click", handler);


//축구공
ground.addEventListener('click', function(e){
  console.log(e.offsetX,e.offsetY);

  ball.style.transform = `translate(${e.offsetX - ball.offsetWidth / 2}px, ${e.offsetY- ball.offsetHeight / 2}px)`;
})








//bindEvent
/* const off=bindEvent('.first','click',handler);
//이벤트를 실행시키고 이벤트 off
bindEvent('.second','click',off);
 */


// - addEventListener
// - removeEventListener
