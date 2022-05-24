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
        snake : players[0].snake, 
        apple : players[0].apple, 
        eatApple : eatApple,
        day : start.toLocaleDateString(),
        datetime : start.toLocaleTimeString(),
        time: parseInt(time)+parseInt(loadTime),
        xV: players[0].xV,
        yV: players[0].yV
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
        li.addEventListener("click",loadGame);

        spanName.innerText = loadData.name;
        spanScore.innerText = loadData.score;
        spanTime.innerText = loadData.time;
        spanApple.innerText = loadData.eatApple;
        spanDay.innerText = loadData.day;
        spanDateTime.innerText = loadData.datetime;

        button.innerText = "❌";
        button.classList.add("btn_delete");
        button.addEventListener("click",deleteSave);

        //test console
        //console.log(loadData);
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

    let rankList = document.querySelector("#load_list");
    let li = document.createElement("li");
    let spanName = document.createElement("span");
    let spanScore = document.createElement("span");
    let spanTime = document.createElement("span");
    let spanApple = document.createElement("span");
    let spanDay = document.createElement("span");
    let spanDateTime = document.createElement("span");
    let spanDelete = document.createElement("span");

    spanName.innerText = "NAME";
    spanScore.innerText = "SCORE";
    spanTime.innerText = "TIME";
    spanApple.innerText = "APPLE";
    spanDay.innerText = "DAY";
    spanDateTime.innerText = "DAYTIME";
    spanDelete.innerText = "DEL";

    li.appendChild(spanName);
    li.appendChild(spanScore);
    li.appendChild(spanTime);
    li.appendChild(spanApple);
    li.appendChild(spanDay);
    li.appendChild(spanDateTime);
    li.appendChild(spanDelete);
    rankList.appendChild(li);
}

function deleteSave(event){
    let li = event.target.parentElement;
    li.remove();

    localStorage.removeItem(li.id);
    loadSnake();
}

function resetSaveData(){
    //TODO reset Save Data
    let i = 0;
    for (i; i< 5; i++)
        localStorage.removeItem("saveData"+i);
    loadSnake();  
}

function loadGame(event){
    if(!loadOption(event)) return;
    clearScreen();
    isGaming = true;
    isStarted = true;
    isSaving = false;
    isGameOver = false;
    isLoading = false;
    isRanking = false;
    isSnakeChanged = false;

    gameOn();
}

function loadOption(event){
    let load = JSON.parse(localStorage.getItem(event.path[1].id));
    if (load == null){
        load = JSON.parse(localStorage.getItem(event.path[0].id));
        if(load == null){
            return 0;
        }
    }
    players[0].apple = load.apple;
    players[0].snake = load.snake;
    eatApple = load.eatApple;
    loadTime = load.time;
    start = new Date();
    score = load.score;
    players[0].xV = load.xV;
    players[0].yV = load.yV;
    
    return true;
}