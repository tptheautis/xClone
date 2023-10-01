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
}

export default odinProfile;
