// game data

var gameData = {
    thing: 0,
    tpc: 1, //things per click
    tpcCost: 5,
    tpcLevel: 0,
    tpsec: 0, //things per second
    tpsecCost: 10,
    tpsecLevel: 0
}

// game refreshing every 50ms

function refreshing() { gameData.thing += 0}
var mainGameLoop = window.setInterval(function() {refreshing()}, 50)

// save gameData as JSON

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem('NISave', JSON.stringify(gameData))
}, 10000)

// load game

var savegame = JSON.parse(localStorage.getItem('NISave'))
if (savegame !== null) {
    gameData = savegame
    document.getElementById('thingCurrent').innerHTML = 'Thing: ' + gameData.thing
    document.getElementById('tpcUpdate').innerHTML = 'Thing gain upgrade: level ' + gameData.tpcLevel + '<br>(Cost: ' + gameData.tpcCost +', + 1 per level)'
    document.getElementById('tpsecUpdate').innerHTML = 'Gain ' + gameData.tpsec + ' things per second<br>(Cost: ' + gameData.tpsecCost +', + 1 per level)'
}