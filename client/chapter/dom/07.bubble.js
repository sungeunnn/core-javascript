/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const visual = getNode('.visual');
const news = getNode('.news');
const desc = getNode('.desc');

/* visual.addEventListener('click', function(e){
  console.log('target : ',e.target);
  console.log('currentTarget: ',e.currentTarget);
  console.log('%c visual','background:dodgerblue');
}) */

visual.addEventListener('click',(e)=>{
  let elem = e.currentTarget;
  // console.log('target : ',e.target);
  // console.log('currentTarget: ',e.currentTarget);
  console.log('%c visual','background:dodgerblue');
  css('.pop','display','block');
  
})

getNode('.pop').addEventListener('click',(e)=>{
  //버블링 중단이  없을 때 왜 작동되지 않는것처럼 보이냐면 눌러짐과 동시에 사라졌다 다시 생기기 때문이다
  // e.stopPropagation();   
  css('.pop','display','none');
})


/* news.addEventListener('click', function(e){
  e.stopPropagation();
  console.log('%c news','background:orange');
})

desc.addEventListener('click', function(e){
  e.stopPropagation();
  console.log('%c desc','background:pink');
}) */

/* 캡처링 ----------------------------------------------------------------- */
