# CAU_OSS_2022

projects for opensource-SW-project 2022-1

# USER MANUAL

### YOU CAN ENTER ESC ALWAYS

    Press ESC to EXIT game (always) [terminate GAME!]

### YOU CAN ENTER P,L,K IN FIRST GAME PAGE

    Press 1 to start Single Play
    Press 2 to start Dual Play
    Press 3 to start Auto Play
    Press L to load data
    Press K to see Ranking

### YOU CAN ENTER P IN GAME

    Press P to pause

### YOU CAN ENTER P,S,R,M IN PAUSED

    Press P to resume
    Press S to save data [Only Single Play]
    Press R to restart
    Press M to go Menu

# How to run

```
$ git clone https://github.com/Raoun4136/CAU_OSS_2022.git

## Run index.html ##
## WE RECOMMEND CHROME BROWSER ##
```

# PLAY GAME

https://cseosssnakegame.netlify.app/

# TREE

```
├── font                                # font
│   ├── Square-Dot-Matrix.ttf           # ttf
│   ├── square-dot-matrix-webfont.woff  # woff
├── src                                 #
│   ├── css                             # css
│   │   ├── style.css                   #
│   │ 	├── t-normalize.css             # css 초기화
│   ├── js                              # js
│   │   ├── apple.js                    #
│   │ 	├── divToggle.js                # gameScreen Div들을 toggle하는 함수
│   │ 	├── gameOver.js                 #
│   │ 	├── initGame.js                 # main JS 첫 시작함수
│   │   ├── keyDown.js                  # keyDown 함수
│   │ 	├── player.js                   # player Object
│   │ 	├── ranking.js                  #
│   │ 	├── resetGame.js                # resetOption
│   │ 	├── saveLoad.js                 #
│   │ 	├── screen.js                   #
│   │ 	├── snake.js                    #
│   │ 	├── value.js                    #
├── index.html                          # default html
└── README.md
```
