var player = null
var selectedPlayer = document.getElementById(`selected-player`)

changePlayer(`X`)

function chooseSquare(id) {
    var square = document.getElementById(id)

    square.innerHTML = player
    square.style.color = `#000`
}

function changePlayer(value) {
    player = value
    selectedPlayer.innerHTML = player

}