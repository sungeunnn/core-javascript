
import { insertLast } from './index.js';
/* 변수 받자마자 매개변수 구조분해할당을 하면 더 편함 */
const createUserCard = ({
  id ='',
  name = '',
  email = '',
  website = ''
} = {}) =>{
  
  

  return  /* html */`
  <article class="user-card" data-index="user-${id}">
      <h3 class="user-name">${name}</h3>
      <div class="user-resouce-info">
        <div>
          <a class="user-email" href=${email}>${email}</a>
        </div>
        <div>
          <a class="user-website" href="https://${website}" target="_blank" rel="noopener noreferer">${website}</a>
        </div>
      </div>
      <button class="delete">삭제</button>
    </article>`
}

// 1. userList.js 로 간다
// 2. renderUserCard 함수를 만들기
// 3. 만들어진 함수 안에 createUserCard 를 던지고,
// 4. renderUserCard 함수를 사용했을 때 렌더링이 잘 될 수 있도록

export function renderUserCard(target, data) {
  insertLast(target, createUserCard(data))
}