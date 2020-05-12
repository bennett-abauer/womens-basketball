import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import RecruitmentPage from "./pages/recruitment-page/recruitment-page.component";
import RecruitView from "./pages/recruit-view/recruit-view.component";
import CoachSignIn from "./pages/coach-sign-in/coach-sign-in.component";

import { auth } from "./firebase/firebase.utils";

class App extends React.Component { 
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={ this.state.currentUser } />
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route path="/recruitment-page" component={ RecruitmentPage } />
          <Route path="/recruit-view" component={ RecruitView } />
          <Route path="/coach-sign-in" component={ CoachSignIn } />
        </Switch>
      </div>
    );
  }
}

export default App;
