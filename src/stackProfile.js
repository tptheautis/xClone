import { mainContainer } from './index';
import { whoToFollowContainer } from './rightSidebar';

function stackProfile() {
  // Stack Overflow Profile
  const stackContainer = document.createElement('div');
  stackContainer.classList.add('stackContainer');
  const stackTextContainer = document.createElement('div');
  stackTextContainer.classList.add('stackTextContainer');
  const stackIcon = document.createElement('img');
  stackIcon.classList.add('stackIcon');
  stackIcon.src = '../src/assets/stackIcon.png';
  const stackName = document.createTextNode('Stack Overflow');
  const stackNameContainer = document.createElement('div');
  stackNameContainer.classList.add('stackNameContainer');
  const stackUsername = document.createTextNode('@StackOverflow');
  const stackUsernameContainer = document.createElement('div');
  stackUsernameContainer.classList.add('stackUsernameContainer');
  whoToFollowContainer.append(stackContainer);
  stackContainer.append(stackIcon);
  stackContainer.append(stackTextContainer);
  stackTextContainer.append(stackNameContainer);
  stackTextContainer.append(stackUsernameContainer);
  stackNameContainer.append(stackName);
  stackUsernameContainer.append(stackUsername);

  // Stack Buttons
  const stackFollowButton = document.createElement('div');
  stackFollowButton.classList.add('followButton');
  const stackFollowButtonText = document.createTextNode('Follow');
  stackFollowButton.append(stackFollowButtonText);
  const stackFollowingButton = document.createElement('div');
  stackFollowingButton.classList.add('followingButton');
  const stackFollowingButtonText = document.createTextNode('Following');
  stackFollowingButton.append(stackFollowingButtonText);
  const stackUnfollowButton = document.createElement('div');
  stackUnfollowButton.classList.add('unfollowButton');
  const stackUnfollowButtonText = document.createTextNode('Unfollow');
  stackUnfollowButton.append(stackUnfollowButtonText);

  // Stack Button Functions
  stackContainer.append(stackFollowButton);
  stackFollowButton.addEventListener('click', () => {
    stackContainer.removeChild(stackFollowButton);
    stackContainer.append(stackFollowingButton);
  });
  stackFollowingButton.addEventListener('mouseenter', () => {
    stackContainer.removeChild(stackFollowingButton);
    stackContainer.append(stackUnfollowButton);
  });
  stackUnfollowButton.addEventListener('mouseout', () => {
    stackContainer.removeChild(stackUnfollowButton);
    stackContainer.append(stackFollowingButton);
  });

  // Stack pop-up
  const stackUnfollowPopUpContainer = document.createElement('div');
  stackUnfollowPopUpContainer.classList.add('unfollowPopUpContainer');
  const stackOverlay = document.createElement('div');
  stackOverlay.classList.add('overlay');
  const stackPopUpUnfollowTitle = document.createTextNode('Unfollow');
  const stackPopUpUnfollowTitleContainer = document.createElement('div');
  stackPopUpUnfollowTitleContainer.classList.add('popUpUnfollowTitleContainer');
  const stackPopUpUnfollowUsername = document.createTextNode('@StackOverflow?');
  const stackPopUpUnfollowUsernameContainer = document.createElement('div');
  stackPopUpUnfollowUsernameContainer.classList.add('popUpUnfollowUsernameContainer');
  const stackPopUpPara = document.getElementById('stackPopUpPara');
  const stackPopUpParaContainer = document.createElement('div');
  stackPopUpParaContainer.classList.add('popUpParaContainer');
  const stackPopUpUnfollowButton = document.createElement('div');
  stackPopUpUnfollowButton.classList.add('popUpUnfollowButton');
  const stackPopUpUnfollowButtonText = document.createTextNode('Unfollow');
  const stackPopUpCancelButton = document.createElement('div');
  stackPopUpCancelButton.classList.add('popUpCancelButton');
  const stackPopUpCancelButtonText = document.createTextNode('Cancel');
  stackUnfollowPopUpContainer.append(stackPopUpUnfollowTitleContainer);
  stackUnfollowPopUpContainer.append(stackPopUpUnfollowUsernameContainer);
  stackPopUpUnfollowTitleContainer.append(stackPopUpUnfollowTitle);
  stackPopUpUnfollowUsernameContainer.append(stackPopUpUnfollowUsername);
  stackUnfollowPopUpContainer.append(stackPopUpParaContainer);
  stackPopUpParaContainer.append(stackPopUpPara);
  stackUnfollowPopUpContainer.append(stackPopUpUnfollowButton);
  stackUnfollowPopUpContainer.append(stackPopUpCancelButton);
  stackPopUpUnfollowButton.append(stackPopUpUnfollowButtonText);
  stackPopUpCancelButton.append(stackPopUpCancelButtonText);

  stackUnfollowButton.addEventListener('click', () => {
    mainContainer.appendChild(stackOverlay);
    mainContainer.appendChild(stackUnfollowPopUpContainer);
  });
  stackPopUpUnfollowButton.addEventListener('click', () => {
    mainContainer.removeChild(stackOverlay);
    mainContainer.removeChild(stackUnfollowPopUpContainer);
    stackContainer.removeChild(stackFollowingButton);
    stackContainer.append(stackFollowButton);
  });
  stackPopUpCancelButton.addEventListener('click', () => {
    mainContainer.removeChild(stackOverlay);
    mainContainer.removeChild(stackUnfollowPopUpContainer);
  });

  // Show More
  const showMoreContainer = document.createElement('div');
  showMoreContainer.classList.add('showMoreContainer');
  const showMoreText = document.createTextNode('Show more');
  whoToFollowContainer.append(showMoreContainer);
  showMoreContainer.append(showMoreText);
}

export default stackProfile;
