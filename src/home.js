import createLeftSidebar from './leftSidebar';
import createMiddleContent from './middleContent';
import createRightSidebar from './rightSidebar';
import odinProfile from './odinProfile';

function createHomePage() {
  createLeftSidebar();
  createMiddleContent();
  createRightSidebar();
  odinProfile();
}

export default createHomePage;
