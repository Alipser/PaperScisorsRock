console.log("conected JS");

const paper = document.querySelector(".upaper");
const scisors = document.querySelector(".uscisor");
const rock = document.querySelector(".urock");
const selection = document.querySelector(".user-option");
const imagenPlayerSelected = document.querySelector("img");
const result = document.querySelector(".announcement");
const child=document.querySelector("p")
const displayBotSelection=document.querySelector(".bot-select")


const machineOptions = ["piedra", "papel", "tijeras"];
var winner = "";
var playerselection = "aún no ha legido";


selection.addEventListener("click", selectioned);

function selectioned(e) {
  var selection = e.target;
  console.log(selection.classList);
  if (selection.classList.contains("upaper")) {
    console.log("ha elegido papel");
    playerselection = "papel";
    imagenPlayerSelected.src = "./Bin/paper.png";
    game(playerselection);
    
  } else if (selection.classList.contains("urock")) {
    console.log("ha elegido piedra");
    imagenPlayerSelected.src = "./Bin/stone.png";
    playerselection = "piedra";
    game(playerselection);
  } else {
    console.log("ha elegido tijeras");
    imagenPlayerSelected.src = "./Bin/scissors.png";
    playerselection = "tijeras";
    game(playerselection);
    
  }
}

function game(playerselection) {
    var machineSelect =machineTurn()
  
  switch (true) {
    case playerselection === "piedra" && machineSelect === "papel":
      winner = "cpu";
      
    //  console.log(winner);
      break;
    case playerselection === "piedra" && machineSelect === "tijeras":
    //  console.log(winner);
      winner = "usuario";
      
      break;
    case playerselection === "tijeras" && machineSelect === "papel":
      winner = "usuario";
    //  console.log("gano usuario");
      break;
    case playerselection === "tijeras" && machineSelect === "piedra":
      winner = "cpu";
    //  console.log(winner);
      break;
    case playerselection === "papel" && machineSelect === "piedra":
    winner="usuario"  
    //console.log(winner);
      break;
    case playerselection === "papel" && machineSelect === "tijeras":
      winner = "cpu";
      //console.log(winner);
      break;
    default:
        winner="empate"
      
  }
  console.log(winner)
  
  winnerannouncement(winner)
}

function winnerannouncement(winner){
    clearresult()
    var child = result.appendChild(document.createElement('p'));
    
    if (winner==="usuario"){
        child.innerText="Has ganado esta partida !Felicidades!"        
    }else if(winner==="cpu"){
        child.innerText="Lo siento, Acabas de perder"   
    }else{
        child.innerText="No tan mal,  ha sido un empate"
    }
}

function clearresult(){
    const child=document.querySelector("p")
    result.removeChild(child)
    console.log("se intento")
}

function machineTurn(){
    const machineSelect =
    machineOptions[Math.floor(Math.random() * machineOptions.length)];
    displaybot(machineSelect)

    
    return machineSelect
}

function displaybot(machineSelect){
    displayBotSelection.classList.remove('bot-select');
    switch(machineSelect){
        case ("papel"): 
        displayBotSelection.classList.add('paper')
        displayBotSelection.classList.remove('scisors','rock');
        break
        case ("piedra"): 
        displayBotSelection.classList.add('rock');
        displayBotSelection.classList.remove('scisors','paper');
        break
        case ("tijeras"): 
        displayBotSelection.classList.add('scisors');
        displayBotSelection.classList.remove('rock','paper');
        break
    }

}