const userInput=document.getElementById("input");
const addTask=document.getElementById("addTask");
const ul=document.getElementById("list")
const sortBy=document.getElementById("sortBy")
let nodeList;


sortBy.addEventListener('change',function(e){   
    ul.innerHTML="";
    let sortBy=e.target.value;
    let newArray=[];  
    if(sortBy=="Completed"){
    nodeList.forEach((e,idx)=>{
        if(e.classList.contains("complete")){
            newArray.push(e);
        }
        
    })
    newArray.forEach(e=>{
        ul.appendChild(e);
    })
    }else{
    nodeList.forEach(e=>{
        ul.appendChild(e);
    })
}
   
    
})

let userData;
userInput.addEventListener("input",function(){
    userData=this.value;
})

addTask.addEventListener('click',createList);

function createList(){
    
    if(userData){
        const li=document.createElement("li");     
        li.innerHTML=`
                <span>${userData}</span>
                        <div class="button-container">
                        <button id="completedTask" onclick="completeTask(event)">✔️</button>
                        <button id="deleteTask" onclick="deleteTask(event)">🗑️</button>
                </div>
        `
        ul.appendChild(li);
        li.setAttribute("id",Math.random());
        li.setAttribute("class","to_do_item");
        [...nodeList]=document.querySelectorAll(".to_do_item");
       }       
}

function deleteTask(event){
    let id=event.target.parentElement.parentElement.getAttribute("id");
    [...nodeList]=document.querySelectorAll("li");
    nodeList.forEach((ele)=>{ 
        if(ele.getAttribute("id")==id){ 
            ul.removeChild(ele) 
        }
    })    
}

function completeTask(event){
    let id=event.target.parentElement.parentElement.getAttribute("id");
    [...nodeList]=document.querySelectorAll("li");
    nodeList.forEach((ele)=>{ 
        if(ele.getAttribute("id")==id){ 
            ele.classList.add('complete');
            ele.style.textDecoration="line-through";    
        }
    })  
}


