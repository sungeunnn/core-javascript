import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./typeOf.js";



const first = getNode('.first');

// console.log(first);


function delay(callback,timeout = 1000){

  setTimeout(callback,timeout);

}

/* 
delay(()=>{
  first.style.top = '-100px';
  delay(()=>{
    first.style.transform = "rotate(360deg)";
    delay(()=>{
      first.style.top = '0px';
    })
  })
}) */

/* 
delayP()
.then(()=>{
  first.style.top = '-100px';
  return delayP()
})
.then(()=>{
  first.style.transform = "rotate(360deg)";
  return delayP()
})
.then(()=>{
  first.style.top = '0px';
}) */


/* 
//promise
function delayP(shouldReject = false, timeout = 2000,data='성공', errorMessage = '알 수 없는 오류가 발생했습니다.'){
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      !shouldReject ? resolve(console.log(data)) : reject(errorMessage)
    }, timeout);
  })
}
  */
/* delayP()
.then(res=> console.log(res))
.catch(err=> console.log(err)); */

/* delayP(false, 1000, '💫성공' ,'💥오류').then((res)=>{
  console.log(res);
})
 */





/* 
  계속 매개변수를 적어주기 힘드니까 객체를 만들어서 처리
  원하는 값만 던져서 원하는 결과만 얻고 싶다(모든 인자 쓸 필요 없이)
  1 객체만들기
   const defaultOptions = {
    shouldReject: false,
    timeout: 1000,
    data:'💫성공',
    errorMessage:'💥오류',
    }

  2 전개 연산을 이용해 defaultOptions 통으로 복사 (얕은복사)
    let config = {...defaultOptions};
  
  3 기존의 값이랑 (defaultOptions) , options 값이랑 섞어줌 -> 객체합성 mixin
    즉, 기존 값 받은거에 options로 받은 값을 합성해! 내가 원하는거 넣을거야!!!
    순서가 중요
    config = {...config, ...options};

    결과  : data 값만 바꾼 것
    delayP({data:'안녕🖐',
    }).then((res)=>{
    console.log(res);
    })  
    // 안녕🖐 이 콘솔에 출력된다

  4 delayP에 매개변수가 숫자이면 timeout에 값을 넣어줘 
      if(isNumber(options)){
       config.timeout = options;
      }
  
  5  delayP 매개변수에 객체가 들어온거 맞으면 객체 합성시켜줘
    if (isObject(options)){
        config = {...config, ...options};
     }



 */



//1 객체 만들기
const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data:'💫성공',
  errorMessage:'💥오류',
}


function delayP(options = {}){

  //2 전개 연산을 이용해 defaultOptions 통으로 복사
  let config = {...defaultOptions};

  //4 delayP에 매개변수가 숫자이면 timeout에 값을 넣어줘 
  if(isNumber(options)){
    config.timeout = options;
  }

  //5 delayP 매개변수에 객체가 들어온거 맞으면 객체 합성시켜줘
  if (isObject(options)){
    //3 객체 합성 mixin
    config = {...config, ...options};
  }


  const {shouldReject, data,errorMessage,timeout} = config;

  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage)
    }, timeout);
  })
}
 
/* delayP()
.then(res=> console.log(res))
.catch(err=> console.log(err)); */

//data 값만 바꾼 것
/* delayP({data:'안녕🖐',
}).then((res)=>{
  console.log(res);
})
 */

/* delayP(3000).then((res)=>{
  console.log(res);
})
 */







/* async await  */ 
/* 
 함수 앞에 async를 붙이면 결과값이 return 될 때 promise 내부프러퍼티와 같이 값이 반환 된다
 async : 일반 함수를  promise 를 반환하는 함수로 만든다

 await 을 사용하면 결과 값이 담긴다.
await 1) promise가 반환하는 result 가져오기
      2) 코드 실행 흐름 제어 (기다려) --> ⭐ 원치않는 에러가 발생하는 걸 막아줄 수 있다
     

즉, async //promise 내부 프로퍼티 형식 resolve() =[[fulfilled]], reject() = [[ rejected ]] 
    await 은 결과 값 (result value === result()의 return 값)  

async - await 패턴을 사용하는 경우엔 reject는 정의가 안되어 있으니까 try catch를 사용
 */


async function delayA(){
  return '⭐완료'
}

let result = delayA();

// console.log(result);


//라면끓이기 함수로 await 동작 체감
async function 라면끓이기(){
 try{
  await delayP()
  console.log('물넣기');
  
  await delayP()
  console.log('스프넣기');

  await delayP()
  console.log('면넣기');

  await delayP()
  console.log('계란넣기');

  // throw new Error('계란 껍질 들어감');


  await delayP()
  console.log('그릇담기');
  console.log('완성')

 } catch(err){
  console.log(err);
 }
}

// 라면끓이기()