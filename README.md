Yida Chen

# todo-app-svelte-firebase-chen

The project is hosted on [https://todo-app-svelte.herokuapp.com/](https://todo-app-svelte.herokuapp.com/).

## Content

under the src/ folder  
- main.js: Main javascript file for launching the todo app
- firebase.js: Javascript file for log in and connecting with the firebase database 
- App.svelte: The homepage of the todo app (layout + control)
- Login.svelte: The login component of the todo app (login section layout + authentification)
- Profile.svelte: The Profile component of the todo app (Profile section layout)
- Todos.svelte: The todo list component of the todo app (layout + control for listing, adding, marking, and removing todo item)
- TodoItem.svelt: The model of the todo item in this app. File defines two actions on a todo item: (1) toggle to mark complete/incomplete and (2) remove todo. File also defines the visual layout of a todo item.

## How to interact with this app

Go to the page [https://todo-app-svelte.herokuapp.com/](https://todo-app-svelte.herokuapp.com/).  
1. Click "Sign in with Google" button
2. Sign in the app with your Google credentials
3. Once logged in, you will see your username and ID on the top of the screen.
4. Add some task by typing your task description in the bottom input box and click "Add Task" button.
5. To mark a task as complete, click the red cross button on the right, which will switch the button to a green check mark. To unmark a complete task, click the green check button on its right.
6. To remove a task from the list, click the trash bin button on the 

