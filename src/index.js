import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import store from "./redux/store";


import './scss/app.scss';

import App from './App';

const inc = () => {
    store.dispatch({
        type: 'INCREMENT'
    });
}

store.subscribe(()=>{
    console.log('изменился', store.getState());
})

ReactDOM.render(

      <Router>
          <button onClick={inc}>+1</button>
          <App/>
      </Router>,

  document.getElementById('root')
);


