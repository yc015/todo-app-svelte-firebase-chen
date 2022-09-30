Yida Chen

# todo-app-svelte-firebase-chen

The project is hosted on [https://todo-app-svelte-chen.herokuapp.com/](https://todo-app-svelte-chen.herokuapp.com/).

## Content

under the src/ folder  
- main.js: Main javascript file for launching the todo app
- firebase.js: Javascript file for logging in and connecting with the firebase database 
- App.svelte: The homepage of the todo app (layout + control)
- Login.svelte: The login component of the todo app (login section layout + authentification)
- Profile.svelte: The Profile component of the todo app (Profile section layout)
- Todos.svelte: The todo list component of the todo app (layout + control for listing, adding, marking, and removing todo items)
- TodoItem.svelt: The model of the todo item in this app. The file defines two actions on a todo item: (1) toggle to mark complete/incomplete and (2) remove todo. The file also defines the visual layout of a todo item.

## How to interact with this app

Go to the page [https://todo-app-svelte-chen.herokuapp.com/](https://todo-app-svelte-chen.herokuapp.com/).  
1. Click the "Sign in with Google" button
2. Sign in to the app with your Google credentials
3. Once logged in, you will see your username and ID on the top of the screen.
4. Add some tasks by typing your task description in the bottom input box and clicking the "Add Task" button.
5. To mark a task as complete, click the red cross button on the right, which will switch the button to a green check mark. To unmark a complete task, click the green check button on its right.
6. To remove a task from the list, click the trash bin button on the task's right
7. To Log out from your account, click the Logout button under your profile.

## References
[1] The creation of this todo app follows the instructions on this website: "Svelte Realtime Todo List with Firebase," Jeff Delaney, [https://fireship.io/lessons/svelte-v3-overview-firebase/](https://fireship.io/lessons/svelte-v3-overview-firebase/)  
[2] and this video: "Svelte 3 Reaction & QuickStart Tutorial," Fireship, [https://www.youtube.com/watch?v=043h4ugAj4c](https://www.youtube.com/watch?v=043h4ugAj4c)  
[3] and the source code from this GitHub Repository: "182-svelte-firebase," [Jeff Delaney](https://github.com/codediodeio), [https://github.com/fireship-io/182-svelte-firebase](https://github.com/fireship-io/182-svelte-firebase)  