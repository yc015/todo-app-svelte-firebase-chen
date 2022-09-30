<!-- Homepage of the todo app -->
<!-- Adapted from https://github.com/fireship-io/182-svelte-firebase/blob/master/src/App.svelte -->

<script>
	// import the login component from the svelte
	import Login from "./Login.svelte";
</script>

<svelte:head>
	<!--Use the bulma stylesheet-->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css">
</svelte:head>

<style>
	/* Add additional style for heading 1 */
	h1 {
		/* Color the heading text */
		color: purple;
	}
	/* Style the main component */
	main {
		/* Margin around the main box */
		margin: 20px;
		/* Light purple background */
		background-color: rgba(145, 110, 210, 0.6);
		/* Fill the whole screen */
		height: 100%;
		width: 100%;
	}
	div {
		/* Use flex display model */
		display: flex;
		/* Center all the flex items inside the div */
		justify-content: center;
		align-items: center;
		/* Center align all the text inside div */
		text-align: center;
		/* Add 10px padding at the bottom */
		padding-bottom: 10px;
		/* Use dark brick color for the text */
		color:#541212;
}
</style>

<main class="content">
	<!-- Define the layout of the todo app page -->
	<div>
		<!-- Add todo app title/heading -->
		<h1>Your TODO App!</h1>
	</div>
	<div>
		<!-- Add the Login component -->
		<Login />
	</div>
</main>
