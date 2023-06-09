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

## Table of contents

- [Lifesort](#lifesort)
  * [Project Goals](#project-goals)
  * [Planning](#planning)
    + [Design](#design)
      - [Wireframes](#wireframes)
        * [Landing page](#landing-page)
        * [Dashboard](#dashboard)
        * [Individual task page](#individual-task-page)
        * [Create a task and edit a task](#create-a-task-and-edit-a-task)
        * [Profile page](#profile-page)
        * [Sign up and login pages](#sign-up-and-login-pages)
      - [Database schema](#database-schema)
      - [Colour scheme.](#colour-scheme)
      - [Typography](#typography)
  * [Features](#features)
    + [Navbar](#navbar)
    + [Navbar dropdown menu](#navbar-dropdown-menu)
    + [Footer](#footer)
    + [Landing page](#landing-page-1)
    + [Dashboard](#dashboard-1)
    + [Creating and editing a task](#creating-and-editing-a-task)
    + [Task detail page](#task-detail-page)
    + [Profile page](#profile-page-1)
    + [Sign up and log in pages](#sign-up-and-log-in-pages)
    + [No task found image](#no-task-found-image)
    + [Back to top button](#back-to-top-button)
    + [404 Page](#404-page)
    + [Future features](#future-features)
  * [Testing](#testing)
  * [Bugs](#bugs)
    + [Project would not deploy to Heroku after installing ESLint](#project-would-not-deploy-to-heroku-after-installing-eslint)
    + [Project would not deploy to Heroku at beginning of project.](#project-would-not-deploy-to-heroku-at-beginning-of-project)
    + [During manual testing could not always see the error feedback](#during-manual-testing-could-not-always-see-the-error-feedback)
  * [Technologies used](#technologies-used)
    + [Main languages used](#main-languages-used)
    + [Frameworks, Libraries & Programs Used](#frameworks--libraries---programs-used)
  * [Components](#components)
  * [Deployment](#deployment)
    + [Forking/ Cloning](#forking--cloning)
    + [Deployment for Gitpod](#deployment-for-gitpod)
    + [Deployment to Heroku](#deployment-to-heroku)
  * [Credits](#credits)
  * [Acknowledgements](#acknowledgements)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


## Project Goals

 * To create a task application where users can create tasks that vary in detail.
 * For users of the site to have full CRUD functionality within the tasks that they create.
 * Deliver a simple and intuitive user experience suitable for a wide range of users.
 * Offer a minimal set of features chosen in order to deliver a useful application within an achievable development timeframe, whilst laying a solid foundation to add additional features in the future.

## Planning

Planning for the application was based on an agile methodology utilising GitHubs issues and projects tabs to create user stories for the site. There are user stories which are for the project goals of the site and what I wanted to achieve and I set up project tasks as well which incorporate the what is required for each step of the project.

The user stories were then worked on in iterations which lasted a week each when each story was started then completed it was moved through the KanBan board into the relevant section.

I also added labels to the user stories consisting of must-have, should-have and could-have to ensure that the features that had to be included to achieve the project goals were included.

I also added a column for bugs that arose during the making of the application which were documented and the de bugging steps were included also.

[Lifesort Kanban board](https://github.com/users/carl2087/projects/10)

[Lifesort project tasks](https://github.com/users/carl2087/projects/11)

[Lifesort user stories](https://github.com/carl2087/life-sort-task-app/issues)

[Back to top](#table-of-contents)

### Design

To decide on the design for the application I started off with wireframes to decide on the general layout of the site to make the wireframes I used [Balsamiq](https://balsamiq.com/wireframes/?gad=1&gclid=Cj0KCQjw756lBhDMARIsAEI0AgkX-3sNRNBsbey5CZvrpsmGPA9oSAXJD_pzaX52fTg1wCV-R2MGPe0aAqU5EALw_wcB). I then utilised [colorhunt](https://colorhunt.co/) to help choose a colour theme. To help speed up building the site I used [React Bootstrap](https://react-bootstrap.netlify.app/). This helped ensure I kept to a mobile first design and help design an application to be used on all devices.

#### Wireframes

The wireframes for the site are pictured below.

##### Landing page

When first visiting the site I wanted users to arrive at a landing page with the options to login or sign up if not already. If the user is logged in then be shown links to their dashboard.

Logged out desktop:

![landing page logged out desktop](src/assets/readme/wireframes/landing-page-desktop-logged-out.png)

Logged in desktop:

![landing page logged in user](src/assets/readme/wireframes/landing-page-desktop-logged-in-user.png)

Logged out tablet:

![landing page logged out user](src/assets/readme/wireframes/landing-page-logged-out-tablet.png)

Logged in tablet:

![landing page logged in user](src/assets/readme/wireframes/landing-page-logged-in-tablet.png)

Logged out mobile:

![landing page logged out user mobile](src/assets/readme/wireframes/landing-page-logged-out-mobile.png)

Logged in mobile:

![landing page logged in user mobile](src/assets/readme/wireframes/landing-page-logged-in-mobile.png)

[Back to top](#table-of-contents)

##### Dashboard

For the dashboard I wanted this to be where a user of the site could view all of their tasks on one page and have infinite scroll so all the tasks keep loading. For smaller devices I changed the view to show buttons instead to links to each tasks list page as to avoid a super long list with different tasks on it.

Dashboard desktop:

![dashboard on a desktop](src/assets/readme/wireframes/my-dashboard-page-desktop.png)

Dashboard tablet:

![dashboard on a tablet](src/assets/readme/wireframes/my-dashboard-page-tablet.png)

Dashboard mobile:

![dashboard on a mobile](src/assets/readme/wireframes/my-dashboard-page-mobile.png)

[Back to top](#table-of-contents)

##### Individual task page

When clicking on a title of a task you are taken to the individual task page for that particular task.

Individual task page desktop:

![task page on a desktop](src/assets/readme/wireframes/individual-task-list-pages-desktop.png)

Individual task page tablet:

![task page on a tablet](src/assets/readme/wireframes/individual-task-list-page-tablet.png)

Individual task page mobile:

![task page on a mobile](src/assets/readme/wireframes/individual-task-list-page-mobile.png)

[Back to top](#table-of-contents)

##### Create a task and edit a task

The layout for creating a task and editing a task is the same so they have one wireframe for both.

Desktop:

![create a task desktop](src/assets/readme/wireframes/create-a-task-desktop.png)

Tablet:

![create a task tablet](src/assets/readme/wireframes/create-a-task-tablet.png)

Mobile:

![create a task mobile](src/assets/readme/wireframes/create-a-task-mobile.png)

[Back to top](#table-of-contents)

##### Profile page

I wanted users of the site to have access to their own profile page within the site so they can update profile image and bio and have access to their tasks from here as well.

Profile page desktop:

![profile page desktop](src/assets/readme/wireframes/profile-page-desktop.png)

Profile page tablet:

![profile page tablet](src/assets/readme/wireframes/profile-page-tablet.png)

Profile page mobile:

![profile page mobile](src/assets/readme/wireframes/profile-page-mobile.png)

[Back to top](#table-of-contents)

##### Sign up and login pages

The sign up and log in pages are the same design as well so they are shown below.

Desktop:

![Sign up page desktop](src/assets/readme/wireframes/sign-in-page-desktop.png)

Tablet:

![sign up page tablet](src/assets/readme/wireframes/sign-in-page-tablet.png)

Mobile:

![sign up page mobile](src/assets/readme/wireframes/sign-in-page-mobile.png)

[Back to top](#table-of-contents)

#### Database schema 

The database schema has been uploaded to the back-end ReadMe and can be found [HERE](https://github.com/carl2087/life-sort-drf-api).

#### Colour scheme.

As mentioned above I used [colorhunt](https://colorhunt.co/) to generate the colour scheme for the site I decided on this colour scheme as it is a clean colour palette and not overly bright.

![colour palette](src/assets/readme/colour-scheme/colour-palatte.png)

![colour palette codes](src/assets/readme/colour-scheme/colour-palatte-codes.png)

#### Typography

For the site I decided on using one font which is sourced from the [Google Fonts](https://fonts.google.com/?query=manrope) library and the one used in the site is Manrope. I decided on this font as it nice and clear and a simple font that keeps in with the theming of the site.

![Manrope font](src/assets/readme/google-font-selection.png)

[Back to top](#table-of-contents)

## Features

Below are the current features of the site. All of the images I used in the site are fully attributed in the attributions section of this ReadMe.

### Navbar

The navbar is fully responsive and appears differently depending on the logged in status of the user.

Logged in navbar desktop:

![navbar logged in desktop](src/assets/readme/features/logged-in-navbar.png)

Logged out navbar desktop:

![navbar logged out desktop](src/assets/readme/features/logged-out-navbar.png)

Logged in navbar smaller devices:

![logged in navbar smaller devices](src/assets/readme/features/navbar-smaller-device.png)

Logged out navbar smaller devices:

![logged out navbar smaller devices](src/assets/readme/features/logged-out-smaller-device.png)

[Back to top](#table-of-contents)

### Navbar dropdown menu

The Navbar dropdown menu is available on all screen sizes and has links to create a task in each category.

Navbar dropdown menu:

![navbar dropdown menu](src/assets/readme/features/task-dropdown-nav.png)

### Footer

The footer is fully responsive and has the Lifesort logo as well as links to social media sites which when clicked open in new tabs.

Footer on desktop:

![footer on a desktop](src/assets/readme/features/footer.png)

Footer on smaller devices:

![footer on smaller devices](src/assets/readme/features/footer-smaller-device.png)

### Landing page 

The landing page is fully responsive and is different depending on the logged in status of the user. It also has an about section for the application.


Landing page desktop logged in:

![Landing page logged in](src/assets/readme/features/logged-in-landing-screen.png)

Landing page desktop not logged in:

![landing page non logged in](src/assets/readme/features/non-logged-in-landing-screen.png)

Landing page desktop smaller devices:

![landing page on smaller devices](src/assets/readme/features/landing-screen-smaller-device.png)

[Back to top](#table-of-contents)

### Dashboard

The dashboard is where a user has all their tasks listed if they are on a desktop and if they are on a smaller device they are shown buttons that link to the tasks list page for each task category.

Dashboard page desktop:

![dashboard on desktop](src/assets/readme/features/dashboard.png)

Dashboard page smaller devices:

![dashboard on smaller devices](src/assets/readme/features/dashboard-smaller-device.png)

### Creating and editing a task

The create a task page is the same layout for each category of task so I have included one image below. The layout is the same for editing a task as well accept that it will pre-load of the existing task data.

![Create a task](src/assets/readme/features/create-holiday-task.png)

[Back to top](#table-of-contents)

### Task detail page

The task detail page/component is shown throughout the application and shows the data entered for the task and it also gives user feedback if the task is overdue or on time.

![task detail](src/assets/readme/features/holiday-task-page.png)

### Search Bar

There is a search bar for each task list allowing the user to search through each task individually if no search term is found they are shown the no items found graphic.

![search bar](src/assets/readme/features/search-bar.png)

### Profile page

The profile page has links to change password and username shows the current profile image which can be updated and bio description as well.

![Profile page](src/assets/readme/features/profile-page.png)

### Sign up and log in pages

The sign up and log in pages have largely the same design but feature different images.

Sign up page:

![Sign up page](src/assets/readme/features/signup-page.png)

Log in page:

![log in page](src/assets/readme/features/login-page.png)

[Back to top](#table-of-contents)

### No task found image

On each page that a user can view a list of tasks if a task has not been created in that category then the user is shown a no task found graphic.

No task found image:

![no task found image](src/assets/readme/features/no-task-found.png)

### Back to top button

Due to the application having infinite scroll I added a back to top button for an ease of life improvement.

Back to top button:

![back to top button](src/assets/readme/features/back-to-top-button.png)

### 404 Page

If a user of the site attempts to navigate to a page that does not exist then they are shown a customised 404 page.

404 page:

![404 page](src/assets/readme/features/404-page.png)

### Future features

 * A search bar to enable searching through tasks to find the exact task you want.
 * A version of the application which is built for mobiles.
 * A family version of the tasks app so a nominated family leader could set tasks for the household for example.
 * A contact form so users can leave feedback.

 [Back to top](#table-of-contents)

## Testing

I manually tested the application which is fully documented [HERE](MANUALTESTS.md). The validation testing is also included the folder. To the best of my knowledge all the features of the site work as expected.

## Bugs

Any bugs encountered during the creation of the application have been logged in the user stories with the debugging steps listed. Below are the bugs encountered.

### Project would not deploy to Heroku after installing ESLint

The application would not deploy to Heroku after installing ESLint as it kept on throwing errors in the terminal for having empty return statements in functions. This was caused by the try catch blocks for requests made from the API for errors being returned. To fix the issue I added in console.logs and commented them out and the application deployed as expected.

### Project would not deploy to Heroku at beginning of project.

I was receiving an error that was only showing in the Heroku build logs and not the local DEV environment which was Module build failed (from ./node_modules/babel-loader/lib/index.js). To fix the issues I moved the "@babel/plugin-proposal-private-property-in-object": "^7.21.11" to the dependencies list in package.json.

### During manual testing could not always see the error feedback

Whilst manually testing the application I could not always see the error feedback for the non field errors as it sometimes could appear below the visible screen at the bottom of the form. To fix this and create a better user experience I moved the error feedback to above the submit button which ensured the feedback would always be on the visible screen.

To the best of my knowledge there are no further bugs left in the application.

[Back to top](#table-of-contents)

## Technologies used

### Main languages used

Back-end and front-end are included

 * HTML5
 * CSS3
 * JavaScript (specifically the JSX of React)
 * Python
 * SQL - Postgres

### Frameworks, Libraries & Programs Used

 * Google Fonts : For the site fonts
 * GitPod : To build the project & create the JSX & CSS files before pushing the project to Github.
 * GitHub : To store my repository for submission.
 * Balsamiq : Was used to create mockups of the project prior to starting.
 * Am I Responsive? : To ensure the project looked good across all devices.
 * [Favicon.io](https://favicon.io/) : To provide the code & image for the icon in the tab bar.
 * Django : Used to build the backend database that serves as an API for the front-end project.
 * React-Bootstrap : The styling library that has aided to the layout of the site, and which was introduced to us during the course of the program.
 * ReactJS : To build the components that would collectively form the front-end application.
 * Excel : To create the database schemas.
 * [Flat Icon](https://www.flaticon.com/) : To add icons to the social links in the footer & navigation sections.
 * Affinity Photo : To create the Lifesort logos.
 * axios : For API requests.
 * React Router : Uses for the navigation of Lifesort.
 * ESLint : For linting and JSX validation.

 [Back to top](#table-of-contents)

## Components

Components in React are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
There are several that have been implemented within this project

1. axiosDefault.js : for ease of communication with the backend API.

1. CurrentUserContext.js : confirm users logged-in status to determine what functionality is available to that user.

1. useRedirect.js : redirects a user to another page if they are not authorised to be on the page they are trying to access.

1. utils.js : supplies functionality to all of the components that utilise the Infinite Scroll.

## Deployment

### Forking / Cloning

You can fork the repository with the following steps:

1. Login to your GitHub account
1. Locate the repository you wish to fork
1. Click the 'Fork' button and you'll have a copy of the repo on your own account.

You can clone the repo with the following steps:

1. Under the 'Code' button in the repository, copy the HTTPS link.
1. With Git on your local machine, find the directory you want to clone into and set up a Git Bash terminal there.
1. Type git clone followed by the link to set up the clone on your own system.
Note: Your own environment will be different from the original so you will need to set up environment variables and install the requirements for it to run.

### Deployment for Gitpod

1. In Heroku, have a CLIENT_ORIGIN_DEV setting for the backend config vars.
1. In backend settings, change CORS_ALLOWED_ORIGINS_REGEXES to allow for gitpod environment a proper backend database.
1. In gitpod for the frontend, run npm start in the console and open the port to test the site using a database.
1. You could alternatively set the database in the backend to run in gitpod by setting a conditional to set it to the inbuilt sqlite database.

### Deployment to Heroku

Most of the complicated handling on environment variables happened in the backend API, so setting up the Lifesort frontend was relatively simple, with most of the calls dealing with separate resources being performed in the code.

1. I logged in and created the app.
1. Set the Deployment of the project by clicking on the 'Deploy' tab and choosing the method of deployment.
1. The application deployed after an initial manual deploy.

[Back to top](#table-of-contents)

## Credits 

 * The Moments walkthrough for which in part this project was based.
 * [CSS Jigsaw validator](https://jigsaw.w3.org/css-validator/) for validation of the CSS.
 * [Google Fonts](https://fonts.google.com/) for the fonts used.
 * [Flat Icon](https://www.flaticon.com/) for the icons used on the site.
 * [Am I Responsive?](https://ui.dev/amiresponsive) for the image used at the top of this README.
 * [Heroku](https://id.heroku.com/login) for deployment of the final project.
 * [Favicon.io](https://favicon.io/) for the favicons used on the site.
 * The scroll to top button code I sourced from [geeks for geeks](https://www.geeksforgeeks.org/how-to-create-a-scroll-to-top-button-in-react-js/). I adjusted what I needed for my uses.
 * The images used on the site are as follows were used from [Freepik](https://www.freepik.com/) and are listed below. I did edit the pictures to match the colour scheme of the site which is allowed within the free license.

    <a href="https://www.freepik.com/free-vector/computer-login-concept-illustration_20824344.htm#query=sign%20up&position=6&from_view=search&track=ais">Image by storyset</a> on Freepik

    <a href="https://www.freepik.com/free-vector/mobile-login-concept-illustration_4957412.htm#query=sign%20up&position=7&from_view=search&track=ais">Image by storyset</a> on Freepik

    <a href="https://www.freepik.com/free-vector/tiny-people-developers-laptop-customer-requirements-software-requirement-description-user-case-agile-tool-business-analysis-concept-bright-vibrant-violet-isolated-illustration_10782981.htm#query=task%20organise&position=6&from_view=search&track=ais#position=6&query=task%20organise">Image by vectorjuice</a> on Freepik

    Image by <a href="https://www.freepik.com/free-vector/hand-drawn-people-asking-questions-illustration_13297321.htm#query=quation%20mark&position=11&from_view=search&track=ais">Freepik</a>

## Acknowledgements

 [Code Institute](https://codeinstitute.net/) and The Code Institute Slack community where helpful advice is never far away. Also the mentors that helped me throughout the course Victor Miclovich and Martina Terlevic.

 [Back to top](#table-of-contents)

