import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux'

import {Header} from "./components";
import {Cart,Home} from "./pages";

import {Route} from "react-router-dom";
import {setOysters} from "./redux/actions/oysters";

/*function App() {


  act.useEffect(() => {

  axios.get('http://localhost:3000/db.json')
      .then(({data})=>{
          setOysters(data.oysters);
          });
},[])

return ;

}*/

class App extends React.Component{
    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data})=>{
                this.props.setOysters(data.oysters);
            });
    }

    render() {
        return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path="/" render={() => <Home items={this.props.items}/>} exact />
                <Route path="/cart" component={Cart} exact/>
            </div>
        </div>
    );
    }
}
export default connect(
    (state) => {
    return {
        items: state.oysters.items,
        filters: state.filters,
    };
},
(dispatch) => {
    return {
        setOysters: (items) => dispatch(setOysters(items)),
    };
    },
)(App);
