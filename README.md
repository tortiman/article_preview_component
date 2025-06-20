# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./screenshots/desktop.png)
![](./screenshots/desktop-state.png)
![](./screenshots/tablet.png)
![](./screenshots/table-state.png)
![](./screenshots/mobile.png)
![](./screenshots/mobile-state.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/tortiman/article_preview_component)
- Live Site URL: [Add live site URL here](https://tortiman.github.io/article_preview_component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learned to use better the grid and flexbox properties, so how to adjust the components in the responsive designs.

```js
document.addEventListener("DOMContentLoaded", function () {
  console.log("entrada en el js1");
  const shareButton = document.getElementById("button-social");
  const social = document.getElementById("social");
  shareButton.addEventListener("click", () => {
    console.log("click");
    social.style.transition = "opacity 1.3s, visibility 0.3s, transform 0.3s";
    social.style.opacity = 1;
    social.style.visibility = "visible";
  });
});
```

### Continued development

I want to refine how use the pseudoelements after and before in css

### Useful resources

- [Example resource 1](https://responsively.app/) - This helped me for responsive design
