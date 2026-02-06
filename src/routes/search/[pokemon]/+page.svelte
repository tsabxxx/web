<script>
  export let data;
</script>

{#await data}
  <p>.. waiting</p>
{:then pokemon}

<article>
  {#each Object.entries(pokemon.response.sprites) as sprite}
    {#if typeof sprite[1] === "string"}
      <img src={sprite[1]} alt="pokemon sprite" />
    {/if}
  {/each}
</article>

<h1>{pokemon.response.name}</h1>

<section>
  <p>Height: {pokemon.response.height}</p>
  <p>Weight: {pokemon.response.weight}</p>
  <p>Base experience: {pokemon.response.base_experience}</p>
</section>

{/await}

<style>
article {
  display: flex;
  width: 90%;
  height: 30%;
  gap: 1em;
  flex-wrap: wrap;
}
img {
  height: 100px;
}
</style>
