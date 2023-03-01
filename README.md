# Rock Paper Scissor

I made a Rock Paper Scissor of chance against a computer up to a score of 5. View the live website [here](https://deege2time.github.io/pp2/).

![Mockup](docs/mockup/#)

## Table of Contents
<hr>

1. [Design-x](#design)
    1. [Design Choice-x](#design-choice)
    2. [Colors-x](#colors)
    3. [Fonts-x](#fonts)
2. [Features-x](#features)
    1. [Existing Features-x](#existing-features)
    2. [Future Features-x](#future-features)
3. [Technologies-x](#technologies)
    1. [Languages-x](#languages)
    2. [Tools-x](#tools)
4. [Testing](#testing)
    1. [Validation-HTML](#validation-html)
    2. [Validation-CSS](#validation-css)
    3. [JavaScript-Testing](#javascript-testing)
    4. [Accessibility](#accessibility)
    5. [Performance](#performance)
    6. [Responsive Design](#responsive-design)
    7. [Browser Compatibility](#browser-compatibility)
    8. [Functional Testing](#functional-testing)
    9. [Unfixed Bugs](#unfixed-bugs)
5. [Deployment](#deployment)
    1. [Deploying through github pages](#deploying-through-github-pages)
    2. [Fork other repositories](#fork-other-repositories)
    3. [Clone other repositories](#clone-other-repositories)
6. [Credits](#credits)
    1. [Content](#content)
    2. [Media](#media)

## **Design**
<hr>

### **Design choice**

Designed with retro in mind. Used Pixel icons and font, as well as dashed borders.
<br>

### **Colors**

Black / White are the main colors, used green and red to indicute lose / win or to distinguish you from the computer. You (green) computer (red)
<img src="docs/design/#">
<br>

### **Fonts**
Chosen font is simple and pixelated to fit website theme.
* [VT323](https://fonts.google.com/specimen/VT323)

## **Features**
<hr>

* Header
    * Logo is displayed here
    * Fully responsive on all devices.

![Header](docs/readme-images/#)

* Main Menu
    * Three buttons for "Play", "Rules" and "Credits"
    * When one button is clicked, hide main menu and display whatever was clicked.

![Main Menu](docs/readme-images/#)

* Play
    * Three clickable images with event listeners. (Rock / Paper / Scissor images).
    * When player has chosen, computer choosed random between the three.
    * Display each players choice in the middle.
    * Player will Win / Lose / Draw each round.
    * First to score 5 points wins.

![Play](docs/readme-images/#) 

* Endscreen
    * Final result and score will be displayed here.
    * Button to return to main menu.

![Endscreen](docs/readme-images/#)

* Rules
    * Here the user will be able to read the rules.
    * Button to return to main menu.

![Rules](docs/readme-images/#)

* Credits
    * Here the user will be able to see the credits.
    * Button to return to main menu.

![Credits](docs/readme-images/#)

### **Existing Features**
<br>

* Responsive design
* Navigation through the website
* Playable Rock Paper Scissor game
* Rules

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


* Favicon
    * Used  to generate icon in head.


* Google Fonts
    * Used [VT323](https://fonts.google.com/specimen/VT323)


## **Testing**
<hr>

### **Validation-HTML**
Used the [W3C Markup Validation Service](https://validator.w3.org/) with urls. All pages passed with 0 errors.
<details><summary>Overview</summary>
<img src="docs/validation/html/overview-validation.png">
</details>
<details><summary>Discography</summary>
<img src="docs/validation/html/discography-validation.png">
</details>
<details><summary>Biography</summary>
<img src="docs/validation/html/biography-validation.png">
</details>
<br>

### **Validation-CSS**
Used the W3C CSS Validation Service with url and stylesheet. All pages passed with 0 errors.
<details><summary>Whole project</summary>
<img src="docs/validation/css/page-validation.png">
</details>
<details><summary>Stylesheet</summary>
<img src="docs/validation/css/stylesheet-validation.png">

**Warning message: "Imported style sheets are not checked in direct input and file upload modes". From imported fonts** 

</details>
<br>

### **Accessibility**
Ran through WAVE, web accessibility evaluation tool. All pages passed with 0 errors.
<details><summary>Overview</summary>
<img src="docs/accessibility/overview-accessibility.png">
</details>
<details><summary>Discography</summary>
<img src="docs/accessibility/discography-accessibility.png">
</details>
<details><summary>Biography</summary>
<img src="docs/accessibility/biography-accessibility.png">
</details>
<br>

### **Performance**
Ran through Google Lighthouse via Google Devtools, only biography scored 99 whilst overview scored 72 and discography scored 75.
<details><summary>Overview</summary>
<img src="docs/performance/overview-performance.png">
</details>
<details><summary>Discography</summary>
<img src="docs/performance/discography-performance.png">
</details>
<details><summary>Biography</summary>
<img src="docs/performance/biography-performance.png">
</details>
<br>

### **Responsive Design**
<br>

Tested for all devices 320px and up.
* Test results from Google Devtools

### **Browser Compatibility**
<br>

Test from following browsers without problems
* Google Chrome
* Firefox
* Safari (iPhone)

### **Functional Testing**
<br>

**Basic features displayed through all three pages.**
| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Logo | Link to overview | Bring user to overview(home page) | Works as expected |
| Navigation | Navigation for overview, discography, biography| Allow user to navigate through site and show active page | Works as expected |
| Footer | Links to different websites where they can follow artist | Transferred to a new page in new tab | Works as expected |
<details><summary>Images</summary>
<img src="docs/testing/logo-testing.png">
<img src="docs/testing/nav-testing.png">
<img src="docs/testing/footer-testing.png">
</details>
<br>

**Features in overview.html**
| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Images | Clickable images to bring user to album/singles depending on which image clicked | Open new tab for album/single | Works as expected |
| Link | Anchor element to "Karlskoga, Sweden" | Bring user to Karlskoga, Sweden on Google Maps | Works as expected |
<details><summary>Images</summary>
<img src="docs/testing/images-testing.png">
<img src="docs/testing/link-kga-swe-testing.png">
</details>
<br>

**Features in discography.html**
| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Audio | Audio with controls, no autoplay | All audio muted when entering site, controls to audio | Works as expected |
<details><summary>Images</summary>
<img src="docs/testing/audio-testing.png">
</details>
<br>

**Features in biography.html**
| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Link | Anchor element to "Karlskoga Folkhögskola" | Brings user to school website in a new tab | Works as expected |
<details><summary>Images</summary>
<img src="docs/testing/link-kga-fhs-testing.png">
</details>
<br>

### **Unfixed Bugs**
<br>
Bugs to be fixed in the future as I did not have time.
* Regarding website responsiveness, the content starts to slightly move to the left below 340px.
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

* Animation
    * Used a combination of these two to create hovering psuedo class animations with CSS.
        * [Transform](https://www.w3schools.com/cssref/css3_pr_transform.php)
        * [Transition](https://www.w3schools.com/css/css3_transitions.asp)

* [Flexbox](https://www.w3schools.com/css/css3_flexbox.asp)
    * Used to create the structure of the website.

* [Gradient](https://cssgradient.io/)
    * Used this generator to create desired color gradients.
<br>

### **Content**

All content except vinyl image on landing page is owned by dEEGE.
<br>

### **Media**


Landing page background image of a vinyl was grabbed from [Pexels](https://www.pexels.com/photo/blue-vinyl-record-playing-on-turntable-1389429/).

All audio files are owned by me.
