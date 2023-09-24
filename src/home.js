import createLeftSidebar from './leftSidebar';
import createMiddleContent from './middleContent';
import createRightSidebar from './rightSidebar';

function createHomePage() {
  createLeftSidebar();
  createMiddleContent();
  createRightSidebar();
}

export default createHomePage;
