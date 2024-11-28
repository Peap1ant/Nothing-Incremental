var gameData = {
    thing: 0,
    tpc: 1, //things per click
    tpcCost: 10,
    tpcLevel: 0,
    tpsec: 0, //things per second
    tpsecCost: 20,
    tpsecLevel: 0
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

function getThingPerSecond() {
    gameData.thing += gameData.tpsec
    document.getElementById('thingCurrent').innerHTML = 'Thing: ' + gameData.thing
}

function buytpsec() {
    if (gameData.thing >= gameData.tpsecCost) {
        gameData.thing -= gameData.tpsecCost
        gameData.tpsec += 1
        gameData.tpsecCost = Math.floor(gameData.tpsecCost * 1.5)
        gameData.tpsecLevel += 1
        document.getElementById('thingCurrent').innerHTML = 'Thing: ' + gameData.thing
        document.getElementById('tpsecUpdate').innerHTML = 'Gain' + gameData.tpsec + 'things per second<br>(Cost:' + gameData.tpsecCost +')'
    }
}

var getTpsecLoop = window.setInterval(function() {
    getThingPerSecond()
}, 1000)

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem('NISave', JSON.stringify(gameData))
}, 10000)

function refreshing() { gameData.thing += 0}
var mainGameLoop = window.setInterval(function() {refreshing()}, 50)

var savegame = JSON.parse(localStorage.getItem('NISave'))
if (savegame !== null) {
    gameData = savegame
    document.getElementById('thingCurrent').innerHTML = 'Thing: ' + gameData.thing
    document.getElementById('thingCurrent').innerHTML = 'Thing: ' + gameData.thing
    document.getElementById('tpcUpdate').innerHTML = 'Thing gain upgrade: level ' + gameData.tpcLevel + '<br>(Cost:' + gameData.tpcCost +')'
    document.getElementById('tpsecUpdate').innerHTML = 'Gain' + gameData.tpsec + 'things per second<br>(Cost:' + gameData.tpsecCost +')'
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
}