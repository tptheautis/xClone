import { whoToFollowContainer } from './rightSidebar';

function stackProfile() {
  // Stack Overflow Profile
  const stackContainer = document.createElement('div');
  stackContainer.classList.add('stackContainer');
  const stackTextContainer = document.createElement('div');
  stackTextContainer.classList.add('stackTextContainer');
  const stackIcon = document.createElement('img');
  stackIcon.classList.add('stackIcon');
  stackIcon.src = '../src/assets/stackIcon.png';
  const stackName = document.createTextNode('Stack Overflow');
  const stackNameContainer = document.createElement('div');
  stackNameContainer.classList.add('stackNameContainer');
  const stackUsername = document.createTextNode('@StackOverflow');
  const stackUsernameContainer = document.createElement('div');
  stackUsernameContainer.classList.add('stackUsernameContainer');
  whoToFollowContainer.append(stackContainer);
  stackContainer.append(stackIcon);
  stackContainer.append(stackTextContainer);
  stackTextContainer.append(stackNameContainer);
  stackTextContainer.append(stackUsernameContainer);
  stackNameContainer.append(stackName);
  stackUsernameContainer.append(stackUsername);

  // Show More
  const showMoreContainer = document.createElement('div');
  showMoreContainer.classList.add('showMoreContainer');
  const showMoreText = document.createTextNode('Show more');
  whoToFollowContainer.append(showMoreContainer);
  showMoreContainer.append(showMoreText);
}

export default stackProfile;
