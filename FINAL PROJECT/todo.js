let inputs = document.getElementById("inp")
let text = document.querySelector(".text")

function Add(){
    if(inputs.value == ""){
        alert("Please enter some task")
    }
    else{
        let task = document.createElement("ul"); //creating ul tag by help of JS//
        task.innerHTML=`${inputs.value}<i class="fa-solid fa-trash"></i>`;
        text.appendChild(task); //putting task the new element in the text that we create in html// append= put//
        inputs.value="";
        task.querySelector("i").addEventListener("click", remove);
        function remove(){
            task.remove()
        }
    }
}