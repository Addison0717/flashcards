// var cardArray = [];
var cardObject = {};

function Card() {
    let ts = new Date();
    this.side1 = prompt("Question:");
    this.side2 = prompt("Answer:");
    this.timestamp = ts.getTime(); // Add timestamp dynamically later
    this.cardStatus = 1; // Add status later

    this.flipCard = function() {
      if (this.cardStatus === 1) {
        this.cardStatus = 2;
      } else {
        this.cardStatus = 1;
      }
    };
}

var createCard = function() {
  let variable = new Card();
  return variable;
};

var addCard = function(card){

var cardElement = document.createElement("div");
cardElement.className="card";
cardElement.setAttribute("data-timestamp", card.cardStatus);
cardElement.innerHTML =

      `<p>Side: ${card.cardStatus}</p>

      <p id="question">${card.side1}</p>

      <p id="answer">${card.side2}</p>

      <i class="fas fa-pencil-alt"></i>

      <i class="far fa-trash-alt"></i>`;


var cardArea = document.getElementsByClassName("cardcontainer")[0];
cardArea.appendChild(cardElement);
// cardArray.push(card);
cardObject[card.timestamp] = card;

};
