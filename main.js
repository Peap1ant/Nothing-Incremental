var gameData = {
    thing: 0,
    tpc: 1, //things per click
    tpcCost: 10,
    tpcLevel: 0
}

function getThing() {
    gameData.thing += gameData.tpc
    document.getElementById('thingCurrent').innerHTML = 'Thing: ' + gameData.thing

}

function buytpc() {
    if (gameData.thing >= gameData.tpcCost) {
        gameData.thing -= gameData.tpcCost
        gameData.tpc += 1
        gameData.tpcCost = Math.floor(gameData.tpcCost * 1.5)
        gameData.tpcLevel += 1
        document.getElementById('thingCurrent').innerHTML = 'Thing: ' + gameData.thing
        document.getElementById('tpcUpdate').innerHTML = 'Thing gain upgrade: level ' + gameData.tpcLevel + '<br>(Cost:' + gameData.tpcCost +')'
    }
}

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("NISave", JSON.stringify(gameData))
}, 10000)

function refreshing() { gameData.thing += 0}
var mainGameLoop = window.setInterval(function() {refreshing()}, 50)

var savegame = JSON.parse(localStorage.getItem("NISave"))
if (savegame !== null) {
    gameData = savegame
    document.getElementById('thingCurrent').innerHTML = 'Thing: ' + gameData.thing
    document.getElementById('thingCurrent').innerHTML = 'Thing: ' + gameData.thing
    document.getElementById('tpcUpdate').innerHTML = 'Thing gain upgrade: level ' + gameData.tpcLevel + '<br>(Cost:' + gameData.tpcCost +')'
}