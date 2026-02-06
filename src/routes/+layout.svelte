<script>
    import favicon from '$lib/assets/favicon.svg';

    let { children } = $props();
    import { base } from '$app/paths';
</script>



<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<nav>
<a href="{base}/">Hem</a>
<a href="{base}/photoapp">Photoapp</a>
<a href="{base}/register">Register</a>
<a href="{base}/shoppinglist">Shoppinglist</a>
<a href="{base}/memory">Memory</a>
<a href="{base}/chat">Chat</a>
<a href="{base}/search">Search</a>
</nav>

{@render children?.()}