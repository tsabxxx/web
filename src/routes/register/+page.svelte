<script>
	
	let name = "";
	let email = "";
	let password = "";

	
	let color = "black";

	
	let colors = [
		{ namn: "Blå", value: "blue" },
		{ namn: "Röd", value: "red" },
		{ namn: "Grön", value: "green" },
		{ namn: "Gul", value: "yellow" },
		{ namn: "Lila", value: "purple" },
		{ namn: "Svart", value: "black" },
		{ namn: "Orange", value: "orange" }
	];

	function handleSubmit() {
		alert(
			`Välkommen!\n\nNamn: ${name}\nE-post: ${email}\nLösenord: ${password}\nFavoritfärg: ${color}`
		);
	}
</script>

<main>
	<div class="container">

		<h1>Registrering</h1>

		<form on:submit|preventDefault={handleSubmit}>

			
			<div class="color-preview" style="background-color:{color};"></div>

			
			<label for="name">Namn:</label>
			<input type="text" id="name" bind:value={name} required>

			
			<label for="email">E-post:</label>
			<input type="email" id="email" bind:value={email} required>

			
			<label for="password">Lösenord:</label>
			<input type="password" id="password" bind:value={password} required>

			
			<label for="color">Favoritfärg:</label>
			<select id="color" bind:value={color}>
				{#each colors as c}
					<option value={c.value}>{c.namn}</option>
				{/each}
			</select>

			
			<input type="submit" value="Registrera">

		</form>
	</div>
</main>

<style>
	
	main{
		background-image: url("https://t4.ftcdn.net/jpg/05/21/65/59/360_F_521655929_N80d5GaCQJ2VP073PfTXJTe9mkvsNtHE.jpg");
		background-size: cover;
		background-repeat: no-repeat;
		width: 100%;
		height: 100%;
		padding: 5%;
		box-sizing: border-box;
	}

	
	.container{
		border: solid 5px rosybrown;
		border-radius: 10px;

		width: 35%;
		height: 80%;
		background-color: #3a2e3b;

		margin: auto;

		
		display: flex;
		flex-direction: column;
		align-items: center;        /* x-led */
		justify-content: space-evenly; /* y-led */

		padding: 20px;
		box-sizing: border-box;
	}

	h1{
		color: white;
	}

	form{
		width: 80%;
		display: flex;
		flex-direction: column;
		gap: 10px;
		color: white;
	}

	label{
		font-weight: bold;
	}

	input, select{
		padding: 8px;
		border-radius: 5px;
		border: none;
	}

	input[type="submit"]{
		margin-top: 15px;
		background-color: rosybrown;
		color: white;
		font-weight: bold;
		cursor: pointer;
	}

	input[type="submit"]:hover{
		background-color: #c48b8b;
	}

	
	.color-preview{
		width: 100px;
		height: 100px;
		border-radius: 50%;
		overflow: hidden;
		margin: auto;
		border: 3px solid white;
	}
</style>
