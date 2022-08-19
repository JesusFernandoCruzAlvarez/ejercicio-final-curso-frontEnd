/*<h1 class="title">Random Users</h1>*/
const title=(label)=>{
    const h1=document.createElement('h1')
    h1.classList.add('title');
    h1.textContent=label
    return h1;
}