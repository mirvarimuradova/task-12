let addListButton = document.querySelector(".add-list");
let main = document.querySelector("main")

let array =[]
let txt;
let count =0;


addListButton.addEventListener("click" , ()=>{
    
   
    let div = document.createElement("div");
    div.classList.add("main-container");

    
    
    let addHead= document.createElement("input");
    addHead.classList.add("add-head-input");
    addHead.placeholder="Add Title ";

   let buttonInside = document.createElement("button")
   buttonInside.classList.add("button-inside")
   buttonInside.textContent= "Add + ";
   

   

   let buttonSave = document.createElement("button");
   buttonSave.innerHTML =" Save &#10003";
   buttonSave.classList.add("button-save");

  


   let deleteButton = document.createElement("img");
   deleteButton.setAttribute("src", "./imgs/icon-delete.svg");
   deleteButton.classList.add("deletebutton")

   deleteButton.addEventListener("click" , ()=>{

    div.remove();

   })



   div.append(addHead ,deleteButton, buttonInside, buttonSave);
   main.append(div );
   div.insertAdjacentElement("afterend", addListButton);




   buttonInside.addEventListener("click" , ()=>{

    let section = document.createElement("section");
    
    // if(main.height>405){
        
    //   main.style.overflowX = "scroll";
    // }

    let prg = document.createElement("textarea");
    prg.classList.add("prg-inlist");
    prg.addEventListener("change", ()=>{{
        txt=prg.value;
    }})
    let imgContainer = document.createElement("div");
 
    imgContainer.classList.add("img-container");
    imgContainer.innerHTML = `
            <div style="margin-top: 10px;">
                <img src="./imgs/justify.png" alt="justify">
                <img src="./imgs/checkbox.png" alt="checkbox"><span>4/8</span>
                <img src="./imgs/attach.png" alt=""><span>2</span>
                <img src="./imgs/comments.png" alt=""><span>4</span>
            </div>
            <div>
                <img class="man1" style="margin-right: 10px;" src="./imgs/man_1.png" alt="">
            </div>
        `;
    

    
    let btnRemove = document.createElement("img");
    btnRemove.setAttribute("src", "./imgs/x-mark.png");
    btnRemove.classList.add("btnRemove")
    btnRemove.addEventListener("click" , ()=>{
             
        section.remove();
    })

    section.append(btnRemove,prg,imgContainer);
    div.appendChild(section);
    section.insertAdjacentElement("afterend",buttonInside)
  buttonInside.insertAdjacentElement("afterend", buttonSave);

})

buttonSave.addEventListener("click", ()=>{
         let savedList = `${addHead.value}`
         array[savedList]= {
              list_name: savedList,
              list_text: txt
         }
   console.log(array)
})
count++;
})