<!-- List of Todos component -->
<!-- Adapted from https://github.com/fireship-io/182-svelte-firebase/blob/master/src/Todos.svelte -->

<script>
    // Import the todo item component
    import TodoItem from './TodoItem.svelte';
    // Get the database instance
    import { db } from './firebase';
    // Function for getting a stream of mapped documents 
    import { collectionData } from 'rxfire/firestore';
    import { startWith } from 'rxjs/operators';

    // User ID passed from parent
    export let uid;

    // Todo input hint Text
    let text = 'Your task goes here...';

    // Query the stored todo data where uid matches with that of the logged in user
    const query = db.collection('todos').where('uid', '==', uid).orderBy('created');

    // Get a stream of document from the queried data
    let todos = collectionData(query, {idField: 'id'}).pipe(startWith([]));

    // Function adding a todo item from user input to firebase database
    function add() {
        db.collection('todos').add({ uid, text, complete: false, created: Date.now() });
        // Clear the text field after adding the todo item
        text = '';
    }

    // Update the completeness status of a todo item
    function updateStatus(event) {
        // Get the new completeness status and item id from the dispatched event
        const { id, newStatus } = event.detail;
        // Update the completeness status of the todo in the database
        db.collection('todos').doc(id).update({ complete: newStatus });
    }

    // Remove a todo item
    function removeItem(event) {
        // Get the id of the removed item
        const { id } = event.detail;
        // Remove the document with that id from the database
        db.collection('todos').doc(id).delete();
    }
</script>

<!-- Style the input box -->
<style>
    /* Add 10px padding to the input component */
    input {
        padding: 10px;
    }
</style>

<!-- List all the todo items in a list -->
<ul>
    {#each $todos as todo}
        <!-- For each todo item specify the functions that should be invoked during the -->
        <!-- remove and toggle events, which are removeItem and updateStatus respectively -->
        <TodoItem {...todo} on:remove={removeItem} on:toggle={updateStatus} />
        
    {/each}
</ul>

<!-- Input box for adding new todo item -->
<input bind:value={text}>

<!-- Button that triggers the add function when it is on click -->
<button on:click={add}>Add Task</button>
