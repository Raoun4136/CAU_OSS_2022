document.querySelector("#save_name").addEventListener("submit",saveSnake);

function saveSnake()
{
    let i = 0;
    while(localStorage.getItem("saveData"+i)){
        i++;
    }
    localStorage.setItem("saveData"+((i+save_x)%5),JSON.stringify({
        name : document.querySelector('#save_name').querySelector('input').value, 
        score : score, 
        snake : snake, 
        apple : apple, 
        date : start,
        time : time
    }));
    save_x++;
}

function loadSnake() {
    resetDrawLoad();
    let i =0;
    for(i; i<5;i++){
        if(!localStorage.getItem("saveData"+i)) continue;
        let loadList = document.querySelector("#txt_load");
        let li = document.createElement("li");
        let span = document.createElement("span");
        let button = document.createElement("button");

        li.id = "saveData"+i;
        span.innerText = localStorage.getItem("saveData"+i);
        button.innerText = "❌";
        button.addEventListener("click",deleteSave);

        li.appendChild(span);
        li.appendChild(button);
        loadList.appendChild(li);
    }
}

function resetDrawLoad(){
    document.querySelector("#txt_load").remove();

    let div = document.createElement("div");
    let ul = document.createElement("ul");

    div.id = "txt_load";
    ul.id = "load_list";
    
    div.appendChild(ul);
    loadDiv.appendChild(div);
}

function deleteSave(event){
    let li = event.target.parentElement;
    li.remove();

    localStorage.removeItem(li.id);
    loadSnake();
}