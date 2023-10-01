import createLeftSidebar from './leftSidebar';
import createMiddleContent from './middleContent';
import createRightSidebar from './rightSidebar';
import odinProfile from './odinProfile';
import githubProfile from './githubProfile';
import stackProfile from './stackProfile';

function createHomePage() {
  createLeftSidebar();
  createMiddleContent();
  createRightSidebar();
  odinProfile();
  githubProfile();
  stackProfile();
}

export default createHomePage;
