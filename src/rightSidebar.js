import { happeningContainer, column3, whoToFollowContainer } from './index';

const searchInputBox = document.getElementById('searchInputBox');
const searchInputContainer = document.createElement('div');
searchInputContainer.classList.add('searchInputContainer');

function createRightSidebar() {
  const searchIcon = document.createElement('img');
  searchIcon.classList.add('searchIcon');
  searchIcon.src = '../src/assets/searchIcon.png';

  const searchBarContainer = document.createElement('div');
  searchBarContainer.classList.add('searchBarContainer');
  const whatsHappening = document.createElement('h2');
  const whatsHappeningText = document.createTextNode('What\'s Happening');
  const btcPriceContainer = document.createElement('div');
  const ethPriceContainer = document.createElement('div');
  const xrpPriceContainer = document.createElement('div');
  btcPriceContainer.classList.add('btcPriceContainer');
  ethPriceContainer.classList.add('ethPriceContainer');
  xrpPriceContainer.classList.add('xrpPriceContainer');
  const btcPriceText = document.createTextNode('Bitcoin');
  const ethPriceText = document.createTextNode('Ethereum');
  const xrpPriceText = document.createTextNode('XRP');
  column3.append(searchBarContainer);
  column3.append(searchInputContainer);
  searchBarContainer.append(searchIcon);
  searchBarContainer.append(searchInputBox);
  happeningContainer.append(whatsHappeningText);
  column3.append(whatsHappening);
  column3.append(happeningContainer);
  column3.append(whoToFollowContainer);
  happeningContainer.append(btcPriceContainer, ethPriceContainer, xrpPriceContainer);
  btcPriceContainer.append(btcPriceText);
  ethPriceContainer.append(ethPriceText);
  xrpPriceContainer.append(xrpPriceText);

  // Right Sidebar
  const whoToFollowTextContainer = document.createElement('div');
  whoToFollowTextContainer.classList.add('whoToFollowTextContainer');
  const whoToFollowText = document.createTextNode('Who to follow');
  whoToFollowContainer.append(whoToFollowTextContainer);
  whoToFollowTextContainer.append(whoToFollowText);

  searchInputBox.addEventListener('focus', () => {
    searchBarContainer.style.border = '1px solid #1DA1F2';
    searchIcon.style.filter = 'invert(48%) sepia(98%) saturate(1714%) hue-rotate(176deg) brightness(98%) contrast(93%)';
  });

  searchInputBox.addEventListener('focusout', () => {
    searchBarContainer.style.border = 'none';
    searchIcon.style = 'none';
  });

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
