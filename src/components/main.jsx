import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './navBar.jsx';
import DashboardView from './dashboardView.jsx';
import JobsView from './jobView.jsx';
import ApplicantView from './applicatView.jsx';
import InterviewView from './interview.jsx';

class Main extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact component={DashboardView} />
            <Route path="/jobsView" component={JobsView} />
            <Route path="/applicantView" component={ApplicantView} />
            <Route path="/interviewView" component={InterviewView} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Main;
