import { happeningContainer, column3, whoToFollowContainer } from './index';

const searchInputBox = document.getElementById('searchInputBox');
const searchInputContainer = document.createElement('div');
searchInputContainer.classList.add('searchInputContainer');

function createRightSidebar() {
  const searchBarContainer = document.createElement('div');
  searchBarContainer.classList.add('searchBarContainer');
  const whatsHappening = document.createElement('h2');
  const whatsHappeningText = document.createTextNode('What\'s Happening');
  column3.append(searchBarContainer);
  column3.append(searchInputContainer);
  searchBarContainer.append(searchInputBox);
  
  happeningContainer.append(whatsHappeningText);
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

  const availableProfileKeywords = [
    'Odin',
    'Github',
    'Stack Overflow',
  ];
  function display(result) {
    const content = result.map((list) => {
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });
    searchInputContainer.innerHTML = "<ul>" + content.join('') + "</ul>"
  }
  
  searchInputBox.onkeyup = function() {
    let result = [];
    const input = searchInputBox.value;
    if (input.length) {
      result = availableProfileKeywords.filter((keyword) => {
        return keyword.toLowerCase().includes(input.toLowerCase());
      });
    }
    display(result);
  
    if (!result.length) {
      searchInputContainer.innerHTML = '';
    }
  };
  
  function selectInput(list) {
    searchInputBox.value = list.innerHTML;
    searchInputContainer.innerHTML = '';
  }
}

export {
  whoToFollowContainer,
};

export default createRightSidebar;
