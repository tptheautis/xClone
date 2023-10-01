import { whoToFollowContainer } from './rightSidebar';

function githubProfile() {
  // Github Profile
  const githubContainer = document.createElement('div');
  githubContainer.classList.add('githubContainer');
  const githubTextContainer = document.createElement('div');
  githubTextContainer.classList.add('githubTextContainer');
  const githubIcon = document.createElement('img');
  githubIcon.classList.add('githubIcon');
  githubIcon.src = '../src/assets/gitIcon.png';
  const githubName = document.createTextNode('GitHub');
  const githubNameContainer = document.createElement('div');
  githubNameContainer.classList.add('githubNameContainer');
  const githubUsername = document.createTextNode('@github');
  const githubUsernameContainer = document.createElement('div');
  githubUsernameContainer.classList.add('githubUsernameContainer');
  whoToFollowContainer.append(githubContainer);
  githubContainer.append(githubIcon);
  githubContainer.append(githubTextContainer);
  githubTextContainer.append(githubNameContainer);
  githubTextContainer.append(githubUsernameContainer);
  githubNameContainer.append(githubName);
  githubUsernameContainer.append(githubUsername);
}

export default githubProfile;
