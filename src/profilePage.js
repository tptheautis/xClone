import createLeftSidebar from './leftSidebar';
import createProfile from './profile';
import createRightSidebar from './rightSidebar';

function createProfilePage() {
  createLeftSidebar();
  createProfile();
  createRightSidebar();
}

export default createProfilePage;
