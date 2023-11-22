
let popap = document.querySelector('#popap')
let addbtn = document.querySelector('#adddbtn')

let addtask = document.querySelector('#addtask')

window.openpopap = function(){
  popap.classList.add('open-popap')
}


window.closspopap = function(){
  popap.classList.remove('open-popap')
}


import { db } from "./config.js";
import {collection, addDoc, getDocs,doc,onSnapshot,deleteDoc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";




// import { collection, onSnapshot } from "firebase/firestore";
const gettodo = ()=>{
 onSnapshot(collection(db, "todos"), (data) => {
   data.docChanges().forEach((change) => {
     
     console.log(change.doc.data())
     getul.innerHTML +=
       `<div id="${change.doc.id}" class="libd"><li >${ change.doc.data().lists} </li> <div class="icon"><ion-icon onclick="Deltodoli('${change.doc.id}')" name="trash"></ion-icon><ion-icon name="create"></ion-icon></div></div>`

   })
  
  
  
  });
  
}

gettodo()



addtask.addEventListener('click',async()=>{
  let getinp = document.querySelector('#getinp')
  if(getinp.value === ""){
          alert('please Enter some thing')
      }
      else{
      try {
          const docRef = await addDoc(collection(db, "todos",), {
            lists : getinp.value,
          });
          getinp.value = ""
          console.log("Document written with ID: ", docRef.id);
          readdata()
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }})
      
      
      
  window.Deltodoli = async function(id){
    await deleteDoc(doc(db, "todos",id));
    console.log("deleted")

  }    
      
  