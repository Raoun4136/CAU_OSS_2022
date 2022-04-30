let save_x = 0;
document.getElementById("save_name").addEventListener('submit',saveSnake());



function saveSnake()
{
    //test
    let i = 0;
    while(localStorage.getItem("saveData"+i))
    {
        i++;
    }
    console.log(i+(save_x%5));
    localStorage.setItem("saveData"+((i+save_x)%5),JSON.stringify({name : document.querySelector("input").value, Score : score, snakeArray : snake, apple : apple}));  //새로운 div 창에서 입력된 값 저장
    save_x++;
    /* to do : savePlayer가 무한대로 늘어날순없으니 최대 저장 갯수를 정하던가 선택한 칸에 저장하도록 하던가 */


}
function loadSnake()
{
    // if(event.keyCode == 76) { // L눌렀을 때
    //     // 저장된 div 부르고 div 인덱스로 가져오기 -> savePlayer 가 인덱스
    //     localStorage.getItem(savePlayer);
    // }
}