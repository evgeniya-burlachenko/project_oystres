import React from 'react';
import axios from 'axios';

import {Header} from "./components";
import {Cart,Home} from "./pages";

import {Route} from "react-router-dom";

function App() {
    const  [oysters, setOysters] = React.useState([]);

React.useEffect(() => {
    /*fetch('http://localhost:3000/db.json')
        .then((resp) => resp.json())
        .then((json) => {
            setOysters(json.oysters);
        });
    },[])*/
    axios.get('http://localhost:3000/db.json')
        .then(({data})=>{
            setOysters(data.oysters);
            });
},[])

  return (
      <div className="wrapper">
        <Header/>

        <div className="content">
            <Route path="/" render={() => <Home items={oysters}/>} exact />
            <Route path="/cart" component={Cart} exact/>
        </div>
      </div>
  );
}

export default App;
