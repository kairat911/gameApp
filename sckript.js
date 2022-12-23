
let $start = document.querySelector('#start')
let $game = document.querySelector('#game')
let $time = document.querySelector('#time')
let $time_header = document.querySelector('#time-header')
let $result_header = document.querySelector('#result-header')
let $result = document.querySelector("#result")
let $game_time = document.querySelector('#game-time')
let $tapped = document.querySelector('#tapped')
let $app = document.querySelector(".app")
let $loginName = document.querySelector(".loginName")
let $userName = document.querySelector("#userName")
let $listOFUsers = document.querySelector(".listOFUsers")

let score = 0
let person = {}
let list = []

$start.addEventListener('click', start)

function start (){
    score = 0
    $start.classList.add('hide')
    $game.style.backgroundColor = "white"
    timer()
    createBox()
    $time_header.classList.remove('hide')
    $result_header.classList.add('hide')
    setTime()
    $game_time.setAttribute("disabled","true")
}

function timer(){
    let interval=setInterval(function(){
       $time.textContent = (Number($time.textContent) - 0.1).toFixed(1)
       if ($time.textContent == "0.0"){
        clearInterval(interval)
        gameEnd()
       }
    },100)
}

function createBox(){
    $game.innerHTML = ""
    let box = document.createElement('div')
    let size = getRandom(30,100)// 30 -100
    let top = getRandom(0,300-size)// -50
    let left = getRandom(0,300-size)
    
    box.style.backgroundColor = `rgb(${getRandom(0,255)},${getRandom(0,255)},${getRandom(0,254)})`
    box.style.width = box.style.height = size + "px"
    box.style.position = 'absolute'
    box.style.top = top + "px"
    box.style.left = left + "px"
    box.style.cursor ="pointer"
    box.setAttribute("data-box","true")

    $game.insertAdjacentElement('afterbegin',box)
}

$game.addEventListener('click',clickBox)

function clickBox(event){
    if (event.target.dataset.box){
        createBox()
        score++
    }
}

function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min) + min)
}

function gameEnd(){
    $start.classList.remove('hide')
    $game.style.backgroundColor = "#ccc"
    $game.innerHTML = ""
    $time_header.classList.add('hide')
    $result_header.classList.remove('hide')
    $result.textContent = score
    $game_time.removeAttribute("disabled")
    saveResult()
}

function showUsers(){
    let = data = getDate()
    data.sort(function(a,b){
        return a.score > b.score ? -1 : 1
    })
    $listOFUsers.innerHTML = ""
    data.forEach(function(element, index){
        if (index > 9){
            return true
        }
    $listOFUsers.insertAdjacentHTML('beforeend',
    `<div class= "user">
        <h1>
            ${element.name}
            ---
            ${element.score}
        </h1>
    </div>`)
    });
}

function saveResult(){
    person.name = $userName.value
    person.score = score
    list = getDate()
    list.push(person)
    postData(list)
    showUsers()
}

function postData(spisok){
    localStorage.setItem('list',JSON.stringify(spisok))
}
function getDate(){
    return JSON.parse(localStorage.getItem('list'))
}

$game_time.addEventListener('input',setTime)

function setTime(){
    $time.textContent = $game_time.value
    $time_header.classList.remove('hide')
    $result_header.classList.add('hide')
}




$tapped.addEventListener('click', function(){
       $app.classList.remove("hide")
       $loginName.classList.add("hide")
       showUsers()
})



































//НОВАЯ ТЕМА ОБЕКТЫ, ФУНКЦИИИ, git
// githab
































































