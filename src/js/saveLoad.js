document.querySelector("#save_name").addEventListener("submit",saveSnake);
document.querySelector("#btn_resetSave").addEventListener("click",resetSaveData);

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
        eatApple : eatApple,
        day : start.toLocaleDateString(),
        datetime : start.toLocaleTimeString(),
        time: time
    }));
    save_x++;
}

function loadSnake() {
    resetDrawLoad();
    let i =0;
    for(i; i<5;i++){
        if(!localStorage.getItem("saveData"+i)) continue;
        let loadData = JSON.parse(localStorage.getItem("saveData"+i));
        let loadList = document.querySelector("#txt_load");

        let li = document.createElement("li");
        let spanName = document.createElement("span");
        let spanScore = document.createElement("span");
        let spanTime = document.createElement("span");
        let spanApple = document.createElement("span");
        let spanDay = document.createElement("span");
        let spanDateTime = document.createElement("span");
        let button = document.createElement("button");


        li.id = "saveData"+i;

        spanName.innerText = loadData.name;
        spanScore.innerText = loadData.score;
        spanTime.innerText = loadData.time;
        spanApple.innerText = loadData.eatApple;
        spanDay.innerText = loadData.day;
        spanDateTime.innerText = loadData.datetime;
        spanName.innerText = loadData.name;

        button.innerText = "❌";
        button.classList.add("btn_delete");
        button.addEventListener("click",deleteSave);

        console.log(loadData);
        li.appendChild(spanName);
        li.appendChild(spanScore);
        li.appendChild(spanTime);
        li.appendChild(spanApple);
        li.appendChild(spanDay);
        li.appendChild(spanDateTime);
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

function resetSaveData(){
    //TODO reset Save Data
    alert("구현중입니다.");
}

function loadOption(){
    let index = 0; // load 창에서 받은 player index값
    const object = JSON.parse(localStorage.getItem("saveData"+index));
    let savedSnakeArr = object.snake;
    let savedAppleArr = object.apple;
    let savedScore = object.score;
    console.log("savedSnakeArr = " + savedSnakeArr);
    console.log("savedAppleArr = " + savedAppleArr);
    console.log("savedScore = " + savedScore);
}