import { insertLast, xhrData, xhrPromise } from "./lib/index.js";

/* xhrData.get(
  'https://jsonplaceholder.typicode.com/users/1',
  (res) => {
    //화면에 뿌려줌
    insertLast('body', JSON.stringify(res))
  },
  (err) => {
    //화면에 뿌려줌
    insertLast('body','데이터 로딩에 실패했습니다.')
  }
) */


/* xhrPromise
.get('https://jsonplaceholder.typicode.com/users/1')
.then((res)=>{
  insertLast(document.body,JSON.stringify(res));
})
.catch((err)=>{
  console.log(err);
}) */

