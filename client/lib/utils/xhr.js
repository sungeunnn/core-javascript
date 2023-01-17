
/* 
xml http reqeust : x h r 
1 js가 가지고 있는 XMLHttpRequest을 xhr에 할당
  const xhr = new XMLHttpRequest();
    xhr의 status는 HTTP 상태 코드 
    - 1xx(정보) :요청을 받았으며 프로세스를 계속 진행합니다.
    - 2xx(성공) :요청을 성공적으로 받았으며 인식했고 수용하였습니다.
    - 3xx(리다이렉션) :요청 완료를 위해 추가 작업 조치가 필요합니다.
    - 4xx(클라이언트 오류) :요청의 문법이 잘못되었거나 요청을 처리할 수 없습니다.
    - 5xx(서버 오류) :서버가 명백히 유효한 요청에 대한 충족을 실패했습니다.
2 비동기 통신 오픈
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
3 서버에 요청
  xhr.send();

--(2,3은 세트)--
4 readystate가 변경됐을 때 이벤트 호출
  0: uninitalized   초기화
  1: loading   로딩
  2: loaded   로딩완료
  3:interactive   작동중
  4: complete   완료

*/

//xhrData
function xhrData(method,url){

  //1js가 가지고 있는 XMLHttpRequest을 xhr에 할당
  const xhr = new XMLHttpRequest();
  
  
  //2비동기 통신 오픈
  xhr.open(method, url)
  
  //4 readystate가 변경됐을 때 이벤트 호출 
  xhr.addEventListener('readystatechange', ()=>{
    if(xhr.status >= 200 && xhr.status<400){
      if(xhr.readyState === 4){ //통신 완료 상태에서만 통신 성공을 찍어주기위해
        console.log('통신 성공');
      }
    }else{
      console.error('통신 실패');
    }
  
  
  })
  
  //3서버에 요청
  xhr.send();

}

xhrData('Get', 'https://jsonplaceholder.typicode.com/users')













