/* ---------------------------------------------------------------------- */
/* For Of Loop                                                            */
/* ---------------------------------------------------------------------- */


//String, Array, Array-like : iterable
const arrayLike = {
  0: 'body',
  1: 'head',
  2: 'div',
  length: 3
}

/* for(let value of arrayLike){
  console.log(value);
} */

let str="유사배열";

for(let value of str){
  console.log(value);
}




const languages = [
  {
    id: 'ecma-262',
    name: 'JavaScript',
    creator: 'Brendan Eich',
    createAt: 1995,
    standardName: 'ECMA-262',
    currentVersion: 2022,
  },
  {
    id: 'java',
    name: 'Java',
    creator: 'James Gosling',
    createAt: 1995,
    standardName: null,
    currentVersion: 18,
  },
  {
    id: 'ecma-334',
    name: 'C#',
    creator: 'Anders Hejlsberg',
    createAt: 2000,
    standardName: 'ECMA-334',
    currentVersion: 8,
  },
];


// for ~ of 문
// - 특정 조건에서 건너띄기
for(let value of languages){
  // console.table(value);

  if(value.name==='Java') continue;

  console.table(value);
}

// - 특정 조건에서 중단하기
for(let value of languages){
  if(value.name === 'C#') break;

  console.table(value);
}



const randomUser = {
  gender: 'female',
  name: { title: 'Ms', first: 'Carol', last: 'May' },
  location: {
    street: { number: 9162, name: 'Church Road' },
    city: 'Birmingham',
    state: 'Cumbria',
    country: 'United Kingdom',
    postcode: 'FO5E 4TN',
    coordinates: { latitude: '-4.3301', longitude: '155.0223' },
    timezone: { offset: '-4:00', description: 'Atlantic Time (Canada), Caracas, La Paz' },
  },
  email: 'carol.may@example.com',
  login: {
    uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
    username: 'redduck745',
    password: 'picks',
    salt: '8xzqOzAn',
    md5: '7250e4042c2367cc82487f798c7c5253',
    sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
    sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
  },
  dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
  registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
  phone: '022 1280 9236',
  cell: '07653 428700',
  id: { name: 'NINO', value: 'SH 44 98 72 L' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/21.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
  },
  nat: 'GB',
};

// 객체의 키, 값 순환
// - for ~ in 문
// - for ~ of 문
// - 성능 비교 진단

/* 
for(let key in randomUser){
  let L1 = randomUser[key];
  
  if(({}).hasOwnProperty.call(randomUser,key)){
    console.log('L1 : ' ,key);
    if(typeof L1 === 'object'){
      for(let key in L1){
        let L2 = L1[key];
        if(({}).hasOwnProperty.call(randomUser,key)){
          console.log('\t L2 : ' ,key);
          if(typeof L2 === 'object'){
            
          }
        }
      }
    }
  }
  
}
 */

/* 
Object.keys
Object.values
Object.entries
 */


// console.log(Object.values(randomUser));
/* 
for(let key of Object.keys(randomUser)){
  console.log(key);
}
for(let values of Object.values(randomUser)){
  console.log(values);
}
 */


for(let keyValue of Object.entries(randomUser)){
  let key = keyValue[0]
  let value = keyValue[1]

  console.log('L1 : ' ,key);

  if(typeof value === 'object'){
    for(let keyValue of Object.entries(value)){
      let key = keyValue[0]
      let value = keyValue[1]

      console.log('\t L2 : ' ,key);
    }
  }
  
}

/* 

  Object.entries : object에 직접있는 enumerable 속성 [key, value] 쌍에 해당하는 배열 반환
  Object.keys : 주어진 객체의 속성 이름들을 일반적인 반복문과 동일한 순서로 순환되는 열거할 수 있는 배열로 반환
  Object.values : 파라미터로 전달된 객체가 가지는 열거 가능한 속성의 값들로 구성된 배열을 반환

  
*/