import { insertLast, ggom, renderUserCard, getNode } from "./lib/index.js";


const userCardContainer = getNode('.user-card-inner');
//rendingUserList
async function rendingUserList(){
  let response = await ggom.get('https://jsonplaceholder.typicode.com/users/1')
  let userData=response.data;
  
  

 renderUserCard(userCardContainer, userData)
}
rendingUserList()






//ajax get user List
 