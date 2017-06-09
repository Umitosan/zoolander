# _Zoolander_

#### By _**Dominic Brown**_

#### Independent project @ Epicodus - 6/9/17

## Description

The local zoo is a mess due to mismanagement.  Luckily, they have me to help by organizing the chaos and building a new app for tracking their animals.  The app will aid the staff by allowing the storing and sorting of animals in new ways.

## User stories

* I want to be able to add newly-admitted animals to the app.
* I want to log a newly-admitted animal by submitting a form with animal species, name, age,  diet, zoo location, number of needed caretakers, sex, one like and one dislike.
* I want to view a list of animals I have logged.
* I want options to view all animals, only young animals (less than 2 years of age), or only mature animals (more than 2 years of age).
* I want to click an animal to edit its name, age or caretakers.

## Specifications

| behavior |  input   |  output  |
|----------|:--------:|:--------:|
|the app shows all animals in a list on the front page|the user navigates to the homepage|a list of all animals is shown|
|the app allows users to add animals to the list|the user fills out a form and clicks a submit button|the new animal's info is added to the list of animals on the homepage|
|the app allows users to edit an animal's information|the user clicks an 'edit' button for an animal and a form appears to edit the animal's information - then the user clicks a 'save button'|the animal's info is permanently saved and the new information is shown in the list of animals|
|the app allows users to filter the list of animals shown|the user selects a filter from a dropdown menu|the list of displayed animals changes based on the filter|
|the app allows filtering of 'all animals'|the user selects 'all animals' from the dropdown|the list of displayed animals changes to show all animals in the database|
|the app allows filtering of 'young animals'|the user selects 'young animals' from the dropdown|the list of displayed animals changes to only animals that are less than 2 years of age|
|the app allows filtering of 'mature animals'|he user selects 'mature animals' from the dropdown|the list of displayed animals changes to only animals that are more than 2 years of age|

## Prerequisites

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)

## Installation

* (using OSX terminal, or Gitbash on Windows)
* $`git clone`
* $`cd zoolander`
* $`npm install`
* $`bower install`

### Build & Run

* `gulp build`
* `gulp serve`
* a browser window should open showing the app, otherwise...
* Point your browser to [http://localhost:3000](http://localhost:3000).

## Known Bugs
_N/A_

## Technologies Used
 * Angular2
 * Typescript
 * JavaScript
 * ES6
 * Node
 * Bower
 * CSS
 * Bootstrap
 * HTML

 ### License
 *This software is licensed under the MIT license*
 Copyright © 2017 **Dominic Brown**
