# Lifesort

[![Lifesort website on different devices](src/assets/readme/lifesort-responsive.png)](https://life-sort.herokuapp.com/)

Lifesort is a task management application, it allows users of the site to sign up and login with their own profile. From there they are able to create tasks: A detailed custom task, a lesser detailed quick task and also holiday tasks.

The custom task option allows the user to create a more detailed task with the ability to create a title, description, set a due date, set a start date among other options as well. The aim for the custom task option is to be able to set a task or an event that would require extra detail such as setting up an event for an annual meeting.

The quick task option allows users to create a less detailed task with the ability to create a title, description, priority, due date, and current status of task. The aim for the quick task option is allow users to create a list of normal everyday tasks that would need completing such as mowing the grass.

The holiday task option allows users to create a detailed task list focused on what would be required for a holiday. The aim for the holiday task option is to allow users of the site to organise themselves for a future trip away.

Users of the site have full CRUD control over their own tasks with the ability to see their tasks all at once if they are using a desktop computer or in separate lists they can click on a task to see a single task. The user has access to the edit function and delete function throughout these pages. If a user is on a smaller device they have access to all of the tasks created but due to the application having infinite scroll the access is separated out to each individual list of tasks created.

Users of the site also have access to their own profile page and have the ability to edit their profile and update their profile image which is displayed in the navigation bar of the application.

Lifesort was designed with the focus on an application that can be used on desktop computers but also on mobile devices as well.

Due to the nature of the application I designed it so the profile and task owner has access only to their own data.

Lifesort has a separate front-end built with React and a back-end built with the Django-Rest-Framework. Both of the front-end and back-end have been deployed on [Heroku](https://www.heroku.com/)

This ReadMe is for the front end section of the application.

### Deployed front-end site [Lifesort front-end live site](https://life-sort.herokuapp.com/)
### Deployed back-end API [Lifesort back-end API live site](https://life-sort-api.herokuapp.com/)

### Back-end repository [Lifesort back-end repository](https://github.com/carl2087/life-sort-drf-api)

## Project Goals

 * To create a task application where users can create tasks that vary in detail.
 * For users of the site to have full CRUD functionality within the tasks that they create.
 * Deliver a simple and intuitave user experience suitable for a wide range of users.
 * Offer a minimal set of features chosen in order to deliver a useful application within an achievable development timeframe, whilst laying a solid foundation to add additional features in the future.

## Planning

Planning for the application was based on an agile methodology utilising GitHubs issues and projects tabs to create user stories for the site. There are user stories which are for the project goals of the site and what I wanted to achieve and I set up project tasks as well which incorporate the what is required for each step of the project.

The user stories requiring implementation to achieve a minimum viable product where then mapped to API endpoints to required to support the desired functionality. 

[Lifesort Kanban board](https://github.com/users/carl2087/projects/10)

[Lifesort project tasks](https://github.com/users/carl2087/projects/11)

[Lifesort user stories](https://github.com/carl2087/life-sort-task-app/issues)

## Design



### Wireframes

