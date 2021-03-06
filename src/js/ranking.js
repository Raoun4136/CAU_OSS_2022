document.querySelector("#rank_name").addEventListener("submit",storeRanking);
document.querySelector("#btn_resetRank").addEventListener("click",resetRankData);

function storeRanking(){
    let i = 0;
    while(localStorage.getItem("rankData"+i)){
        i++;
    }
    localStorage.setItem("rankData"+i,JSON.stringify({
        name : document.querySelector('#rank_name').querySelector('input').value, 
        score : score, 
        snake : players[0].snake, 
        apple : players[0].apple, 
        eatApple : eatApple,
        day : start.toLocaleDateString(),
        datetime : start.toLocaleTimeString(),
        time: parseInt(time)+parseInt(loadTime),
        xV : players[0].xV,
        yV: players[0].yV
    }));
    rank_x++;
}

function viewRanking(){
    resetDrawRank();
    rankData = [];
    let i = 0;
    while(localStorage.getItem("rankData"+i)){
        rankData.push(JSON.parse(localStorage.getItem("rankData"+i)));
        i++;
    }
    i--;
    let k = 1;
    rankData.sort(sortJson());
    while (i >= 0){
        let rankList = document.querySelector("#rank_list");

        let li = document.createElement("li");
        let spanRank = document.createElement("span");
        let spanName = document.createElement("span");
        let spanScore = document.createElement("span");
        let spanTime = document.createElement("span");
        let spanApple = document.createElement("span");
        let spanDay = document.createElement("span");
        let spanDateTime = document.createElement("span");

        li.id="rankData"+i;
        spanRank.innerText = (k)+"위";
        spanName.innerText = rankData[k-1].name;
        spanScore.innerText = rankData[k-1].score;
        spanTime.innerText = rankData[k-1].time;
        spanApple.innerText = rankData[k-1].eatApple;
        spanDay.innerText = rankData[k-1].day;
        spanDateTime.innerText = rankData[k-1].datetime;

        li.appendChild(spanRank);
        li.appendChild(spanName);
        li.appendChild(spanScore);
        li.appendChild(spanTime);
        li.appendChild(spanApple);
        li.appendChild(spanDay);
        li.appendChild(spanDateTime);
        rankList.appendChild(li);

        //test console
        //console.log(rankData[k-1]);
        i--;
        k++;
    }
}

function sortJson(){
    return function(a,b){
        if (a.score < b.score){
            return 1;
        } else if (a.score >= b.score){
            return -1;
        }
    }
}

function resetDrawRank(){
    document.querySelector("#txt_ranking").remove();

    let div = document.createElement("div");
    let ul = document.createElement("ul");

    div.id = "txt_ranking";
    ul.id = "rank_list";
    
    div.appendChild(ul);
    rankDiv.appendChild(div);

    let rankList = document.querySelector("#rank_list");
    let li = document.createElement("li");
    let spanRank = document.createElement("span");
    let spanName = document.createElement("span");
    let spanScore = document.createElement("span");
    let spanTime = document.createElement("span");
    let spanApple = document.createElement("span");
    let spanDay = document.createElement("span");
    let spanDateTime = document.createElement("span");

    spanRank.innerText = "RANK";
    spanName.innerText = "NAME";
    spanScore.innerText = "SCORE";
    spanTime.innerText = "TIME";
    spanApple.innerText = "APPLE";
    spanDay.innerText = "DAY";
    spanDateTime.innerText = "DAYTIME";

    li.appendChild(spanRank);
    li.appendChild(spanName);
    li.appendChild(spanScore);
    li.appendChild(spanTime);
    li.appendChild(spanApple);
    li.appendChild(spanDay);
    li.appendChild(spanDateTime);
    rankList.appendChild(li);

}

function resetRankData(){
    let i = 0;
    while(localStorage.getItem("rankData"+i)){
        localStorage.removeItem("rankData"+i);
        i++;
    }
    viewRanking();
}