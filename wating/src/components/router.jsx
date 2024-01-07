import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './organisms/Header'

import WaitManagement from './pages/WaitManagement'
import PersonManagement from './pages/PersonManagement';
import GroupManagement from './pages/GroupManagement';

const Router = () => {
  return(
    <BrowserRouter>
      <Header/>
		  <Routes>
			  <Route path="/waitList" element={<WaitManagement />} />
			  <Route path="/personList" element={<PersonManagement />} />
			  <Route path="/groupList" element={<GroupManagement />} />
		  </Routes>
		</BrowserRouter>
  );
}

export default Router;