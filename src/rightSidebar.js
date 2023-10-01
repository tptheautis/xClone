import { happeningContainer, column3, searchBar, whoToFollowContainer } from './index';

function createRightSidebar() {
  const searchTwitter = document.createElement('div');
  const whatsHappening = document.createElement('h2');
  const searchTwitterText = document.createTextNode('Search Twitter');
  const whatsHappeningText = document.createTextNode('What\'s Happening');
  searchTwitter.append(searchTwitterText);
  happeningContainer.append(whatsHappeningText);
  column3.append(searchTwitter);
  column3.append(whatsHappening);

  // Right Sidebar
  const whoToFollowTextContainer = document.createElement('div');
  whoToFollowTextContainer.classList.add('whoToFollowTextContainer');
  const whoToFollowText = document.createTextNode('Who to follow');
  whoToFollowContainer.append(whoToFollowTextContainer);
  whoToFollowTextContainer.append(whoToFollowText);

  // SearchBar
  const searchIcon = document.createElement('img');
  searchIcon.classList.add('searchIcon');
  searchIcon.src = '../src/assets/searchIcon.png';
  searchBar.append(searchIcon);
  searchBar.append(searchTwitterText);

  // Stack Overflow Profile
  const stackContainer = document.createElement('div');
  stackContainer.classList.add('stackContainer');
  const stackIcon = document.createElement('img');
  stackIcon.classList.add('stackIcon');
  stackIcon.src = '../src/assets/stackIcon.png';
  const stackName = document.createTextNode('Stack Overflow');
  const stackUsername = document.createTextNode('@StackOverflow');
  whoToFollowContainer.append(stackContainer);
  stackContainer.append(stackIcon);
  stackContainer.append(stackName);
  stackContainer.append(stackUsername);
  // Show More
  const showMoreContainer = document.createElement('div');
  showMoreContainer.classList.add('showMoreContainer');
  const showMoreText = document.createTextNode('Show more');
  whoToFollowContainer.append(showMoreContainer);
  showMoreContainer.append(showMoreText);
}

export {
  whoToFollowContainer,
};

export default createRightSidebar;
