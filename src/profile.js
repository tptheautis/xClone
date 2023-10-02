import { column2, row1, row2 } from './index';

function createProfile() {
  column2.removeChild(row1);
  column2.removeChild(row2);
  const bannerContainer = document.createElement('div');
  bannerContainer.classList.add('bannerContainer');
  const profileInfoContainer = document.createElement('div');
  profileInfoContainer.classList.add('profileInfoContainer');
  const profileContentContainer = document.createElement('div');
  profileContentContainer.classList.add('profileContentContainer');
  column2.append(bannerContainer);
  column2.append(profileInfoContainer);
  column2.append(profileContentContainer);
}

export default createProfile;
