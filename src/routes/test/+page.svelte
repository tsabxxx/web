<script>
  const boxes = [1, 2, 3, 4, 5, 6];
  const colors = {
    1: "red",
    2: "blue",
    3: "green",
    4: "yellow",
    5: "purple",
    6: "orange"
  };
</script>

<div class="grid-container">
  <div class="grid">
    {#each boxes as n}
      <div class="box" style="background-color: {colors[n]}">{n}</div>
    {/each}
  </div>
</div>

<style>
  .grid-container {
    display: flex;
    justify-content: center;
    padding: 2rem; /* space around the grid */
    background-color: #ccc; /* grey box behind */
    border-radius: 15px;
    width: min(720px, 95vw); /* slightly larger than grid */
    margin: auto;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    width: 100%;
  }

  .box {
    aspect-ratio: 1 / 1;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    color: white;
  }
</style>

