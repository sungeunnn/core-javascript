/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


let message = 'Less is more.';


// length 프로퍼티
let stringTotalLength = message.length;
console.log('stringTotalLength : ',stringTotalLength);


// 특정 인덱스의 글자 추출
let extractCharacter = message[0];
console.log('extractCharacter : ',extractCharacter);


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;


// 부분 문자열 추출

//slice => 시작인덱스 <= "문자열"  < 끝 인덱스
//slice(담고싶은 첫문자-1 index, 담고싶은 끝문자 index)
//-1은 뒤에서부터 세는 것
let slice = message.slice(2,8);
console.log('slice : ',slice);


let subString = message.substring(0,3);
console.log('subString : ', subString);



// 문자열 포함 여부 확인

//indexOf => 없으면 -1 반환, 해당 문자 여러개 들어있음 가장 앞에 있는 인덱스 반환
let indexOf = message.indexOf('q');
console.log('indexOf : ', indexOf);


let  lastIndexOf = message.lastIndexOf('i');
console.log('lastIndexOf : ', lastIndexOf);


let includes = message.includes('Less');
console.log('includes : ', includes);

//첫글자에 있어?
let startsWith = message.startsWith('L');
console.log('startsWith : ', startsWith);

//끝글자에 있어?
let endsWith = message.endsWith('.');
console.log('endsWith : ',endsWith);


// 공백 잘라내기
let trimLeft = message.trimLeft();
console.log('trimLeft : ', trimLeft);


let trimRight=message.trimRight();
console.log('trimRight :', trimRight);


let trim = message.trim();
console.log('trim :', trim);

//띄어쓰기 없애기 -> 정규표현식이용
let replace = message.replace(/\s*/g, '');


// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat : ', repeat);



// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase : ',toLowerCase);
let toUpperCase = message.toUpperCase();
console.log('toUpperCase : ' ,toUpperCase);


// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}


//텍스트 잘라내기 유틸리티 함수
function truncate(text, limit = 100, ellipsis = '...') {
  return `${text.slice(0, limit).trim()}${ellipsis}`;
}