<script>
	
	let newItem = $state("");

	
	let items = $state([
		{ name: "Mjölk", bought: false },
		{ name: "Bröd", bought: false },
		{ name: "Ägg", bought: true },
		{ name: "Smör", bought: false }
	]);

	
	function addItem() {
		if (newItem.trim() === "") return; 

		items.push({ name: newItem, bought: false });
		newItem = "";
	}

	
	function removeItem(index) {
		items.splice(index, 1);
	}

	
	function toggleBought(item) {
		item.bought = !item.bought;
	}
</script>

<main class="container">

	<h1>Shoppinglist</h1>

	<div class="categories_container">

		
		<section>
			<h2>Varor att köpa</h2>

			<input
				placeholder="Skriv en vara..."
				bind:value={newItem}
			/>

			<button on:click={addItem}>Lägg till</button>

			<ol>
				{#each items as item, i}
					{#if !item.bought}
						<li>
							{item.name}
							<button on:click={() => toggleBought(item)}>köpt</button>
							<button on:click={() => removeItem(i)}>x</button>
						</li>
					{/if}
				{/each}
			</ol>
		</section>

		
		<section>
			<h2>Köpta varor</h2>

			<ul>
				{#each items as item, i}
					{#if item.bought}
						<li>
							{item.name}
							<button on:click={() => toggleBought(item)}>bak</button>
							<button on:click={() => removeItem(i)}>x</button>
						</li>
					{/if}
				{/each}
			</ul>
		</section>

	</div>

</main>

<style>

.container{
	background-color: #2b2b40;
	width: 60vw;
	height: 70vh;
	border-radius: 20px;
	margin: auto;
	padding: 10px;
	color: white;

	display: grid;
	grid-template-rows: 1fr 9fr 1fr;
}


.container h1{
	background-color: rgba(0,0,0,0.3);
	border-radius: 10px;
	text-align: center;
	padding: 10px;

	justify-self: center;
	align-self: center;
}


.categories_container{
	height: 100%;
	background-color: rgba(255,255,255,0.05);

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 10px;
	padding: 10px;
}


.categories_container section{
	height: 100%;
	padding: 10px;
	border-radius: 10px;
}


.categories_container section:first-child{
	background-color: rgba(0,0,0,0.1);
}

.categories_container section:last-child{
	background-color: rgba(0,0,0,0.3);
}

section h2{
	background-color: rgba(0,0,0,0.4);
	padding: 10px;
	text-align: center;
	font-size: 1.3rem;
	margin-bottom: 10px;
	border-radius: 8px;
}


input{
	padding: 6px;
	border-radius: 5px;
	border: none;
	width: 100%;
	margin-bottom: 5px;
}

button{
	padding: 5px 8px;
	margin: 2px;
	border-radius: 5px;
	border: none;
	cursor: pointer;
}


ol, ul{
	list-style-position: inside;
	padding: 0;
}

li{
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: rgba(255,255,255,0.1);
	margin: 5px 0;
	padding: 5px;
	border-radius: 5px;
}
</style>
