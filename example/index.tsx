import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {MediaEditor} from '../.';
import './App.css'
const App = () => {
  return (
    <div>
      <MediaEditor />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
