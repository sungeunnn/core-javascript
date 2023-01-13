import { getInputValue, getNode, getRandom, clearContents, insertLast, typeError,isNumericString, showAlert } from "./lib/index.js";
import { jujeobData } from "./data/data.js";

const submit = getNode('#submit')
const result = getNode('.result')

function clickSubmitHandler(e){
  e.preventDefault();

  
  let name=getInputValue('#nameField');
  if(!name) {
    showAlert('.alert-error', '이름을 입력해주세요');
    return
  }
  if(isNumericString(name)){
    showAlert('.alert-error', '제대로 된 이름을 입력해주세요');
    return
  }
  let list = jujeobData(name);
  let pick = list[getRandom(list.length-1)];

  clearContents(result);
  insertLast(result,pick);

  // let resultValue = 
}


submit.addEventListener('click', clickSubmitHandler)










