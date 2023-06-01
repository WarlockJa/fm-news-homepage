# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the interface depending on their device's screen size
-   See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/images/screenshot.png)

### Links

-   Solution URL: [GitHub](https://github.com/WarlockJa/fm-news-homepage)
-   Live Site URL: [Vercel](https://fm-news-homepage-livid.vercel.app/)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   CSS Grid
-   Mobile-first workflow
-   SCSS
-   TypeScript
-   [React](https://reactjs.org/) - JS library
-   [Next.js](https://nextjs.org/) - React framework
-   [Styled Components](https://styled-components.com/) - For styles

### What I learned

I learned a method of recoloring svg in Next JS using filter global variables

defining global variables

```css
:root {
    --filter-svgMain: invert(5%) sepia(87%) saturate(3133%) hue-rotate(201deg)
        brightness(108%) contrast(144%);
}

@media (prefers-color-scheme: dark) {
    :root {
        --filter-svgMain: invert(80%) sepia(1%) saturate(1247%) hue-rotate(
                329deg
            )
            brightness(115%) contrast(120%);
    }
}
```

using them to change svg icons in dark mode

```css
.header__logo--image {
    filter: var(--filter-svgMain);
}
```

## Author

-   Website - [WarlockJa](https://warlockja.ru)
-   Frontend Mentor - [@warlockja](https://www.frontendmentor.io/profile/WarlockJa)
