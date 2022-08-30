document.addEventListener('DOMContentLoaded', () => {
  let cards = document.querySelectorAll(".card")
  let restart = document.querySelector("#restart")

  cards.forEach((card) => {
    card.addEventListener('click', handleClick)
  });

  restart.addEventListener('click', reset)

})

function handleClick(event) {
  let card = event.target; 
  let position = card.id;


  if(handleMove(position)) {
    setTimeout(() => {
      if(playerTime == 0) {
        alert(`Jogador ${playerTime + 1} venceu! 🧙‍♂️`)
      } else {
        alert(`Jogador ${playerTime + 1} venceu! 🐉`)
      }
    }, 10);
  }  
  updateCard(position);  
}

function updateCard(position) {
  let card = document.getElementById(position.toString())
  let symbol = board[position];
  card.innerHTML = `<div class='${symbol}'></div>`
}

function reset() {
  let cards = document.querySelectorAll(".card");
  
  clear();  

  cards.forEach(card => {
    card.innerHTML = ``    
  });
}





