import React from 'react';
import PhoneNumber from './components/PhoneNumber';
import Otp from './components/Otp';
import Success from './components/Success';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/phone" component={PhoneNumber}/>
          <Route exact path="/otp" component={Otp}/>
          <Route exact path="/success" component={Success}/>
        </Switch>
      </Router>
    )
  }

}

export default App;
