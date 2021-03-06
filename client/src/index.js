import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Assets/Css/Font.css';

import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById('root'),
);
