/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */

/* let i = 0;

while (i < 11) {
  console.log(i++);
} */

const frontEndDev = [
  "HTML",
  "CSS",
  "SVG",
  "JavaScript",
  "jQuery",
  "React",
  "Redux",
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

/* console.log(frontEndDev[0]);
console.log(frontEndDev[1]);
console.log(frontEndDev[2]);
console.log(frontEndDev[3]);
console.log(frontEndDev[4]);
console.log(frontEndDev[5]); */

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)
let i = 0;
while (i < frontEndDev.length) {
  console.log(frontEndDev[i]);
  i++;
}

// while 문 (역순환 : 역방향) {lightgrey,19}
let a = frontEndDev.length-1;
console.log(a);
 while ( 0 <= a ){
  console.log(frontEndDev[a]);
  --a;
} 

console.log("역순환 pop 사용")

let copyArray = frontEndDev.slice(); //frontEndDev 전체를 잘라왔단 의미
console.log(frontEndDev);
console.log(copyArray);

while(copyArray.length){
  console.log(copyArray.pop());
}

console.log(frontEndDev);
console.log(copyArray);//pop을 사용했기 때문에 소실

// 성능 진단 : 순환 vs. 역순환
//performance