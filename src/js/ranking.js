let rank_x = 0;

function storeRanking(){
    let i = 0;
    while(localStorage.getItem("rankData"+i))
    {
        i++;
    }
    console.log(i+(rank_x%5));
    localStorage.setItem("rankData"+((i+rank_x)%5),JSON.stringify({name : "jh", Score : score, snakeArray : snake, apple : apple}));  //새로운 div 창에서 입력된 값 저장
    rank_x++;
}

function viewRanking(){
    rankData = [];
    let i = 0;
    while(localStorage.getItem("rankData"+i))
    {
        rankData.push(JSON.parse(localStorage.getItem("rankData"+i)));
        i++;
    }
    console.log(rankData);
    rankData.sort(sortJson());
    console.log(rankData);
}

function sortJson(){
    return function(a,b){
        if (a.Score > b.Score){
            return 1;
        } else if (a.Score <= b.Score){
            return -1;
        }
    }
}