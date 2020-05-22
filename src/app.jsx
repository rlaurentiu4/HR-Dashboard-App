import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from '../src/components/navBar.jsx';
import DashboardView from './components/dashboardView.jsx';
import JobsView from './components/jobView.jsx';
import ApplicantView from './components/applicatView.jsx';
import InterviewView from './components/interview.jsx';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="main-ctn">
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
export default App;
