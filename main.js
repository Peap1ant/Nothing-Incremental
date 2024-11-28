var gameData = {
    thing: 0,
    tpc: 1, //things per click
    tpcCost: 10
}

function getThing() {
    gameData.thing += gameData.tpc
    if(gameData.thing === 0) {
        document.getElementById('thingCurrent').innerHTML = 'Nothing: ' + gameData.thing
    } else {
        document.getElementById('thingCurrent').innerHTML = 'Thing: ' + gameData.thing
    }
}

function buytpc() {
    if (gameData.thing >= gameData.tpcCost) {
        gameData.thing -= gameData.tpcCost
        gameData.tpc *= 2
        gameData.tpcCost = gameData.tpcCost * 2 + 1
        document.getElementById('thingCurrent').innerHTML = 'Thing: ' + gameData.thing
        document.getElementById('tpcUpdate').innerHTML = 'Thing gain upgrade: level ' + gameData.tpc - 1 + '<br>(Cost:' + gameData.tpcCost +')'
    }
}

var mainGameLoop = window.setInterval(function() {
    getThing()
  }, 50)

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("NISave", JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("NISave"))
if (savegame !== null) {
  gameData = savegame
}