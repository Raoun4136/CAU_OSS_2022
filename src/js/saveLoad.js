let save_x = 0;
document.getElementById("save_name").addEventListener("submit",saveSnake);



function saveSnake()
{
    //test
    let i = 0;
    while(localStorage.getItem("saveData"+i))
    {
        i++;
    }
    console.log("score = "+ score);
    localStorage.setItem("saveData"+((i+save_x)%5),JSON.stringify({name : document.querySelector('form').querySelector('input').value, Score : score, snakeArray : snake, apple : apple}));  //새로운 div 창에서 입력된 값 저장
    save_x++;
    /* to do : savePlayer가 무한대로 늘어날순없으니 최대 저장 갯수를 정하던가 선택한 칸에 저장하도록 하던가 */

}
function loadSnake()
{
    let i =0;
    while(localStorage.getItem("saveData"+i))
    {
        console.log((i+1)+"번째"+"LOAD DATA");
        console.log(localStorage.getItem("saveData"+i));
        i++;
    }
    let index = 1 // load 창에서 받은 player index값
    const object = JSON.parse(localStorage.getItem("saveData"+index));
    let savedSnakeArr = object.snakeArray;
    let savedAppleArr = object.apple;
    let savedScore = object.Score;
    console.log("savedSnakeArr = " + savedSnakeArr);
    console.log("savedAppleArr = " + savedAppleArr);
    console.log("savedScore = " + savedScore);
}