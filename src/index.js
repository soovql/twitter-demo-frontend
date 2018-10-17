import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import registerServiceWorker from './registerServiceWorker';

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
