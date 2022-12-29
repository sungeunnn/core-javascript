/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

/* let number =prompt("숫자를 입력해주세요", 1);

if(number > 0){
  console.log('1');
}else if (number<0){
  console.log('-1');
}else if(number == 0){
  console.log('0');
}else{
  console.log("?! 뚀잉");
} */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = prompt("영화봤니?",'yes or no');

// 영화 볼거니?
let goingToWatchMovie = prompt("영화볼거니?", 'yes or no');


// if 문(statement)
//.includes()은 ()의 안에 단어가 들어가있는지 유무를 판단한다.
/* if (didWatchMovie.includes('yes')){
  console.log("영화 어땠어?");
}// else if 복수 조건 처리
else if (goingToWatchMovie === 'yes'){
  console.log("같이볼래?");
}// else 절(caluse)
else{
  console.log("잘못입력했습니다.");
} */


// 조건부 연산자 
// 멀티 조건부 연산자 식
(didWatchMovie.includes('yes'))?console.log("영화 어땠어?"):
(goingToWatchMovie === 'yes')?console.log("같이볼래?"):
console.log("잘못입력했습니다.");
/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

/* let number =prompt("숫자를 입력해주세요", 1);

if(number > 0){
  console.log('1');
}else if (number<0){
  console.log('-1');
}else if(number == 0){
  console.log('0');
}else{
  console.log("?! 뚀잉");
} */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = prompt("영화봤니?",'yes or no');

// 영화 볼거니?
let goingToWatchMovie = prompt("영화볼거니?", 'yes or no');


// if 문(statement)
//.includes()은 ()의 안에 단어가 들어가있는지 유무를 판단한다.
/* if (didWatchMovie.includes('yes')){
  console.log("영화 어땠어?");
}// else if 복수 조건 처리
else if (goingToWatchMovie === 'yes'){
  console.log("같이볼래?");
}// else 절(caluse)
else{
  console.log("잘못입력했습니다.");
} */


// 조건부 연산자 
// 멀티 조건부 연산자 식
(didWatchMovie.includes('yes'))?console.log("영화 어땠어?"):
(goingToWatchMovie === 'yes')?console.log("같이볼래?"):
console.log("잘못입력했습니다.");
