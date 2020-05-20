import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from '../src/components/navBar.jsx';
import DashboardView from './components/dashboardView.jsx';
import ApplicantView from './components/applicatView.jsx';
import JobsView from './components/jobView.jsx';

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
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
