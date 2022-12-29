/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

let age = prompt("나이를 입력하세요", Number(""));

if (age >= 14 && age <= 90) {
  console.log("팔팔한 청춘이군요");
} else {
  console.log(" 해당 나이가 아닙니다.");
}

let a = 10;
let b = "";
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB= a || b;

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false}; //{thisisFalsy:false}


// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || "" || [2, 3].length || { thisIsFalsy: true }; //2


//로그인 구현하기
let userName = prompt("Who are you?", '');
let correctPassword='1234a';
if(userName.toLowerCase() === "admin"){
  let pw = prompt("Please input your password", '');
  if (pw ===correctPassword) {
    alert("Welcome!");
  }else if(pw === "Cancel"){
    alert("Canceled");
  }else{
    alert("Wrong password!")
  }
}else if(userName ==="Cancel"){
  alert("Canceled");
}else if ( userName === null) {
  alert( '취소되었습니다.' );
}
else{
  alert('누구세요?');
}
