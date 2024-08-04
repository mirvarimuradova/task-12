let addListButton = document.querySelector(".add-list");
let main = document.querySelector("main")



addListButton.addEventListener("click" , ()=>{
    

    let div = document.createElement("div");
    div.classList.add("main-container");

    
    
    let addHead= document.createElement("input");
    addHead.classList.add("add-head-input");
    addHead.placeholder="Add Title "

   let buttonInside = document.createElement("button")
   buttonInside.classList.add("button-inside")
   buttonInside.textContent= "Add + "
   

   let deleteButton = document.createElement("img");
   deleteButton.setAttribute("src", "./imgs/icon-delete.svg");
   deleteButton.classList.add("deletebutton")
   deleteButton.addEventListener("click" , ()=>{

    div.remove();
   })



   div.append(addHead ,deleteButton, buttonInside);
   main.append(div );
   div.insertAdjacentElement("afterend", addListButton);




   buttonInside.addEventListener("click" , ()=>{

    let section = document.createElement("section");
    
    let prg = document.createElement("textarea");
    prg.classList.add("prg-inlist");
    
    let btnRemove = document.createElement("img");
    btnRemove.setAttribute("src", "./imgs/x-mark.png");
    btnRemove.classList.add("btnRemove")
    btnRemove.addEventListener("click" , ()=>{
             
        section.remove();
    })

    section.append(btnRemove,prg);
    div.appendChild(section)
  section.insertAdjacentElement("afterend", buttonInside);

})


})