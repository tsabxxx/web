<script>
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  
  let searchText = "";

  
  let history = [];

  onMount(() => {
    history = JSON.parse(sessionStorage.getItem("history") || "[]");
  });

  function handleSubmit(e) {
    e.preventDefault();

    const search = searchText.trim().toLowerCase();
    if (!search) return;

  
    if (!history.includes(search)) {
      history.unshift(search);
      history = history.slice(0, 5);
      sessionStorage.setItem("history", JSON.stringify(history));
    }

    goto('/search/' + search);
  }
</script>

<h1>Snart ska vi söka efter pokemons!</h1>

<form on:submit={handleSubmit}>
  <input
    type="text"
    name="search"
    placeholder="Sök upp en pokemon"
    bind:value={searchText}
  />
</form>


<footer>
  {#each history as item}
    <a href={"/search/" + item}>{item}</a>
  {/each}
</footer>

<style>
input {
  padding: 15px;
  font-size: 20px;
  border-radius: 10px;
  border: 2px solid #333;
}


footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
}

footer a {
  text-decoration: none;
  padding: 8px 12px;
  background: #efefef;
  border-radius: 8px;
  font-size: 16px;
  color: #333;
  transition: 0.2s;
}

footer a:hover {
  background: #ddd;
  color: #000;
}
</style>
