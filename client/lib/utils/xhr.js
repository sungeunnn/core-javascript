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

5 Get을써서 url로 받아온 내용을 객체화시키기(받아온 건 string이기 때문에)
  JSON.parse(xhr.response)

6 POST를 하기위해 서버에 객체인 값을 string화 하여 보내서 요청해야함
  서버에 요청하는 곳(xhr.send)에 JSON.stringfy()로 값을 보내줘야함.

--(5,6은 우리가 쓰려면 객체화, 서버한테 보낼 땐 문자화가 필요하단 것)

7 객체 구조 분해 할당
   xhr은 객첸데, status, readState,response를 사용할때 마다 쓰기 귀찮기 때문에
   const {status, readyState, response} = xhr;

8 인자를 여러개 받아야하니까 객체로 바꾸자  method, url, body -> options
9 객체로 바꾼 인자를 구조분해할당
   const {method, url, body} = options
10 객체로 바꾼 인자를 구조분해할당 할 필요없이 파라미터 자체에 구조분해 할당
    function xhrData({method, url, body}) 
    --> 이렇게 할 경우 초기값설정이 가능하다.

11 setRequestHeader를 통해 값을 설정해줄 수 있다 
   헤더를 리퀘스트할 때 세팅하는 내장함수
    xhr.setRequestHeader(key,value);
12 object의 정보를 key와 value로 분리시켜 배열로 반환시키는 Ojbect.entries 사용하여
   순환시켜 값을 설정한다..?
    Object.entries(headers).forEach(([key,value])=>{ 
      xhr.setRequestHeader(key,value);
    } 

--(11,12 delete할 때 오류날 수 있어서 주석처리함)--

13 통신 성공 시 , onSuccess의 인수로 JSON.parse(response)를 받아 xhrData({})의 onSuccess로 결과를 받아  객체화된 해당 url의 정보를 가져올 수 있다.
    onSuccess(JSON.parse(response)) --> if readystate가 완료 된다면 뒤에 작성
    
    다음처럼 사용
    xhrData({ 
      url: "https://jsonplaceholder.typicode.com/users/1",
      onSuccess: (result) => {
      console.log(result)
    }
  });

14 통신실패 시 onFail  결과를 받아 밖에서 빼 가도록
     onFail("통신 실패"); --> 실패했을 때 else뒤에
     onFail: (err) =>{
    console.log(err)
  }                       --> xhrData에

15 함수지만 객체인  xhrData에게 get, post, put, delete 메서드를 만들어준다
    이 메서들에게는 xhrData 객체에 값을 할당하여 내가 더 편하게 사용할 수 있게 만들어줌

*/

//xhrData
// 8인자를 여러개 받아야하니까 객체로 바꾸자  method, url, body -> options
export function xhrData(
  {
    //10객체로 바꾼 인자를 구조분해할당 할 필요없이 파라미터 자체에 구조분해 할당을 한다.
    url = "",
    method = "GET",
    body = null,
    onSuccess = null,
    onFail = null,
    headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  } = {} /* default 파라미터 객체로 설정 */
) {
  //9객체로 바꾼 인자를 구조분해할당
  // const {method, url, body} = options

  //1js가 가지고 있는 XMLHttpRequest을 xhr에 할당
  const xhr = new XMLHttpRequest();

  //2비동기 통신 오픈
  xhr.open(method, url);

  /* 
  //12 object의 정보를 key와 value로 분리시켜 배열로 반환
  Object.entries(headers).forEach(([key,value])=>{
    // 11 setRequestHeader를 통해 값을 설정해줄 수 있다
    xhr.setRequestHeader(key,value);
    
  }) */

  //4 readystate가 변경됐을 때 이벤트 호출
  //객체 구조 분해 할당
  //xhr은 객첸데, status, readState,response를 사용할때 마다 쓰기 귀찮기 때문에
  xhr.addEventListener("readystatechange", () => {
    //7 xhr 구조 분해 할당
    const { status, readyState, response } = xhr;

    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        //통신 완료 상태에서만 통신 성공을 찍어주기위해
        console.log("통신 성공");

        //13 통신 성공 시 , onSuccess의 인수로 JSON.parse(response)를 받아 xhrData({})
        //의 onSuccess로 결과를 받아 밖으로 빼갈 수 있다.
        onSuccess(JSON.parse(response));

        //5.
        //받아온 내용 확인하려면 xhr.response
        //JSON.parse 는 받아온 자료를 객체화시키는 것 (안쓰면 string임)
        //console.log(JSON.parse(response));
      }
    } else {
      //14 통신실패 시 onFail  결과를 받아 밖에서 빼 가도록
      onFail("통신 실패");
    }
  });

  //3서버에 요청
  //6.객체인 값을 string화 하여 보내줘야함 -> POST를 하기위해 하는 것

  xhr.send(JSON.stringify(body));
}

/* xhrData({ 
  url: "https://jsonplaceholder.typicode.com/user",
  onSuccess: (result) => {
    console.log(result)
  },
  onFail: (err) =>{
    console.log(err)
  }
});
 */

// 15 xhrData(함수지만 객체인)에게 get이라는 메서드를 추가
xhrData.get = (url, onSuccess, onFail) => {
  //xhrData 실행
  xhrData({
    url,
    onSuccess,
    onFail,
  });
};

// 15 xhrData에게 post라는 메서드를 추가
xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "POST",
    body,
    url,
    onSuccess,
    onFail,
  });
};

//15 xhrData에게 put라는 메서드를 추가
xhrData.put = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "PUT",
    url,
    body,
    onSuccess,
    onFail,
  });
};

//xhrData에게 delete라는 메서드를 추가
xhrData.delete = (url, onSuccess, onFail) => {
  xhrData({
    method: "DELETE",
    url,
    onSuccess,
    onFail,
  });
};

/* 
// 15 url , onSuccess, onFail 값들은  위 함수에 할당되어 xhrData의 객체 값에 들어간다
xhrData.get( 
  'https://jsonplaceholder.typicode.com/users/1',
  (res) =>{
    console.log(res);
  },
  (err)=>{
    console.log(err);
  }
) */

/* xhrData("POST", "https://jsonplaceholder.typicode.com/users", {
  name: "kindtiger",
  username: "seonbeom",
  email: "tiger@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
});
 */
