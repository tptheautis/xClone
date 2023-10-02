import createLeftSidebar from './leftSidebar';
import createMiddleContent from './middleContent';
import createRightSidebar from './rightSidebar';
import odinProfile from './odinProfile';
import githubProfile from './githubProfile';
import stackProfile from './stackProfile';
import { column2 } from './index';

function createHomePage() {
  createLeftSidebar();
  createMiddleContent();
  createRightSidebar();
  odinProfile();
  githubProfile();
  stackProfile();
}

export default createHomePage;
