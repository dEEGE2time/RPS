# Rock Paper Scissor

I made a Rock Paper Scissor of chance against a computer up to a score of 5. View the live website [here](https://deege2time.github.io/pp2/).

![Mockup](docs/readme-images/website-images/mockup.png)

## Table of Contents
<hr>

1. [Design](#design)
    1. [Design Choice](#design-choice)
    2. [Colors](#colors)
    3. [Fonts](#fonts)
2. [Features](#features)
    1. [Existing Features](#existing-features)
    2. [Future Features](#future-features)
3. [Technologies](#technologies)
    1. [Languages](#languages)
    2. [Tools](#tools)
4. [Testing](#testing)
    1. [Validation-HTML](#validation-html)
    2. [Validation-CSS](#validation-css)
    3. [Validation-JavaScript](#validation-javascript)
    4. [Accessibility](#accessibility)
    5. [Performance](#performance)
    6. [Responsive Design](#responsive-design)
    7. [Browser Compatibility](#browser-compatibility)
    8. [Functional Testing](#functional-testing)
5. [Deployment](#deployment)
    1. [Deploying through github pages](#deploying-through-github-pages)
    2. [Fork other repositories](#fork-other-repositories)
    3. [Clone other repositories](#clone-other-repositories)
6. [Credits](#credits)
    1. [Content](#content)

## **Design**
<hr>

### **Design choice**

Designed with retro in mind. Used Pixel icons and font, as well as dashed borders.
<br>

### **Colors**

Black / White are the main colors, used green and red to indicate lose / win or to distinguish you from the computer. You (green) computer (red)
<img src="docs/readme-images/website-images/color-palette.png">
<br>

### **Fonts**
Chosen font is simple and pixelated to fit website theme.
* [VT323](https://fonts.google.com/specimen/VT323)

## **Features**
<hr>

* Header
    * Logo is displayed here

![Header](docs/readme-images/website-images/header.png)

* Main Menu
    * Three buttons for "Play", "Rules" and "Credits"
    * When one button is clicked, hide main menu and display whatever was clicked.

![Main Menu](docs/readme-images/website-images/main-menu.png)

* Play
    * Three clickable images with event listeners. (Rock / Paper / Scissor images).
    * When player has chosen, computer chooses randomly between the three.
    * Display each players choice in the middle.
    * Player will Win / Lose / Draw each round.
    * First to score 5 points wins the game.

![Play](docs/readme-images/website-images/gamewindow.png) 

* Endscreen
    * Final result and score will be displayed here.
    * Button to return to main menu.

![Endscreen](docs/readme-images/website-images/endscreen.png)

* Rules
    * Here the user will be able to read the rules.
    * Button to return to main menu.

![Rules](docs/readme-images/website-images/rules.png)

* Credits
    * Here the user will be able to see the credits.
    * Button to return to main menu.

![Credits](docs/readme-images/website-images/credits.png)

* Footer
    * Portfolio Project 2

![Credits](docs/readme-images/website-images/footer.png)


### **Existing Features**
<br>

* Responsive design
* Navigation through the website
* Playable Rock Paper Scissor game
* Show rules
* Show credits
* Button to return to main menu
* Show scores and increment when it should be incremented

### **Future Features**
<br>

* Animation for the game
* Enter username
* Scoreboard

## **Technologies**
<hr>

### **Languages**
<br>

* HTML
    * Core content and structure written using HTML.


* CSS
    * Styling and responsive design written using CSS.

* JavaScript
    * Back-End coding to make the game work and show/hide elements written using JavaScript.


### **Tools**
<br>

* Github
    * Source code hosted on github and deployed through github pages.


* Git
    * Commit and pushing code using git


* Cloudconvert
    * Used https://cloudconvert.com/png-to-webp to convert images to webp.


* Tinypng
    * Used https://tinypng.com/ to compress webp images.


* Google Fonts
    * Used [VT323](https://fonts.google.com/specimen/VT323)


## **Testing**
<hr>

### **Validation-HTML**
Used the [W3C Markup Validation Service](https://validator.w3.org/) with urls. All pages passed with 2 errors.
<br>
<img src="docs/readme-images/testing/html-validation.png">

**Warning message: "Bad value for attribute src on element img: Must be non-empty. (src="", because I was intending on having no image but an element to replace with user and computer choice)** 

<br>

### **Validation-CSS**
Used the [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) with url and stylesheet. All pages passed with 0 errors.
<br>
<img src="docs/readme-images/testing/css-validation.png">

<br>

### **Validation-JavaScript**
Used the [JSHint](https://jshint.com/) and pasted code. returnMainMenu() has been called in html with onclick="returnMainMenu()", thus JSHint did not recognize this.
<br>
<img src="docs/readme-images/testing/jshint.png">

### **Accessibility**
Ran through WAVE, web accessibility evaluation tool. All pages passed with 0 errors.
<br>
<img src="docs/readme-images/testing/wave.png">

<br>

### **Performance**
Ran through Google Lighthouse via Google Devtools, Performance score 98.
<br>
<img src="docs/readme-images/testing/lighthouse.png">

<br>

### **Responsive Design**
<br>

Tested for all devices 320px and up.
* Test results from Google Devtools
    * Google Devtools
    * iPhone

### **Browser Compatibility**
<br>

Test from following browsers without problems
* Google Chrome
* Firefox
* Safari (iPhone)

### **Functional Testing**
<br>

**Features in main menu**
| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Play button | Start game | Brings user to game window | Works as expected |
| Rules button | Show rules | Brings user to rules window | Works as expected |
| Credits button | Show credits | Brings user to credits window | Works as expected |
<br>

**Features in game window**
| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Clickable Images | Select Rock / Paper / Scissor | Display chosen image in middle (bottom) | Works as expected |
| Computer | Select random image between Rock / Paper / Scissor after player has chosen | Display chosen image in middle (top) | Works as expected |
| Quit button | Return to main menu | Brings user back to main menu, game reset. | Works as expected |
<br>

**Features in end screen**
| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Results | Display match results and scores | Shows your score, computer score and player won/lost  | Works as expected |
| Quit button | Return to main menu | Brings user back to main menu, game reset | Works as expected |
<br>

**Features in rules**
| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Rules | Rules written in a box | Shows user the rules for the game | Works as expected |
| Back button | Return to main menu | Brings user back to main menu | Works as expected |
<br>

**Features in credits**
| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Credits | Credits written in a box | Shows user the credits for the game | Works as expected |
| Back button | Return to main menu | Brings user back to main menu | Works as expected |
<br>

## **Deployment**
<hr>

The website was deployed through the use of GitHub Pages, a feature built in to GitHub.

### **Deploying through github pages**
1. In your repository, click on "Settings" from the top of the menu.
2. In the side menu to your left, click "Pages" in "Code and automation" section.
3. Set "Source" to "Deploy from branch".
4. Set desired branch and set director to /(root).
5. Click "Save" and wait for github to display your URL at the top of this page.
<br>

### **Fork other repositories**
1. Go to desired repository.
2. Click "Fork" in the upper-right corner.
3. Select owner, set repository name and add description(optional).
4. Choose to copy default or all branches.
5. Click "Create Form".
<br>

### **Clone other repositories**
1. In your selected repository, click "Code" drop down button.
2. Select desired cloning method (HTTP)
3. Copy repository to clipboard
4. Open IDE of choice.
5. Type "git clone copied-git-url" into the IDE terminal. (Need git installed) 
<br>

## **Credits**
<hr>

* [Updating src attribute](https://www.w3schools.com/jsref/prop_img_src.asp)
    * Used this tutorial for updating images.
<br>

* [location.reload();](https://www.w3schools.com/jsref/met_loc_reload.asp)
    * Used to return user to main menu (refresh page).
<br>

* [Pixel icons created by Dooder - Flaticon](https://www.flaticon.com/free-icons/pixel)
<br>

* [VT323 Font - Google Fonts](https://fonts.google.com/specimen/VT323)
<br>

### **Content**

Pixel hand icons by [Pixel icons created by Dooder - Flaticon](https://www.flaticon.com/free-icons/pixel).
<br>

Font by [VT323 Font - Google Fonts](https://fonts.google.com/specimen/VT323)
<br>