var getul = document.getElementById('ul')

var inp = document.getElementById('inp')

let dltbtn = document.querySelector('#dltbtn')



// firestore portion

import { db } from "./config.js";
import {collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";



let adbtn = document.querySelector('#adbtn')
// let inp = document.querySelector('#inp')
let random = Math.random()*10;
// console.log(random)
adbtn.addEventListener('click',async()=>{
    if(inp.value === ""){
        alert('please Enter some thing')
    }
    else{
    try {
        const docRef = await addDoc(collection(db, "todos"), {
          List: inp.value,
          
        });
        inp.value = ""
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}})


let readbtn = document.querySelector("#read")
readbtn.addEventListener('click', async ()=>{
    const querySnapshot = await getDocs(collection(db, "todos"));
    querySnapshot.forEach((doc) => {
        let docid = doc.id
        for(let i=0;i<doc.data().length;i++){console.log(data().List)}
        let docdata = 
        // console.log(`${docid} =>`,doc.data());
        // getul.innerText = doc.data()
    //   console.log(doc.data());
    getul.innerHTML +=  `<li>${ doc.data().List}</li>`
      console.log(doc.data());
    });
    
})










// adbtn.addEventListener('click',()=>
// {
//     if(inp.value == ''){
//         alert("PLease enter in Input field")
//         }
// else{

//     var li = document.createElement("li")
//     var litext = document.createTextNode(inp.value)
//     li.appendChild(litext)
//     getul.appendChild(li)
//     inp.value = ""
//     let btndiv = document.createElement('div')
//     btndiv.setAttribute('class','btndiv')
//     li.appendChild(btndiv)

//     var deletebtn = document.createElement('button')
//     deletebtn.setAttribute('class','delbtn')
//     var deletebtntext = document.createTextNode('Delete')
//     deletebtn.appendChild(deletebtntext)
//     // li.appendChild(deletebtn)
//     // btndiv.appendChild(deletebtn)
//     deletebtn.setAttribute('onclick',"del(this)")
//     var editbtn = document.createElement("button")
//     var editbtntext = document.createTextNode("Edit")
//     // editbtn.setAttribute('class','delbtn')
//     editbtn.appendChild(editbtntext)
//     btndiv.appendChild(deletebtn)
//     btndiv.appendChild(editbtn)
//     // li.appendChild(editbtn)
//     editbtn.setAttribute('onclick','editbtn(this)')
//     // editbtn.setAttribute('class','abc')

// }
// })
// dltbtn.addEventListener('click',()=>{
//     getul.innerHTML = ''
// })



// function del(e){
// e.parentNode.parentNode.remove()
// }
// function editbtn(e){
//     var useredit = prompt('Enter Edit value',e.parentNode.parentNode.firstChild.nodeValue)
// e.parentNode.parentNode.firstChild.nodeValue = useredit
// }

