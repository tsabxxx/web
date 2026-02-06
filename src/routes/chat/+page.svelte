<script>
  import ElizaBot from 'elizabot';
  import { enhance } from "$app/forms";
 

  const eliza = new ElizaBot();

  let chat = $state([
    { user: "Eliza", message: eliza.getInitial(), time: new Date().toLocaleTimeString() }
  ]);

  async function write(message) {
    if (!message) return;

    // Lägg till användarens meddelande
    chat.push({ user: "User", message, time: new Date().toLocaleTimeString() });
    chat = chat;

    // visa typing bubble
    const element = document.getElementById("visible");
    element.style.display = "flex";

    // delay 1–2 sek
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));

    // Lägg till Elizas svar
    const reply = eliza.transform(message);
    chat.push({ user: "Eliza", message: reply, time: new Date().toLocaleTimeString() });
    chat = chat;

    // dölj typing bubble
    element.style.display = "none";
  }
</script>

<h1>Chat med Eliza</h1>

<main>
  <section>
    {#each chat as msg}
      <article class={msg.user} data-time={msg.time}>
        <p>{msg.message}</p>
      </article>
    {/each}

    <!-- Typing bubble -->
    <article id="visible">
      <span class="circle"></span>
      <span class="circle"></span>
      <span class="circle"></span>
    </article>
  </section>

  <form method="post"
    use:enhance={({ formElement, formData, cancel }) => {
      cancel();
      const text = formData.get("text");
      write(text);
      formElement.reset();
    }}>
    <input type="text" name="text" placeholder="Skriv ett meddelande..." required />
  </form>
</main>

<style>
  main {
    width: 60vw;
    height: 70vh;
    margin: auto;
    padding: 10px;
    background: #222;
    display: grid;
    grid-template-rows: 90% 10%;
  }

  section {
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  article, input {
    margin: 5px;
    padding: 10px;
    border-radius: 10px;
    width: 90%;
  }

  /* USER & ELIZA STYLING */
  .User {
    background: #2563eb;
    align-self: flex-end;
    color: white;
  }

  .Eliza {
    background: #374151;
    align-self: flex-start;
    color: white;
  }

  /* namn före */
  article::before {
    content: attr(class);
    font-size: 0.7em;
    display: block;
    color: lightgray;
  }

  /* tid efter */
  article::after {
    content: attr(data-time);
    font-size: 0.6em;
    display: block;
    text-align: right;
    color: gray;
  }

  /* typing bubble */
  #visible {
    width: 100px;
    height: 60px;
    display: none;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: white;
    animation: typing 1s ease-in-out infinite;
  }

  .circle:nth-child(1){ animation-delay: 0ms; }
  .circle:nth-child(2){ animation-delay: 333ms; }
  .circle:nth-child(3){ animation-delay: 666ms; }

  @keyframes typing {
    0% { transform: scale(1); }
    25% { transform: scale(1); }
    50% { transform: scale(1.4); }
    100% { transform: scale(1); }
  }

  /* pseudo-classes */
  article:hover {
    filter: brightness(1.2);
    transition: 0.2s;
  }

  input:focus {
    border: 2px solid lime;
    outline: none;
  }

  input::placeholder {
    color: gray;
    font-style: italic;
  }
</style>
