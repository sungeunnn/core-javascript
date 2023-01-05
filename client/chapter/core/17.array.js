/* ---------------------------------------------------------------------- */
/* Array Type                                                             */
/* ---------------------------------------------------------------------- */


// 객체(Object) : 키(key)를 사용해 식별할 수 있는 값을 담은 집합 - `키:값의 집합`
// 배열(Array) : 순서(index)가 있는 집합 - `값의 집합`

// ※ 배열은 특별한 종류의 객체로 대괄호를 사용해 요소에 접근하는 방식은 객체 문법을 사용. 
//   배열은 키(key)가 숫자(index)라는 점이 다름. 즉, 본질은 객체.
//   순서에 따른 제어가 가능하도록 다양한 메서드와 length 프로퍼티를 언어에서 제공.


// 배열 선언
let friends = '일은, 이은, 삼은, 사은, 오은, 육은, 칠은, 팔은, 구은, 십은'.split(',');
let arr = new Array(7,6,5,4,3,2,1);
console.log(friends);
console.log(arr);
//let friends = ['일은','이은','삼은','사은','오은'];

// 배열 요소의 총 갯수
console.log(friends.length);

// 배열 요소 변경
friends[0] ='영은';
console.log(friends);

// 배열 요소 추가
let unshift = friends.unshift('백은');
console.log(friends);

let push = friends.push('천은');
console.log(friends);


// 배열 요소 제거
let shift = friends.shift();
//제거된 요소 반환됨
console.log(shift);

let pop = friends.pop();
console.log(friends);

// 큐(queue) vs. 스택(stack)
// 큐 FIFO (먼저 들어온 것이 먼저 나간다) ← queue ←
// 스택 LIFO (나중에 들어온 것이 먼저 나간다) ↓ stack ↑


// 배열 요소 순환(loop)
// for 문, for ~ of문
for(let value of friends){
  console.log(value);
}



// 배열 복사 -> 참조에 의한 복사
let copiedArray = friends;
console.log(copiedArray);

//진짜 복사
let copiedRealArray = [...friends];
console.log(copiedRealArray);


// 다차원 배열
// 행렬을 저장하는 용도

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// 행렬의 정중앙에 위치한 요소를 찾으려면?
console.log(matrix[1][1]);