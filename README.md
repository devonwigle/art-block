# ArtBlock

- Click [HERE](https://frontend.turing.edu/projects/module-3/stretch.html) to view the project spec
- Click [HERE]() to view the deployed site

## Table of Contents

- [Abstract](#abstract)
- [Tech Used](#tech-used)
- [Installation and Set-Up](#installation-and-set-up)
- [Features](#features)
- [See the Site in Action](#see-the-site-in-action)
- [Future Goals](#future-goals)
- [Stretch Goals](#stretch-goals)
- [Created By](#created-by)
- [Credit](#credit)

## Abstract

Are you feeling the unending agony that is being blocked from pursuing your artistic passions? We have created the solution for you. ArtBlock provides a user with inspiration brought forth from the internet.
We will provide you a random color, image, and word of inspiration in the hopes of getting you out of your creative block.

## Tech Used

- TypeScript
- React
- React Router
- React Modal
- [Lorem Picsum API](https://picsum.photos/)
- Word API (built by us using Express, JavaScript, hosted on Heroku)
  - [See the code](https://github.com/devonwigle/word-api)
  - [See the deployed API](https://art-block-word-api.herokuapp.com/api/v1/words)
- Figma [Wireframe](https://www.figma.com/file/b7y9VkD9VE3DVPQUKZvp1K/Art-Block?node-id=25%3A106)
- [GitHub Project Board](https://github.com/users/devonwigle/projects/3)
- [Color Picker External Package](https://www.npmjs.com/package/react-color)

## Installation and Set-Up

To install this project, please see below:

```bash
1. Clone down this Repository using `git clone`
2. Next, `cd` into the cloned repository and `npm install` to install library dependancies
3. Finally, run `npm start` and open up localhost at the port indicated to view the webpage
```

Alternatively, you can access the deployed site HERE

## Features

- LocalStorage for data persistence
- 100% Lighthouse Accessibility Rating

## See the Site in Action!

The user is welcomed to an aesthetically pleasing landing page, where they're given a short description about how we hope our application will help get them "unblocked" in their creativity. To proceed into the main portion of the application, we invite the user to click the "Be Inspired" button.

![Landing Page](https://media.giphy.com/media/ldj9skC7bfwDQwVoL1/giphy.gif)

The next page a user navigates to is our "Inspiration Creation" page. A pre-made trio of inspiration (one photo, one word, one color with hexcode) will be waiting for a user upon landing on this page. We have provided a few instructions
on how to use this tool- just click the "?" in the upper right hand corner to get the full instructions.

Inspiration Page:

<img width="500" alt="inspo-page" src="https://user-images.githubusercontent.com/69861203/156024254-f9888965-53de-4133-a6b7-3d76be9a9c8c.png">

Instructions pop-up: 

<img width="500" alt="modal-view" src="https://user-images.githubusercontent.com/69861203/156024296-e920c58b-1847-4943-8dd9-954de65a5884.png">


Here is a quick demo of the saving, reinspiring, and locking abilities of this page:

![Creating your Inspirations](https://media.giphy.com/media/ruOmeyEUc1IfPafIRx/giphy.gif)

To access your saved inspirations, click on the See My Inspirations button to be taken to the favorites page. Here, you can scroll through all your saved trios of inspiration, and you also have the ability to delete ones that no longer inspire you by clicking the "X" underneath the trio.

<img width="500" alt="favs-page" src="https://user-images.githubusercontent.com/69861203/156024817-0797012d-c84d-40af-bac1-5b438c3cf3a0.png">

If the user is feeling particularly inspired, they have the option to access a blank canvas to sketch their thoughts on. There are two ways to access a canvas- either by clicking the pencil image on the Inspirations page, or by heading to the Favorites Page and selecting the pencil button on any grouping of Inspirations there. It will take the user to a canvas specifically hooked up to those inspirations, and display them side by side. 

![Accessing the drawing canvas](https://media.giphy.com/media/3NxtD3wgECFCbp8l4k/giphy.gif)

Finally, this application is hooked up with React Router, which provides easy navigation through the pages with forward/back buttons, as well as custom URLS for each page.

![Unique URLs](https://user-images.githubusercontent.com/69861203/155824552-692a1b7e-07ed-46bc-85d7-30ea4d8500da.png)



## Future Goals

- Ability to upload images of finished art

## Stretch Goals

This project allowed us to pick our own learning goals. As a group, we decided to teach ourselves TypeScript, while continuing to solidfy our understandings with React, React Router, and styling with JSX, and CSS.
See below for ways we stretched ourselves even further on this project:

- TypeScript ✅
- React Modal ✅
- Building out our own API using Express ✅
- Hosting our API and App ✅

## Created By:

- [Emma Chory](https://github.com/Echory)
- [Devon Wigle](https://github.com/devonwigle)
- [Rana Jurjus](https://github.com/rjur11)

## Credit

- Rotating cube animation inspired by: https://codepen.io/afarrar/pen/edwNWP
- [Pencil Image](https://www.pngrepo.com/svg/144021/pencil-drawing)
- [Question Mark Image](https://www.vexels.com/png-svg/preview/152285/3d-question-mark-drawing)
- [X Delete Image](https://www.onlygfx.com/12-grunge-x-brush-stroke-png-transparent/)
