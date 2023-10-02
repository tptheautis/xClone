import { column2, row1, row2 } from './index';

const bannerContainer = document.createElement('div');
const profileInfoContainer = document.createElement('div');
const profileContentContainer = document.createElement('div');
bannerContainer.classList.add('bannerContainer');
profileInfoContainer.classList.add('profileInfoContainer');
profileContentContainer.classList.add('profileContentContainer');
const profileInfo = document.createElement('div');
profileInfo.classList.add('profileInfo');
const editProfileButton = document.createElement('div');
editProfileButton.classList.add('editProfileButton');
const editProfileButtonText = document.createTextNode('Edit Profile');

function createProfile() {
  column2.removeChild(row1);
  column2.removeChild(row2);
  column2.append(bannerContainer);
  column2.append(profileInfoContainer);
  column2.append(profileContentContainer);
  profileInfoContainer.append(profileInfo);
  profileInfoContainer.append(editProfileButton);
  editProfileButton.append(editProfileButtonText);
}

export {
  bannerContainer, profileInfoContainer, profileContentContainer,
};

export default createProfile;
