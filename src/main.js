// Main script for the todo app
// Create an instance of the app
// Import App 
import App from './App.svelte';

// Create an instance of the todo App
const app = new App({
	target: document.body
});

// Export the app object
export default app;