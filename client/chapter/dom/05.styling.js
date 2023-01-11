/* ---------------------------------------------------------------------- */
/* DOM Styling                                                            */
/* ---------------------------------------------------------------------- */

const first = getNode('.first');

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

/* 수업 때 @ ------------------------------------------------------------------------------- */
// console.log(first.className); //first
// console.log(first.className = 'hola'); //hola

// first.classList.add('hello'); //hello 추가
// first.classList.remove('hello'); //hello 삭제
//first.classList.toggle('hello'); //hello 있으면 -> 삭제, 없으면 -> 추가
// console.log(first.classList.contains('hello')); // first클래스의 포함여부
/*수업 때 @------------------------------------------------------------------------------- */



// addClass('.first','hi');
// removeClass('.first', 'hi');
//togleClass('.first', 'is-active')
/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

first.style.backgroundColor = 'red';

console.log(first.style.fontSize);

/* 계산된 스타일 읽기 ------------------------------------------------------- */

let size = getComputedStyle(first).fontSize;
console.log(size);

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`