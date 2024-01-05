import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WaitManagement from './components/pages/WaitManagement'
import Header from './components/organisms/Header'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='App' style={{display:"flex"}}>
		<BrowserRouter>
        <Header/>
		<Routes>
			<Route path="/waitList" element={<WaitManagement />}></Route>
		</Routes>
		</BrowserRouter>
	</div>
  </React.StrictMode>
);
reportWebVitals();
