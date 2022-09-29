<script>
    import Profile from './Profile.svelte';
    import Todos from './Todos.svelte';

    import { auth, googleProvider } from './firebase';
    import { authState } from 'rxfire/auth';

    let user;

    const unsubscribe = authState(auth).subscribe(u => user = u);

    function login() {
        auth.signInWithPopup(googleProvider);
    }
</script>

<style>
	section {
        background-color: rgba(255, 255, 255, 0.3);
        padding: 3%;
    }
</style>


<section>
{#if user}
    <Profile {...user} />
    <button on:click={ () => auth.signOut() }>Logout</button>
    <hr>
    <Todos uid={user.uid} />
{:else}
    <br>Welcome to the TODO APP! <br>
    Sign in with your Google Credentials and <br> 
    start to build your action list today! <br><br>
	<button on:click={login}>
		Sign in with Google
	</button>
{/if}
</section>