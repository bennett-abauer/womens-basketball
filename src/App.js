import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import Header from "./components/header/header.component";
import HomePage from "./pages/homePage/homePage.component";
import RecruitmentPage from "./pages/recruitmentPage/recruitmentPage.component";

class App extends React.Component { 
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route path="/recruitmentPage" component={ RecruitmentPage } />
        </Switch>
      </div>
    );
  }
}

export default App;
