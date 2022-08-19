//<div class="card-container"></div>

const cardList=()=>{

const cardContainer=document.createElement('div')
cardContainer.classList.add('card-container')

users.map (user=>{
    //cardContainer.appendChild(card(user));
    cardContainer.appendChild(card(user));    
    })

/*
cardContainer.appendChild(card());
cardContainer.appendChild(card());
cardContainer.appendChild(card());
*/
return cardContainer
}
//listo