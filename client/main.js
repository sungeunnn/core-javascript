/* global gsap */
import { ggom, renderUserCard, getNode } from "./lib/index.js";


const userCardContainer = getNode('.user-card-inner');
//rendingUserList
async function rendingUserList(){
  let response = await ggom.get('https://jsonplaceholder.typicode.com/users')
  let userData=response.data;
  
/*   for(let i =0; i<userData.length; i++){
    renderUserCard(userCardContainer, userData[i])
  } */
  
  userData.forEach((data)=>{
    renderUserCard(userCardContainer, data)
  })


}
rendingUserList()






//ajax get user List
 