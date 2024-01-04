import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/pages/Main'
import Header from './components/organisms/Header'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='App'>
			<BrowserRouter>
        <Header/>
				<Routes>
					<Route path="/" element={<Main />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
  </React.StrictMode>
);
reportWebVitals();
