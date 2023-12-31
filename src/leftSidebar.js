import createProfile from './profile';
import createMiddleContent from './middleContent';
import { mainContainer, column1, column2, row1, row2 } from './index.js';
import { bannerContainer, profileInfoContainer, profileContentContainer } from './profile';

// Left Sidebar Elements
const home = document.createElement('div');
const explore = document.createElement('div');
const notifications = document.createElement('div');
const messages = document.createElement('div');
const bookmarks = document.createElement('div');
const twitterBlue = document.createElement('div');
const profile = document.createElement('div');
const more = document.createElement('div');
const tweet = document.createElement('div');
const postImageInput = document.getElementById('postImageInput');

// Left Sidebar Containers
const homeContainer = document.createElement('div')
const exploreContainer = document.createElement('div');
const notificationsContainer = document.createElement('div');
const messagesContainer = document.createElement('div');
const bookmarksContainer = document.createElement('div');
const twitterBlueContainer = document.createElement('div');
const profileContainer = document.createElement('div');
const moreContainer = document.createElement('div');
const tweetContainer = document.createElement('div');
function createLeftSidebar() {
  // Left Sidebar Images
  const twitterLogo = document.createElement('img');
  twitterLogo.classList.add('twitterLogo');
  twitterLogo.src = '../src/assets/twitter-logo.png';
  column1.append(twitterLogo);
  const homeLogo = document.createElement('img');
  homeLogo.classList.add('homeLogo');
  homeLogo.src = '../src/assets/home.png';
  home.append(homeLogo);
  const exploreLogo = document.createElement('img');
  exploreLogo.classList.add('exploreLogo');
  exploreLogo.src = '../src/assets/hashtag.png';
  explore.append(exploreLogo);
  const notificationsLogo = document.createElement('img');
  notificationsLogo.classList.add('notificationsLogo');
  notificationsLogo.src = '../src/assets/bell.png';
  notifications.append(notificationsLogo);
  const messagesLogo = document.createElement('img');
  messagesLogo.classList.add('messagesLogo');
  messagesLogo.src = '../src/assets/mail.png';
  messages.append(messagesLogo);
  const bookmarksLogo = document.createElement('img');
  bookmarksLogo.classList.add('bookmarksLogo');
  bookmarksLogo.src = '../src/assets/bookmark.png';
  bookmarks.append(bookmarksLogo);
  const twitterBlueLogo = document.createElement('img');
  twitterBlueLogo.classList.add('twitterBlueLogo');
  twitterBlueLogo.src = '../src/assets/twitterBlue.png';
  twitterBlue.append(twitterBlueLogo);
  const profileLogo = document.createElement('img');
  profileLogo.classList.add('profileLogo');
  profileLogo.src = '../src/assets/profile.png';
  profile.append(profileLogo);
  const moreLogo = document.createElement('img');
  moreLogo.classList.add('moreLogo');
  moreLogo.src = '../src/assets/more.png';
  more.append(moreLogo);

  // Left Sidebar Classes
  home.classList.add('home');
  explore.classList.add('explore');
  notifications.classList.add('notifications');
  messages.classList.add('messages');
  bookmarks.classList.add('bookmarks');
  twitterBlue.classList.add('twitterBlue');
  profile.classList.add('profile');
  more.classList.add('more');
  tweet.classList.add('tweet');
  homeContainer.classList.add('homeContainer');
  exploreContainer.classList.add('exploreContainer');
  notificationsContainer.classList.add('notificationsContainer');
  messagesContainer.classList.add('messagesContainer');
  bookmarksContainer.classList.add('bookmarksContainer');
  twitterBlueContainer.classList.add('twitterBlueContainer');
  profileContainer.classList.add('profileContainer');
  moreContainer.classList.add('moreContainer');

  // Left Sidebar Text
  const homeText = document.createTextNode('Home');
  const exploreText = document.createTextNode('Explore');
  const notificationsText = document.createTextNode('Notifications');
  const messagesText = document.createTextNode('Messages');
  const bookmarksText = document.createTextNode('Bookmarks');
  const twitterBlueText = document.createTextNode('Twitter Blue');
  const profileText = document.createTextNode('Profile');
  const moreText = document.createTextNode('More');
  const tweetText = document.createTextNode('Tweet');

  // Left Sidebar Appending
  column1.append(homeContainer, exploreContainer, notificationsContainer, messagesContainer);
  column1.append(bookmarksContainer, twitterBlueContainer, profileContainer, moreContainer);
  homeContainer.append(homeLogo, homeText);
  exploreContainer.append(exploreLogo, exploreText);
  notificationsContainer.append(notificationsLogo, notificationsText);
  messagesContainer.append(messagesLogo, messagesText);
  bookmarksContainer.append(bookmarksLogo, bookmarksText);
  twitterBlueContainer.append(twitterBlueLogo, twitterBlueText);
  profileContainer.append(profileLogo, profileText);
  moreContainer.append(moreLogo, moreText);
  column1.append(tweet);
  tweet.append(tweetText);

  // Home Button Dynamics
  homeContainer.addEventListener('click', () => {
    column2.append(row1);
    column2.append(row2);
  });

  // Profile Button Dynamics
  profileContainer.addEventListener('click', () => {
    createProfile();
  });

  homeContainer.addEventListener('click', () => {
    column2.removeChild(bannerContainer);
    column2.removeChild(profileInfoContainer);
    column2.removeChild(profileContentContainer);
  });
}

