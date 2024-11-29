// get thing button function

function getThing() {
    gameData.thing += gameData.tpc
    document.getElementById('thingCurrent').innerHTML = 'Thing: ' + gameData.thing
}

// buy thing per click function

function buytpc() {
    if (gameData.thing >= gameData.tpcCost) {
        gameData.thing -= gameData.tpcCost
        gameData.tpc += 1
        gameData.tpcCost = Math.floor(gameData.tpcCost * 1.5)
        gameData.tpcLevel += 1
        document.getElementById('thingCurrent').innerHTML = 'Thing: ' + gameData.thing
        document.getElementById('tpcUpdate').innerHTML = 'Thing gain upgrade: level ' + gameData.tpcLevel + '<br>(Cost:' + gameData.tpcCost +', + 1 per level)'
    }
}

// get thing per second function

function getThingPerSecond() {
    gameData.thing += gameData.tpsec
    document.getElementById('thingCurrent').innerHTML = 'Thing: ' + gameData.thing
}

// buy thing per second funciton

function buytpsec() {
    if (gameData.thing >= gameData.tpsecCost) {
        gameData.thing -= gameData.tpsecCost
        gameData.tpsec += 1
        gameData.tpsecCost = Math.floor(gameData.tpsecCost * 2)
        gameData.tpsecLevel += 1
        document.getElementById('thingCurrent').innerHTML = 'Thing: ' + gameData.thing
        document.getElementById('tpsecUpdate').innerHTML = 'Gain ' + gameData.tpsec + ' things per second<br>(Cost: ' + gameData.tpsecCost +', + 1 per level)'
    }
}

// get thing every second

var getTpsecLoop = window.setInterval(function() {
    getThingPerSecond()
}, 1000)