/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */


/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
console.log(null);


// 2. 값이 할당되지 않은 상태
console.log(undefined);
console.log(typeof undefined);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const myName = "sungeun";
console.log("hello i'm " + myName);
console.log('hi i am ' + myName);
console.log(`hello i am ${myName}`);

let message = `안녕 내 이름은 sungeun 이야`;
console.log("안녕 내 이름은 " +myName + " 이야");
console.log(`안녕 내 이름은 ${myName} 이야`);

// 4. 정수, 부동 소수점 숫자(길이 제약)
let number = 100.123;
console.log('number :', typeof number);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
console.log(12354n+1234n);
console.log(typeof 12354n);

// 6. 참(true, yes) 또는 거짓(false, no)
console.log(typeof true);
console.log(typeof false);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.log({});
console.log(typeof {});

// 8. 고유한 식별자(unique identifier) Symbol
console.log(Symbol('speciaaaal'));
console.log(typeof Symbol('uid'));





/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */
// 1) 연산자 typeof

// 2) 함수 typeof()
console.log(typeof(12));
console.log(typeof('바보'));
console.log(typeof(19532048n));

// 언어 상, 오류
console.log(typeof Math);
console.log(typeof null);



// Object
/* key와 value */
//const user = new Object();

//객체 리터럴 {lightgrey}
const user = {
  name: 'sungeun',
  age: 25
};

// Array
/* value값들의 나열 */
//let list = new Array();

//배열 리터럴{skyblue}
let list = [10, 100, 1000, 1, 2, 3];

// function
function sum(a,b){
  return a+b
}
console.log( sum(2,3) );




