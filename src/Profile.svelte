<!-- Profile component of the todo app -->
<!-- Adapted from https://github.com/fireship-io/182-svelte-firebase/blob/master/src/Profile.svelte -->

<!-- Export the user meta data -->
<script>
    // Export the displayName of the logged in user
    export let displayName;
    // Export the url to the user profile photo
    export let photoURL;
    // Export the user id
    export let uid;
</script>


<!-- Layout of the Profile component -->
<!-- Welcome the users with their displayname -->
<h3>What's up { displayName }!</h3>

<!-- Display the user profile photo -->
<img src={ photoURL } width="100" alt="user avatar">
<!-- Show their user id -->
<p>Your userID is { uid }</p>