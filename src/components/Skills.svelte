<script>
    let skills = [
        {
            id: 1,
            name: "HTML"
        },
        {
            id: 2,
            name: 'JavaScript'
        },
        {
            id: 3,
            name: 'CSS'
        }
    ]
</script>
<div class="Skills">
    <h3>Habilidades</h3>
    <hr>
    {#each skills as {name}, i}
        <li id={i}>{name}</li>
    {/each}
</div>

<style>
    .Skills{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    ul{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    li{
        display: inline;
        margin: 0 0 0 0.4em;
    }
</style>