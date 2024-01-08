import './index.css';
import ReactDOM from 'react-dom/client';
import Router from './components/router';
import { dbConnect } from './db/connect';

require('dotenv').config();

const init = async () => {

	await dbConnect();

}

init()
	.catch((err) => {
		console.error('Error is occured while running application. Error: ', err);
	});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='App' style={{display:"flex"}}>
		<Router />
	</div>
);