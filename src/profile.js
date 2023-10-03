import { column2, row1, row2 } from './index';

const bannerContainer = document.createElement('div');
const profileInfoContainer = document.createElement('div');
const profileContentContainer = document.createElement('div');
bannerContainer.classList.add('bannerContainer');
profileInfoContainer.classList.add('profileInfoContainer');
profileContentContainer.classList.add('profileContentContainer');
const profileInfo = document.createElement('div');
profileInfo.classList.add('profileInfo');
const profileNameContainer = document.createElement('div');
profileNameContainer.classList.add('profileUsername');
const profileNameText = document.createTextNode('NewUser');
const profileUsernameContainer = document.createElement('div');
profileUsernameContainer.classList.add('profileUsername');
const profileUsernameText = document.createTextNode('@NewUser');
const profileFollowingContainer = document.createElement('div');
profileFollowingContainer.classList.add('profileFollowing');
const profileFollowingText = document.createTextNode('Following');
const profileFollowersContainer = document.createElement('div');
profileFollowersContainer.classList.add('profileFollowers');
const profileFollowersText = document.createTextNode('Followers');
const editProfileButtonContainer = document.createElement('div');
editProfileButtonContainer.classList.add('editProfileButton');
const editProfileButtonText = document.createTextNode('Edit Profile');
const profileOptionsContainer = document.createElement('div');
profileOptionsContainer.classList.add('profileOptionsContainer');
const profilePostsContainer = document.createElement('div');
profilePostsContainer.classList.add('profilePostsContainer');
const profilePostsContainerText = document.createTextNode('Posts');
const profileRepliesContainer = document.createElement('div');
profileRepliesContainer.classList.add('profileLikesContainer');
const profileRepliesContainerText = document.createTextNode('Replies');
const profileHighlightsContainer = document.createElement('div');
profileHighlightsContainer.classList.add('profileHighlightsContainer');
const profileHighlightsContainerText = document.createTextNode('Highlights');
const profileMediaContainer = document.createElement('div');
profileMediaContainer.classList.add('profileMediaContainer');
const profileMediaContainerText = document.createTextNode('Media');
const profileLikesContainer = document.createElement('div');
profileLikesContainer.classList.add('profileLikesContainer');
const profileLikesContainerText = document.createTextNode('Likes');

function createProfile() {
  column2.removeChild(row1);
  column2.removeChild(row2);
  column2.append(bannerContainer);
  column2.append(profileInfoContainer);
  column2.append(profileContentContainer);
  profileInfoContainer.append(editProfileButtonContainer);
  editProfileButtonContainer.append(editProfileButtonText);
  profileInfoContainer.append(profileInfo);
  profileInfo.append(profileNameContainer);
  profileNameContainer.append(profileNameText);
  profileInfo.append(profileUsernameContainer);
  profileUsernameContainer.append(profileUsernameText);
  profileInfo.append(profileFollowingContainer);
  profileFollowingContainer.append(profileFollowingText);
  profileInfo.append(profileFollowersContainer);
  profileFollowersContainer.append(profileFollowersText);
  profileInfoContainer.append(profileOptionsContainer);
  profileOptionsContainer.append(profilePostsContainer);
  profilePostsContainer.append(profilePostsContainerText);
  profileOptionsContainer.append(profileRepliesContainer);
  profileRepliesContainer.append(profileRepliesContainerText);
  profileOptionsContainer.append(profileHighlightsContainer);
  profileHighlightsContainer.append(profileHighlightsContainerText);
  profileOptionsContainer.append(profileMediaContainer);
  profileMediaContainer.append(profileMediaContainerText);
  profileOptionsContainer.append(profileLikesContainer);
  profileLikesContainer.append(profileLikesContainerText);
}

export {
  bannerContainer, profileInfoContainer, profileContentContainer,
};

export default createProfile;
