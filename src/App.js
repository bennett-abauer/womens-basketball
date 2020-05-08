import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import RecruitmentPage from "./pages/recruitment-page/recruitment-page.component";

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
          <Route path="/recruitment-page" component={ RecruitmentPage } />
        </Switch>
      </div>
    );
  }
}

export default App;
