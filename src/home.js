import createLeftSidebar from './leftSidebar';
import createMiddleContent from './middleContent';
import createRightSidebar from './rightSidebar';
import odinProfile from './odinProfile';
import githubProfile from './githubProfile';

function createHomePage() {
  createLeftSidebar();
  createMiddleContent();
  createRightSidebar();
  odinProfile();
  githubProfile();
}

export default createHomePage;
