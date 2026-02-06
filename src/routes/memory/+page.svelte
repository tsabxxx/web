<script>
	
	let bluePoints = $state(0);
	let redPoints = $state(0);
	let blueTurn = $state(true);

	
	let flipCount = $state(0);
	let firstCard = null;
	let secondCard = null;

	
	const images = [
		"/gris.jpg",
		"/hund.jpg",
		"/katt.png",
		"/ko.jpg",
		"/lejon.jpg",
        "/elefant.jpg",
        "/ren.jpg",
		"/orm.jpg"
	];

	
	let cards = $state(
		[...images, ...images].map((img, i) => ({
			id: i,
			image: img,
			flipped: false,
			matched: false
		})).sort(() => Math.random() - 0.5)
	);

	
	function flip(card) {
	if (card.flipped || card.matched || flipCount === 2) return;

	card.flipped = true;
	flipCount++;

	if (flipCount === 1) {
		firstCard = card;
	} 
	else if (flipCount === 2) {
		secondCard = card;

		
		if (firstCard.image === secondCard.image) {
			firstCard.matched = true;
			secondCard.matched = true;

			if (blueTurn) bluePoints++;
			else redPoints++;

			
			flipCount = 0;
			firstCard = null;
			secondCard = null;
			cards = cards;
		} 
		
		else {
			setTimeout(() => {
				cards.forEach(c => {
					c.flipped = c.matched;
				});
				resetTurn();
			}, 1000);
		}
	}
}


	function resetTurn() {
		flipCount = 0;
		firstCard = null;
		secondCard = null;
		blueTurn = !blueTurn; 
		cards = cards; 
	}
function restartGame() {
		bluePoints = 0;
		redPoints = 0;
		blueTurn = true;

		flipCount = 0;
		firstCard = null;
		secondCard = null;

		
		cards = [...images, ...images].map((img, i) => ({
			id: i,
			image: img,
			flipped: false,
			matched: false
		})).sort(() => Math.random() - 0.5);
        
	}
</script>

<h1>Memory</h1>

<button on:click={restartGame}>Restart</button>

<main>
	{#each cards as card}
		<div 
			class="card" 
			class:flipped={card.flipped}
			on:click={() => flip(card)}
		>
			<img class="front" src={card.image} alt="front">
			<img class="back" src="bakkort.jpg" alt="back">
		</div>
	{/each}
</main>


<aside class="blue">
	<p>{bluePoints}</p>
</aside>

<aside>
	<p>{redPoints}</p>
</aside>


<aside class="turn" class:blue={blueTurn}></aside>

<style>

h1{
	text-align: center;
	font-size: 40px;
	margin-bottom: 20px;
}
button{
	display: block;
	margin: 10px auto;
	padding: 10px 20px;
	font-size: 18px;
	border-radius: 8px;
	border: none;
	background: orange;
	cursor: pointer;
}

button:hover{
	background: darkorange;
}

main{
	display: grid;
	grid-template-columns: repeat(4, 100px);
	grid-template-rows: repeat(3, 100px);
	gap: 10px;
	justify-content: center;
}


.card{
	width: 100px;
	height: 100px;
	border: 1px solid black;
	position: relative;
	transform-style: preserve-3d;
	transition: transform 0.5s;
	cursor: pointer;
}


.flipped{
	transform: rotateY(180deg);
}


.card img{
	position: absolute;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
}


.front{
	transform: rotateY(180deg);
}


.back{
	transform: rotateY(0deg);
}


aside{
	width: 100px;
	height: 100px;
	position: fixed;
	bottom: 10px;
	right: 10px;
	background-color: red;
	display: flex;
	justify-content: center;
	align-items: center;
}

aside.blue{
	background-color: blue;
	left: 10px;
	right: auto;
}

p{
	font-size: 30px;
	color: white;
}


.turn{
	width: 100px;
	height: 100px;
	position: fixed;
	bottom: 10px;
	right: 10px;
	z-index: -1;
	box-shadow: 0 0 10px 10px yellowgreen;
}

.turn.blue{
	left: 10px;
	right: auto;
}
</style>
