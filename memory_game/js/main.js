//console.log("Up and running!");





//alert("Hello friends!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[2];

var cardTwo= cards[3];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log(cardsInPlay);

console.log("user flipped " + cardOne);
console.log("user flipped " + cardTwo);


if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay [1]) {
		alert("You found a match!");
	} else {
		alert("Sorry! Try again");
	}
}
