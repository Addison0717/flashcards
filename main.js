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
        $(`div[data-timestamp='${this.timestamp}']`).children('#answer').css( 'display', "block" );
        $(`div[data-timestamp='${this.timestamp}']`).children('#question').css( 'display', "none" );
      } else {
        this.cardStatus = 1;
        $(`div[data-timestamp='${this.timestamp}']`).children('#question').css( 'display', "block" );
        $(`div[data-timestamp='${this.timestamp}']`).children('#answer').css( 'display', "none" );
      }
    };

    this.deleteCard = function() {
      //remove card from DOM
      let cardArea = document.getElementsByClassName("cardcontainer")[0];
      let cardDomElement = document.querySelector(`div[data-timestamp='${this.timestamp}']`);
      cardArea.removeChild(cardDomElement);

      //remove card from cardObject
      delete cardObject[this.timestamp];

      //to do: update counters etc., add confirmation modal
    };

    this.editCard = function() {
      //Change questions and answers in cardObject.
      this.side1 = prompt("Edit the new question: ");
      this.side2 = prompt("Edit the new answer: ");

      //Update html
      let cardDomElement = document.querySelector(`div[data-timestamp='${this.timestamp}']`);
      cardDomElement.children.question.innerHTML = this.side1;
      cardDomElement.children.answer.innerHTML = this.side2;
    }
}

var createCard = function() {
  let variable = new Card();
  return variable;
};

var addCard = function(card){

var cardElement = document.createElement("div");
cardElement.className="card";
cardElement.setAttribute("data-timestamp", card.timestamp);
cardElement.addEventListener('click', function() {
  card.flipCard();
});

cardElement.innerHTML =
      `<p>Side: ${card.cardStatus}</p>
      <p id="question">${card.side1}</p>
      <p id="answer" style="display:none;">${card.side2}</p>
      <i class="fa fa-pencil-alt" onclick="cardObject[${card.timestamp}].editCard()"></i>
      <i class="fa fa-trash-alt" onclick="cardObject[${card.timestamp}].deleteCard()"></i>`;

  var cardArea = document.getElementsByClassName("cardcontainer")[0];
  cardArea.appendChild(cardElement);
  // cardArray.push(card);
  cardObject[card.timestamp] = card;
};

//For debugging only!
document.addEventListener('DOMContentLoaded', function() {
  addCard(createCard())
});
