let inp=document.querySelector("input");
let btn=document.querySelector('button');
let ul=document.querySelector('ul');


btn.addEventListener('click',function(){
    let item=document.createElement('li');
    item.innerText=inp.value;
    let delBtn=document.createElement('button');
    delBtn.innerText="Delete";
    delBtn.classList.add("delete"); 
    ul.appendChild(item);
    item.appendChild(delBtn);
    inp.value="";
})

ul.addEventListener('click',function(event){
    if(event.target.nodeName=="BUTTON"){
        event.target.parentElement.remove();
        console.log("deleted")
    }
})

// for(del of dels){        //this does not work for newly added elements, for that we have to use event delegation
//     del.addEventListener('click',function(){
//         let par=this.parentElement;
//         par.remove();
//     })
// }