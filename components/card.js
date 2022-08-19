/*
<div class="card-container">
<div class="card">
<img class="card-photo" src="https://randomuser.me/api/portraits/women/66.jpg" alt="">
<h2 class="card-name">Karen</h2>
</div>
*/

const card=(user)=>{
    let id, name, photo;
    if(user){
    id=user.id;
    name=user.name;
    photo=`https://randomuser.me/api/portraits/women/${id}.jpg`; 
        // {id,name}=user;
    }
    else{
         id=0;
         name='Anónimo';
         photo=`https://cdn-icons-png.flaticon.com/512/4123/4123751.png`;
    }
    //const {id, name}=user;

    const card=document.createElement('div');
    card.classList.add('card');

    const img=document.createElement('img');
    img.classList.add('card-photo');
    img.src= photo;
    img.alt='Photo woman';

    card.appendChild(img);

    const h2=document.createElement('h2');
    h2.classList.add('card-name');
    h2.textContent=name;

    card.appendChild(h2); 
    return card;
}

