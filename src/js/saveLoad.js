document.getElementById("save_name").addEventListener("submit",saveSnake(savePlayer));

function saveSnake()
{
    //test
    let saveData = [];
    let i = 0;
    for (c in JSON.parse(localStorage.getItem("saveData"+i)))
    {
        saveData.push(c);
        i++;
    }
    let savePlayer = saveData.length;
    localStorage.setItem("saveData"+savePlayer,JSON.stringify({name : document.querySelector("#save_name input").value, Score : score, snakeArray : snake, apple : apple}));  //새로운 div 창에서 입력된 값 저장
    /* to do : savePlayer가 무한대로 늘어날순없으니 최대 저장 갯수를 정하던가 선택한 칸에 저장하도록 하던가 */
    if(i==5)
        i -= 5;        //일단 5칸 넘어가면 가장 오래된 기록부터 지우기

}
function loadSnake(savePlayer)
{
    // if(event.keyCode == 76) { // L눌렀을 때
    //     // 저장된 div 부르고 div 인덱스로 가져오기 -> savePlayer 가 인덱스
    //     localStorage.getItem(savePlayer);
    // }
}