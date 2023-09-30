import { column1 } from './index.js';

function createLeftSidebar() {
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
}

export default createLeftSidebar;
