import React from 'react';
import axios from 'axios';
import {useDispatch} from "react-redux";

import {Header} from "./components";
import {Cart,Home} from "./pages";
import {Route} from "react-router-dom";
import {setOysters} from "./redux/actions/oysters";

function App() {
    const dispatch = useDispatch();


    React.useEffect(()=>{
        axios.get('http://localhost:3000/db.json').then(({data})=>{
            dispatch(setOysters(data.oysters));
            });
    },[]);

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path="/" component={Home} exact />
                <Route path="/cart" component={Cart} exact/>
            </div>
        </div>
    );
}
export default App;
