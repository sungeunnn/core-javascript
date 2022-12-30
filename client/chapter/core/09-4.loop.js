/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */

const javaScript = {
  creator: "Brendan Eich",
  createAt: "1995.05",
  standardName: "ECMAScript",
  currentVersion: 2022,
  hasOwnProperty: function () {
    return " ";
  },
};

let key = "valueOf";
// console.log(key in javaScript);

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

//js자체에서 hasOwnProperty() 함수를 보호해주지않는다{lightgrey}
//prototype 껴서 사용해야한다.
// console.log(javaScript.hasOwnProperty(key));
Object.prototype.nickName = "tiger";

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

console.log(Object.prototype.hasOwnProperty.call(javaScript, key));

//let a = {} {skyblue, 9}
// if({}.hashOwnProperty.call(javaScript, key)) 도 아래의 if 문 조건과 같다.

for (let key in javaScript) {
  // console.log(key);

  if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
    console.log(key);
  }
}

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?
