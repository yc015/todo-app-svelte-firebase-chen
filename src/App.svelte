<script>
	import Login from "./Login.svelte";
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css">
</svelte:head>

<style>
	h1 {
	  color: purple;
	}
	main {
	  margin: 20px;
	  background-color: rgba(145, 110, 210, 0.6);
	}
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding-bottom: 10px;
		color:#541212;
}
</style>

<main class="content">
	<div>
		<h1>Your TODO App!</h1>
	</div>
	<div>
		<Login />
	</div>
</main>
