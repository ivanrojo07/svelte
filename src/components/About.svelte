<script>
    let someText = `Backend Developer at Global Sight`;
    let count = 0;
    let styles = {
        darkMode: false
    };
    function handleClick(){
        count += 1;
    }
    function toggle(){
        styles.darkMode = !styles.darkMode;
        window.document.body.classList.toggle('dark-mode');
    }
</script>
<div class="About">
    {#if !styles.darkMode}
        <p>
            {someText}
        </p>
    {:else}
        <p>Hello Dark Mode</p>
    {/if}
    <button on:click={handleClick}>Click {count === 0 ? "" : count} </button>

    <button on:click={toggle}>Dark Mode</button>
</div>

<style>
    p{
        color: var(--theme-color)
    }
</style>