import { row1 } from './index'

function createMiddleContent() {
  // Middle Elements
  const homeHeading = document.createElement('h1');
  const forYou = document.createElement('div');
  const following = document.createElement('div');
  homeHeading.classList.add('homeHeading');
  forYou.classList.add('forYou');
  following.classList.add('following');
  const homeHeadingText = document.createTextNode('Home');
  const forYouText = document.createTextNode('For you');
  const followingText = document.createTextNode('Following');
  homeHeading.append(homeHeadingText);
  forYou.append(forYouText);
  following.append(followingText);
  row1.append(homeHeading);
  row1.append(forYou);
  row1.append(following);
}

export default createMiddleContent;
