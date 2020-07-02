import React from 'react';
import fire from '../config/firebase.js';

import { Link } from 'react-router-dom';

import dashboardIcon from '../assets/icons/dashboard_icon.png';
import jobIcon from '../assets/icons/jobs_icon.png';
import appIcon from '../assets/icons/applicant_icon.png';
import logo from '../assets/icons/logo.svg';

class NavBar extends React.Component {
  logout() {
    fire.auth().signOut();
  }
  render() {
    return (
      <div className="main_nav">
        <img src={logo} className="logo" />
        <nav>
          <Link to="/" exact>
            <div className="nav_menu_link">
              <img src={dashboardIcon} />
              <p>Dashboard</p>
            </div>
          </Link>
          <Link to="/applicantView">
            <div className="nav_menu_link">
              <img src={appIcon} />
              <p>Applicants</p>
            </div>
          </Link>
          <Link to="/jobsView">
            <div className="nav_menu_link">
              <img src={jobIcon} />
              <p>Jobs</p>
            </div>
          </Link>
          <Link to="/interviewView">
            <div className="nav_menu_link">
              <img />
              <p>Interviews</p>
            </div>
          </Link>
          <div>
            <button onClick={this.logout}>logout</button>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