const tweetPopUpContainer = document.createElement('div');
tweetPopUpContainer.classList.add('tweetPopUpContainer');
const tweetPopUpContainerHeader = document.createElement('div');
tweetPopUpContainerHeader.classList.add('tweetPopUpContainerHeader');
const tweetPopUpContainerFooter = document.createElement('div');
tweetPopUpContainerFooter.classList.add('tweetPopUpContainerFooter');
const tweetPopUpContainerSidebar = document.createElement('div');
tweetPopUpContainerSidebar.classList.add('tweetPopUpContainerSidebar');
const tweetPopUpContainerContent = document.createElement('tweetPopUpContainerContent');
tweetPopUpContainerContent.classList.add('tweetPopUpContainerContent');
const myTweetText = document.getElementById('myTweetText');
const tweetPopUpContainerTweetButton = document.createElement('div');
tweetPopUpContainerTweetButton.classList.add('tweetPopUpContainerTweetButton');
const tweetPopUpContainerTweetButtonText = document.createTextNode('Tweet');
const tweetPopUpOverlay = document.createElement('div');
tweetPopUpOverlay.classList.add('overlay');
const tweetX = document.createElement('img');
tweetX.classList.add('tweetX');
tweetX.src = '../src/assets/x.png';
const mediaIcon = document.createElement('img');
mediaIcon.classList.add('mediaIcon');
mediaIcon.src = '../src/assets/mediaIcon.png';
const mediaIconContainer = document.createElement('div');
mediaIconContainer.classList.add('mediaIconContainer');

tweetPopUpContainer.append(tweetPopUpContainerHeader);
tweetPopUpContainer.append(tweetPopUpContainerFooter);
tweetPopUpContainer.append(tweetPopUpContainerSidebar);
tweetPopUpContainer.append(tweetPopUpContainerContent);
tweetPopUpContainerContent.append(myTweetText);
tweetPopUpContainerSidebar.append(tweetX);
tweetPopUpContainerFooter.append(mediaIconContainer);
mediaIconContainer.append(mediaIcon);
mediaIconContainer.append(postImageInput);

tweetPopUpContainerFooter.append(tweetPopUpContainerTweetButton);
tweetPopUpContainerTweetButton.append(tweetPopUpContainerTweetButtonText);

const myTweetContainer = document.createElement('div');
myTweetContainer.classList.add('myTweetContainer');
const myTweetContainerHeader = document.createElement('div');
myTweetContainerHeader.classList.add('myTweetContainerHeader');
const myTweetContainerFooter = document.createElement('div');
myTweetContainerFooter.classList.add('myTweetContainerFooter');
const myTweetContainerContent = document.createElement('div');
myTweetContainerContent.classList.add('myTweetContainerContent');
const myTweetContainerSidebar = document.createElement('div');
myTweetContainerSidebar.classList.add('myTweetContainerSidebar');
myTweetContainer.append(myTweetContainerHeader);
myTweetContainer.append(myTweetContainerFooter);
myTweetContainer.append(myTweetContainerContent);
myTweetContainer.append(myTweetContainerSidebar);
const myTweetContainerImageContainer = document.createElement('div');
myTweetContainerImageContainer.classList.add('myTweetContainerImageContainer');
tweetPopUpContainerContent.append(myTweetContainerImageContainer);

// My Tweet Pop-Up
tweet.addEventListener('click', () => {
  mainContainer.append(tweetPopUpOverlay);
  mainContainer.append(tweetPopUpContainer);
});
tweetX.addEventListener('click', () => {
  mainContainer.removeChild(tweetPopUpOverlay);
  mainContainer.removeChild(tweetPopUpContainer);
});
tweetPopUpContainerTweetButton.addEventListener('click', () => {
  mainContainer.removeChild(tweetPopUpContainer);
  mainContainer.removeChild(tweetPopUpOverlay);
  column2.append(myTweetContainer);
  myTweetContainerContent.append(myTweetText.value);
  console.log(myTweetText.value);

  // Upload Post Picture function
  let uploadedImage = '';

  postImageInput.addEventListener('change', () => {
    console.log('working');
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      uploadedImage = reader.result;
      myTweetContainerImageContainer.append(`url(${uploadedImage})`);
    });
  });
});

export default createLeftSidebar;
