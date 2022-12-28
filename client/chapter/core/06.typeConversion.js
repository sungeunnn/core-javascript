/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number {lightyellow, 6}
const YEAR = 2022;

//number -> '2022'
console.log(typeof String(YEAR));
//number -> true
console.log(typeof Boolean(YEAR));

// undefined, null {lightgreen, 5}

//undefined -> 'undefined'
console.log(typeof String(undefined));
//null -> 'null'
console.log(typeof String(null));

// boolean{lightsalmon}
//boolean -> 'ture' or 'false'
let isKind = true;
console.log(typeof String(isKind));
// boolean에 + ' ' 를 붙이면 String() 없이도 문자형으로 변환이 가능하다.
console.log(typeof (isKind + '')) ;

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed

// undefined -> NaN
console.log(typeof Number(undefined));

// null
// null -> 0
let money = null;
console.log(typeof Number(money));

// boolean
let cutie = true;

//true -> 1 Number() 없이도 수학연산자 사용 시 숫자형으로 변환 가능 {lightgrey}
console.log(typeof (cutie * 1));
console.log(+cutie);


// string
// 공백을 다 없애고 숫자형으로 변환
let num='  123  ';
console.log(num * 1);

// numeric string
let width='32.0568000px';

// parseInt 정수값만 가져오는 것 , 10은 10진수를 의미함
console.log(width);
console.log(parseInt(width,10));
console.log(parseFloat(width,10));

/* 데이터 → 불리언 ---------------------------------------------------------- */
// null, undefined, 0, NaN, ''
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(" "));

// Boolean없이도 !!로 Boolean형 변환 가능 {lightgrey}
console.log(!! ' ');
console.log(!!'ih');
console.log(!!NaN);

// 위에 나열한 것 이외의 것들 
console.log(Boolean("0"));