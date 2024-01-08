import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './components/router';
import { dbConnect } from './db/connect';

require('dotenv').config();

const init = async () => {

	await dbConnect();

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='App' style={{display:"flex"}}>
		<Router />
	</div>
);