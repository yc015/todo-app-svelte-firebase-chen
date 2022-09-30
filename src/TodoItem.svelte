<!-- Todo item component -->
<!-- Adapted from https://github.com/fireship-io/182-svelte-firebase/blob/master/src/TodoItem.svelte -->
<script>
    // Import transition animation
    import { fade, fly } from 'svelte/transition';

    // Import the function for creating event dispatcher
    import { createEventDispatcher } from 'svelte';

    // Create the event dispatcher
    const dispatch = createEventDispatcher();
    
    // Define the remove event function
    function remove() {
        // Dispatch the event type 'remove' and id of the removed todo item
		dispatch('remove', { id });
	}

    // Define the toggleStatus event function
	function toggleStatus() {
        // change the new status to the opposite of the original
        let newStatus = !complete;
        // Dispatch the event type 'toggle', id of the changed todo item, and its new completeness status
		dispatch('toggle', {
            id,
            newStatus
        });
    }
    

    export let id; // ID of the document that stores a todo item
    export let text; // todo text
    export let complete; // completeness of the todo item
</script>

<!-- Style the todo element -->
<style>
    /* Appearance for the complete todo item */
    .is-complete {
        /* Line cross the complete todo item */
        text-decoration: line-through;
        /* Mark the complete todo item in green */
        color: green;
    }

    li {
        /* Use flex display for the elements inside the todo item */
        display: flex;
        /* Use 1.2 element font size for the todo text */
        font-size: 1.2em;
        /* Bold the text */
        font-weight: bold;
    }

    /* Container for the completeness toggle button and remove button */
    span {
        margin-right: auto;
    }
</style>

<!-- Use the fly in and fade out animation for the todo item -->
<li in:fly="{{ x: 900, duration: 500 }}" out:fade>
    <!-- If the todo item is complete -->
    {#if complete}
        <!-- Mark text in green -->
        <span class="is-complete">
            { text }
        </span>
        <!-- Use a green check mark as the toggle status button -->
        <button class="is-button" on:click={toggleStatus}>
            ✔️
        </button>
    {:else}
        <!-- Otherwise show todo text in the default style -->
        <span>
            { text }
        </span>
        <!-- Use a red cross mark as the toggle status button -->
        <button class="is-button" on:click={toggleStatus}>
            ❌
        </button>
    {/if}

    <!-- Add the remove button -->
    <button class="is-button" on:click={remove}>
        🗑️
    </button>

</li>