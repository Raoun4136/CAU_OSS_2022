function storeRanking(){
    localStorage.setItem("ranking"+rankPlayer, JSON.stringify({name : "고정훈", Score : score, snakeArray : snake, apple : apple})); //name 을 getbyelement 로
}

function viewRanking(){
    var rankData = [];
    for (i = 0; i < rank_num; i++){
        rankData.push(JSON.parse(localStorage.getItem("ranking"+i)));
    }
    console.log(rank_num);
    console.log(rankData);
    // rankData.sort(function(a,b){
    //     return parseFloat(b.score) - parseFloat(a.score);
    // });
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