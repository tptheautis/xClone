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
}

export {
  whoToFollowContainer,
};

export default createRightSidebar;
