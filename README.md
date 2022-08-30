# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- SCSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

- Use Regex to validate inputs.
- With flexbox, use flex-basis property to control width, instead of the width property.
- By default, flexbox's flex-basis property is set to auto, so the initial width only allows enough space to fit the content.
- You can use JSON stringify to display input data in browser window as you type:
  <pre>{JSON.stringify(state, undefined, 2)}</pre>
- With css grid, only direct children elements of the parent container get placed on the grid. Other nested elements do not.

### Continued development

- Hoping to improve my understanding of css grid and flexbox rules in order to build apps more efficiently.

### Useful resources

- [About overlapping images with css grid](https://mastery.games/post/overlapping-grid-items/)
- [About flex-basis](https://www.youtube.com/watch?v=LVLmX-fx09w&t=693s&ab_channel=TheCodeCreative)
- [About form validation in react](https://www.youtube.com/watch?v=EYpdEYK25Dc&ab_channel=DipeshMalvia)

## Author

- Frontend Mentor - [@jvb3](https://www.frontendmentor.io/profile/jvb3)
