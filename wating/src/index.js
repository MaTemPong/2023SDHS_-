import './index.css';
import ReactDOM from 'react-dom/client';
import Router from './components/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='App' style={{display:"flex"}}>
		<Router />
	</div>
);