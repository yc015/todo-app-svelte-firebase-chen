<!-- Login Component of the todo app -->
<!-- Adapted from https://github.com/fireship-io/182-svelte-firebase/blob/master/src/Login.svelte -->

<script>
    // Import the profile component
    import Profile from './Profile.svelte';
    // Import the todo list component
    import Todos from './Todos.svelte';

    // Get the authentification service object and google authentification provide object from the firebase
    import { auth, googleProvider } from './firebase';
    // Get the observer for authentification state
    import { authState } from 'rxfire/auth';

    // Block-scoped variable user
    let user;

    // Observe the authentification state
    const unsubscribe = authState(auth).subscribe(u => user = u);

    // Create the function for login with Google Credentials
    function login() {
        auth.signInWithPopup(googleProvider);
    }
</script>

<!-- Style the section component -->
<style>
	section {
        /* Add a transparent white background to highlight this area */
        background-color: rgba(255, 255, 255, 0.3);
        /* Pad the components inside */
        padding: 3%;
    }
</style>

<!-- Layout of the Login component -->
<section>
    <!-- If user logged in (user is not null) -->
    {#if user}
        <!-- Pass user's info to the Profile component to create the user profile -->
        <Profile {...user} />
        <!-- Button for Log out -->
        <button on:click={ () => auth.signOut() } class="button">Logout</button>
        <!-- Add a horizontal line betwen the Profile, Log out components and todo items list -->
        <hr>
        <!-- Create the todo list using the data stored for this user (indexed by user's uid) -->
        <Todos uid={user.uid} />
    {:else}
        <!-- Otherwise, if user has not logged in yet, show the welcome message and promote users to log in -->
        <br>Welcome to the TODO APP! <br>
        Sign in with your Google Credentials and <br> 
        start to build your action list today! <br><br>
        <!-- Button for logging in with the Google Credentials -->
        <button on:click={login} class="button">
            Signin with Google
        </button>
    {/if}
</section>
