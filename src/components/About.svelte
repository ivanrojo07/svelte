<script>
    let someText = `Backend Developer at Global Sight`;
    let count = 0

    function handleClick(){
        count += 1;
    }
</script>
<div class="About">
    <p>
        {someText}
    </p>
    <button on:click={handleClick}>Click {count === 0 ? "" : count} </button>
</div>

<style>
    p{
        color: var(--theme-color)
    }
</style>