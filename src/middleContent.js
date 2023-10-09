import { row1 } from './index'

function createMiddleContent() {
  const homeHeadingContainer = document.createElement('h1');
  const forYou = document.createElement('div');
  const following = document.createElement('div');
  homeHeadingContainer.classList.add('homeHeading');
  forYou.classList.add('forYou');
  following.classList.add('following');
  const homeHeadingText = document.createTextNode('Home');
  const blueUnderline1 = document.createElement('div');
  blueUnderline1.classList.add('blueUnderline1');
  const blueUnderline2 = document.createElement('div');
  blueUnderline2.classList.add('blueUnderline2');
  const forYouText = document.createTextNode('For you');
  const forYouContainer = document.createElement('div');
  forYouContainer.classList.add('forYouContainer');
  forYouContainer.classList.add('.forYouContainer');
  const forYouTextContainer = document.createElement('div');
  forYouTextContainer.classList.add('forYouTextContainer');
  const followingText = document.createTextNode('Following');
  const followingContainer = document.createElement('div');
  followingContainer.classList.add('followingContainer');
  const followingTextContainer = document.createElement('div');
  followingTextContainer.classList.add('followingTextContainer');
  const row1OptionsContainer = document.createElement('div');
  row1OptionsContainer.classList.add('row1OptionsContainer');
  row1.append(homeHeadingContainer, row1OptionsContainer);
  homeHeadingContainer.append(homeHeadingText);
  row1OptionsContainer.append(forYouContainer, followingContainer);
  forYouContainer.append(forYouTextContainer);
  followingContainer.append(followingTextContainer);
  forYouTextContainer.append(forYouText);
  followingTextContainer.append(followingText);
  forYouTextContainer.append(blueUnderline1);
  followingTextContainer.append(blueUnderline2);
  blueUnderline2.style.backgroundColor = 'white';

  // Blue Underline animation
  forYouContainer.addEventListener('click', () => {
    followingTextContainer.style.fontWeight = 200;
    forYouTextContainer.style.fontWeight = 600;
    blueUnderline1.style.backgroundColor = '#1DA1F2';
    blueUnderline2.style.backgroundColor = 'white';
  });
  followingContainer.addEventListener('click', () => {
    forYouTextContainer.style.fontWeight = 200;
    followingTextContainer.style.fontWeight = 600;
    blueUnderline2.style.backgroundColor = '#1DA1F2';
    blueUnderline1.style.backgroundColor = 'white';
    blueUnderline1.addEvenetListener('mouseover', () => {
      blueUnderline1.style.backgroundColor = '#e1e8ed';
    });
  });
}

export default createMiddleContent;
