import { mainContainer } from './index';
import { whoToFollowContainer } from './rightSidebar';

function odinProfile() {
  // Odin Project Profile
  const odinContainer = document.createElement('div');
  odinContainer.classList.add('odinContainer');
  const odinIcon = document.createElement('img');
  odinIcon.classList.add('odinIcon');
  odinIcon.src = '../src/assets/odinIcon.png';
  const odinTextContainer = document.createElement('div');
  odinTextContainer.classList.add('odinTextContainer');
  const odinName = document.createTextNode('The Odin Project');
  const odinNameContainer = document.createElement('div');
  odinNameContainer.classList.add('odinNameContainer');
  const odinUsername = document.createTextNode('@TheOdinProject');
  const odinUsernameContainer = document.createElement('div');
  odinUsernameContainer.classList.add('odinUsernameContainer');
  whoToFollowContainer.append(odinContainer);
  odinContainer.append(odinIcon);
  odinContainer.append(odinTextContainer);
  odinTextContainer.append(odinNameContainer);
  odinTextContainer.append(odinUsernameContainer);
  odinNameContainer.append(odinName);
  odinUsernameContainer.append(odinUsername);

  // Odin Buttons
  const odinFollowButton = document.createElement('div');
  odinFollowButton.classList.add('followButton');
  const odinFollowButtonText = document.createTextNode('Follow');
  odinFollowButton.append(odinFollowButtonText);
  const odinFollowingButton = document.createElement('div');
  odinFollowingButton.classList.add('followingButton');
  const odinFollowingButtonText = document.createTextNode('Following');
  odinFollowingButton.append(odinFollowingButtonText);
  const odinUnfollowButton = document.createElement('div');
  odinUnfollowButton.classList.add('unfollowButton');
  const odinUnfollowButtonText = document.createTextNode('Unfollow');
  odinUnfollowButton.append(odinUnfollowButtonText);

  // Odin Button Functions
  odinContainer.append(odinFollowButton);
  odinFollowButton.addEventListener('click', () => {
    odinContainer.removeChild(odinFollowButton);
    odinContainer.append(odinFollowingButton);
  });
  odinFollowingButton.addEventListener('mouseenter', () => {
    odinContainer.removeChild(odinFollowingButton);
    odinContainer.append(odinUnfollowButton);
  });
  odinUnfollowButton.addEventListener('mouseout', () => {
    odinContainer.removeChild(odinUnfollowButton);
    odinContainer.append(odinFollowingButton);
  });

  // Odin pop-up
  const unfollowPopUpContainer = document.createElement('div');
  unfollowPopUpContainer.classList.add('unfollowPopUpContainer');
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  const popUpUnfollowTitle = document.createTextNode('Unfollow');
  const odinPopUpUsername = document.createTextNode('@TheOdinProject?');
  const odinPopUpUsernameContainer = document.createElement('div');
  odinPopUpUsernameContainer.classList.add('popUpUnfollowUsernameContainer');
  const odinPopUpUnfollowTitleContainer = document.createElement('div');
  odinPopUpUnfollowTitleContainer.classList.add('popUpUnfollowTitleContainer');
  const popUpPara = document.getElementById('odinPopUpPara');
  const popUpParaContainer = document.createElement('div');
  popUpParaContainer.classList.add('popUpParaContainer');
  const popUpUnfollowButton = document.createElement('div');
  popUpUnfollowButton.classList.add('popUpUnfollowButton');
  const popUpUnfollowButtonText = document.createTextNode('Unfollow');
  const popUpCancelButton = document.createElement('div');
  popUpCancelButton.classList.add('popUpCancelButton');
  const popUpCancelButtonText = document.createTextNode('Cancel');
  unfollowPopUpContainer.append(odinPopUpUnfollowTitleContainer);
  unfollowPopUpContainer.append(odinPopUpUsernameContainer);
  odinPopUpUnfollowTitleContainer.append(popUpUnfollowTitle);
  odinPopUpUsernameContainer.append(odinPopUpUsername);
  unfollowPopUpContainer.append(popUpParaContainer);
  popUpParaContainer.append(popUpPara);
  unfollowPopUpContainer.append(popUpUnfollowButton);
  unfollowPopUpContainer.append(popUpCancelButton);
  popUpUnfollowButton.append(popUpUnfollowButtonText);
  popUpCancelButton.append(popUpCancelButtonText);

  odinUnfollowButton.addEventListener('click', () => {
    mainContainer.append(overlay);
    mainContainer.append(unfollowPopUpContainer);
  });
  popUpUnfollowButton.addEventListener('click', () => {
    mainContainer.removeChild(overlay);
    mainContainer.removeChild(unfollowPopUpContainer);
    odinContainer.removeChild(odinFollowingButton);
    odinContainer.append(odinFollowButton);
  });
  popUpCancelButton.addEventListener('click', () => {
    mainContainer.removeChild(overlay);
    mainContainer.removeChild(unfollowPopUpContainer);
  });
}

export default odinProfile;
