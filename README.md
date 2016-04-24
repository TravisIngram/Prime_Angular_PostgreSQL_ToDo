### AngularJS, Node/Express, PostgreSQL based To-Do App

For this weekend's challenge, you are going to create a 'To-Do' application.  We'll be using either Angular or jQuery to manage the DOM, and Node/Express and PostgreSQL to handle the backend.

Here are the specific components for the challenge:

The MVP for this project will include the following items.

* Create a front end experience that allows a user to create a task.
* When the task is created, it should be stored inside of a database (SQL)
* Whenever a task is created the front end should refresh to show all tasks that need to be completed.
* Each task should have an option to 'Complete' or 'Delete'.
* When a task is complete, its visual representation should change on the front end.
  * For example, using a mix of CSS and application logic to modify the background of the task container, as well as the complete option 'checked off'.
* Store the current state of a given task, complete or incomplete, in the database.
* Deleting a task should remove it both from the Front End as well as the Database.
* Style the page with usability and presentation in mine.

We would recommend you spend some time thinking about how to approach this problem. Think through all the logic that will be needed prior to writing any code. Take your time, relax, and know that you are capable of knocking this out of the park!

Additionally, please include some way to recreate your initial database schema. This can be a .sql file with `CREATE TABLE` statements or you can create your schema automatically when your app loads.

### HARD MODE

In whatever fashion you would like, create an `are you sure: yes / no` option when deleting a task. Once again, you can interrupt this however you would like.

### PRO MODE

Adjust the logic so that completed tasks are brought to the bottom of the page, where the remaining tasks left to complete are brought to the top of the list.