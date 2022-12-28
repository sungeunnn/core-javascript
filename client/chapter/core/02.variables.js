/* --------------------------------------------------------------------- */
/* Variables                                                             */
/* --------------------------------------------------------------------- */

/* eslint no-unused-vars: 0 */
let admin;
let name;

name = 'John';

admin = name;
console.log(admin);


const ourPlanetName = "Earth";
let currentUserName ;

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

// - 갯수 별 상품 가격 계산하기
let calcProductQuantity;
// - 구매 제품 가격의 총 합
let sumProductPrice;
// - 1년 기준 일(day)자 수
const DAYS_PER_YEAR = 365;
// - 구매 결제 여부
let isPaid;
// - 구매 결제 내역
let historyPaid;
// - 브랜드 접두사
const BRAND_PRE = 'NIKE';
// - 오늘의 운세
let luckOfDay;
// - 상품 정보
// 받은 상품정보를 입력하는 경우{lightsalmon, 1}
const productInfo = '';

// 상품정보를 입력해서 뿌리는 경우 {lightyellow, 1}
let productInfo;
/* variables ----------------------------------------------------------- */


/* constant variables -------------------------------------------------- */

//Redux ---------------------------------------------------------{lightpink}
/*
panding 아무것도 안함
loading 로딩중, 요청 대기
fullfilled, resolved 응답 성공
rejected 실패
 */
const PANDING='api/panding';
const LOADING ='api/loading';
const FULFILLED ='api/fulfilled';
const REJECTED ='api/rejected';


/* Lexical
Environment --------------------------------------------------------------*/
// Temporal Dead Zone (임시 사각 지역)