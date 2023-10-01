import { mainContainer } from './index';
import { whoToFollowContainer } from './rightSidebar';

function githubProfile() {
  // Github Profile
  const githubContainer = document.createElement('div');
  githubContainer.classList.add('githubContainer');
  const githubTextContainer = document.createElement('div');
  githubTextContainer.classList.add('githubTextContainer');
  const githubIcon = document.createElement('img');
  githubIcon.classList.add('githubIcon');
  githubIcon.src = '../src/assets/gitIcon.png';
  const githubName = document.createTextNode('GitHub');
  const githubNameContainer = document.createElement('div');
  githubNameContainer.classList.add('githubNameContainer');
  const githubUsername = document.createTextNode('@github');
  const githubUsernameContainer = document.createElement('div');
  githubUsernameContainer.classList.add('githubUsernameContainer');
  whoToFollowContainer.append(githubContainer);
  githubContainer.append(githubIcon);
  githubContainer.append(githubTextContainer);
  githubTextContainer.append(githubNameContainer);
  githubTextContainer.append(githubUsernameContainer);
  githubNameContainer.append(githubName);
  githubUsernameContainer.append(githubUsername);

  // Github Buttons
  const githubFollowButton = document.createElement('div');
  githubFollowButton.classList.add('followButton');
  const githubFollowButtonText = document.createTextNode('Follow');
  githubFollowButton.append(githubFollowButtonText);
  const githubFollowingButton = document.createElement('div');
  githubFollowingButton.classList.add('followingButton');
  const githubFollowingButtonText = document.createTextNode('Following');
  githubFollowingButton.append(githubFollowingButtonText);
  const githubUnfollowButton = document.createElement('div');
  githubUnfollowButton.classList.add('unfollowButton');
  const githubUnfollowButtonText = document.createTextNode('Unfollow');
  githubUnfollowButton.append(githubUnfollowButtonText);

  // Github Button Functions
  githubContainer.append(githubFollowButton);
  githubFollowButton.addEventListener('click', () => {
    githubContainer.removeChild(githubFollowButton);
    githubContainer.append(githubFollowingButton);
  });
  githubFollowingButton.addEventListener('mouseenter', () => {
    githubContainer.removeChild(githubFollowingButton);
    githubContainer.append(githubUnfollowButton);
  });
  githubUnfollowButton.addEventListener('mouseout', () => {
    githubContainer.removeChild(githubUnfollowButton);
    githubContainer.append(githubFollowingButton);
  });

  // Github pop-up
  const githubUnfollowPopUpContainer = document.createElement('div');
  githubUnfollowPopUpContainer.classList.add('unfollowPopUpContainer');
  const githubOverlay = document.createElement('div');
  githubOverlay.classList.add('overlay');
  const githubPopUpUnfollowTitle = document.createTextNode('Unfollow');
  const githubPopUpUnfollowTitleContainer = document.createElement('div');
  githubPopUpUnfollowTitleContainer.classList.add('popUpUnfollowTitleContainer');
  const githubPopUpUnfollowUsername = document.createTextNode('@github?');
  const githubPopUpUnfollowUsernameContainer = document.createElement('div');
  githubPopUpUnfollowUsernameContainer.classList.add('popUpUnfollowUsernameContainer');
  const githubPopUpPara = document.getElementById('githubPopUpPara');
  const githubPopUpParaContainer = document.createElement('div');
  githubPopUpParaContainer.classList.add('popUpParaContainer');
  const githubPopUpUnfollowButton = document.createElement('div');
  githubPopUpUnfollowButton.classList.add('popUpUnfollowButton');
  const githubPopUpUnfollowButtonText = document.createTextNode('Unfollow');
  const githubPopUpCancelButton = document.createElement('div');
  githubPopUpCancelButton.classList.add('popUpCancelButton');
  const githubPopUpCancelButtonText = document.createTextNode('Cancel');
  githubUnfollowPopUpContainer.append(githubPopUpUnfollowTitleContainer);
  githubUnfollowPopUpContainer.append(githubPopUpUnfollowUsernameContainer);
  githubPopUpUnfollowTitleContainer.append(githubPopUpUnfollowTitle);
  githubPopUpUnfollowUsernameContainer.append(githubPopUpUnfollowUsername);
  githubUnfollowPopUpContainer.append(githubPopUpParaContainer);
  githubPopUpParaContainer.append(githubPopUpPara);
  githubUnfollowPopUpContainer.append(githubPopUpUnfollowButton);
  githubUnfollowPopUpContainer.append(githubPopUpCancelButton);
  githubPopUpUnfollowButton.append(githubPopUpUnfollowButtonText);
  githubPopUpCancelButton.append(githubPopUpCancelButtonText);

  githubUnfollowButton.addEventListener('click', () => {
    mainContainer.appendChild(githubOverlay);
    mainContainer.appendChild(githubUnfollowPopUpContainer);
  });
  githubPopUpUnfollowButton.addEventListener('click', () => {
    mainContainer.removeChild(githubOverlay);
    mainContainer.removeChild(githubUnfollowPopUpContainer);
    githubContainer.removeChild(githubFollowingButton);
    githubContainer.append(githubFollowButton);
  });
  githubPopUpCancelButton.addEventListener('click', () => {
    mainContainer.removeChild(githubOverlay);
    mainContainer.removeChild(githubUnfollowPopUpContainer);
  });
}

export default githubProfile;
