/* global gsap */
import { 
  ggom, 
  renderUserCard, 
  getNode as $, 
  changeColor, 
  delayP,
  renderSpinner ,
  renderEmptyCard,
  attr,
} from "./lib/index.js";


const userCardContainer = $('.user-card-inner');

//rendingUserList
async function rendingUserList(){
  renderSpinner(userCardContainer);

  try{
    await delayP(1000)
    $('.loadingSpinner').remove();
    let response = await ggom.get('http://localhost:3000/users')
    let userData=response.data;
    
  /*   for(let i =0; i<userData.length; i++){
      renderUserCard(userCardContainer, userData[i])
    } */
    
    userData.forEach((data)=>{
      renderUserCard(userCardContainer, data)
    })
  
    changeColor('.user-card')
  
    gsap.to(gsap.utils.toArray('.user-card'),{
      x:0, 
      opacity:1, 
      duration:1.5,
      stagger:0.2 ,
    })
  }catch(err){
    renderEmptyCard(userCardContainer);
  }


}
rendingUserList()


function delHandler(e){
  let deleteBtn = e.target.closest('button');
  let article = e.target.closest('article');

  if(!deleteBtn || !article) return
  
  let id = attr(article, 'data-index').slice(5);
  
  ggom.delete(`http://localhost:3000/users/${id}`).then(()=>{
    userCardContainer.innerHTML = '';
    rendingUserList();
  })
}

userCardContainer.addEventListener('click',delHandler)



//ajax get user List
 