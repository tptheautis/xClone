import createHomePage from './home';

// Base layout
const content = document.getElementById('content');
const mainContainer = document.createElement('div');
const column1 = document.createElement('div');
const column2 = document.createElement('div');
const column3 = document.createElement('div');
const row1 = document.createElement('div');
const row2 = document.createElement('div');
const searchBar = document.createElement('div');
const happeningContainer = document.createElement('div');
const whoToFollowContainer = document.createElement('div');
mainContainer.classList.add('mainContainer');
column1.classList.add('column1');
column2.classList.add('column2');
column3.classList.add('column3');
row1.classList.add('row1');
row2.classList.add('row2');
searchBar.classList.add('searchBar');
happeningContainer.classList.add('happeningContainer');
whoToFollowContainer.classList.add('whoToFollowContainer');
content.append(mainContainer);
mainContainer.append(column1);
mainContainer.append(column2);
mainContainer.append(column3);
column2.append(row1);
column2.append(row2);
column3.append(searchBar);
column3.append(happeningContainer);
column3.append(whoToFollowContainer);

// Pop-up Text

export {
  mainContainer, column1, column2, column3, row1, row2,
};

export {
  searchBar, happeningContainer, whoToFollowContainer,
};

// Project Global Variables
createHomePage();
