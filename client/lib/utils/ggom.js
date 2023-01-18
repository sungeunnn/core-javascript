

const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body:null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect:'follow',
  referrerPolicy:'no-reffere',
  headers:{
    'Content-Type':'application/json; charset=UTF-8'
  }
}






/*


*/

const ggom = async(options = {}) =>{

  //url 을 따로 뽑고, ...restOptions는 url을 제외한 options를 의미
  const {url , ...restOptions}= {
    ...defaultOptions,
    ...options,
    // headers도 객체라서 defaultOptions와 options의 header를 받아와 얕은복사를 해준 것
    //nullish 연산자 앞에가 null, undefined면 뒤에꺼 넣어라
    headers : {...(defaultOptions.headers ?? {}), ...(options.headers ?? {})} 
  }

  console.log(restOptions);

  let response = await fetch(url, restOptions)

/*   response.then((res)=>{
    console.log(res);
  }) */
  if(response.ok){
    response.data = await response.json();
  }


  //console.log(response)
  return response;
}

ggom.get = (url, options) =>{
  ggom({
  url,
  ...options,
})
}

ggom.post = (url,body ,options) =>{
  ggom({
  method:"POST",
  url,
  body : JSON.stringify(body),
  ...options,
})
}

ggom.put = (url,body ,options) =>{
  ggom({
  method:"PUT",
  url,
  body : JSON.stringify(body),
  ...options,
})
}

ggom.delete = (url,options) =>{
  ggom({
  method:"DELETE",
  url,
  ...options,
})
}


