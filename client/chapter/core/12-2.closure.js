

// 1. 지구환경에
function earth() {
  //5. 물이 있다.
  let water = true;

  //5. 애플은 회사이다.
  let apple = {
    founder: "Steve Jobs",
    ceo: "Tim Cook",
    product: ["iphone", "macbook", "macStudio", "appleWatch"],
  };

  //6.차원문을 통해 갔던 지구의 new 소식
  let o2 = 9999;

  /*   //2. 호랑이가 살고있어요
  function tiger(){
    // 6.차원문을 통해 지구의 new소식 전해줌
    console.log(water, o2);
  } */

  //3. 지구환경에서 호랑이를 퇴출시켜 우주로 나가버렸어요.
  //우주미아 tiger
  //return tiger

  //7 사실 외계인들한텐 tiger란 존재는 필요없음. 정보만 있으면 된다.
  return function () {
    console.log(water, o2);
  };
}

// 4. 우주에 있던 ufo가 tiger를 보고 자신들 세계로 데려감
// 외계인이 호랑이한테 지구에 대해 물어봄
// 5.물있어? apple이 뭐야? 과일아냐?
//6. 차원문으로 지구로 보내줄테니 정보 더 가져와!
const ufo = earth();






/* 

*/
function handler() {
  let isClicked = false;

  return function () {
    if (isClicked === true) {
      this.style.background = "transparent";
    } else {
      this.style.background = "red";
    }

    isClicked = !isClicked;
  };
}

document.querySelector(".first").addEventListener("click", handler());