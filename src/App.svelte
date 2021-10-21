<script>
	import About from './components/About.svelte'
	import Text from './components/Text.svelte'
	import Person from './components/Person.svelte'
	export let name;
	export let lastName;
	let svelteLogo="https://arepa.s3.amazonaws.com/svelte-logo.png"
	const person = {
		name: "Ivan",
		lastName: "Rojo",
		age: 29
	}
</script>

<main>
	<h1>Hello {name} {lastName}!</h1>
	<About />
	<img src={svelteLogo} alt="Svelte Logo">
	<Text anotherText="Hola Mundo" />
	<Text />
	<Person {...person} />
	<!-- <Person name={person.name} lastName={person.lastName} age={person.age}/> -->
</main>

<style>
	/* APLICAR EN TODA LA APLICACIÓN */
	:global(body){
		background-color: #f2eee2;
		color: #0084f6;
	}
	:global(:root){
		--theme-color: purple;
	}
	:global(body.dark-mode){
		background-color: #1d3040;
		color: #bfc2c7;
	}
	main img {
		width: 40%;
	}
	/* solo en este modulo */
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>