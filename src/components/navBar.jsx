import React from 'react';
import { Link } from 'react-router-dom';

import dashboardIcon from '../assets/icons/dashboard_icon.png';
import jobIcon from '../assets/icons/jobs_icon.png';
import appIcon from '../assets/icons/applicant_icon.png';

class NavBar extends React.Component {
  render() {
    return (
      <div className="main_nav">
        <nav>
          <Link to="/" exact>
            <div className="nav_menu_link">
              <img src={dashboardIcon} />
              <p>Dashboard</p>
            </div>
          </Link>
          <Link to="/jobsView">
            <div className="nav_menu_link">
              <img src={jobIcon} />
              <p>Jobs</p>
            </div>
          </Link>
          <Link to="/applicantView">
            <div className="nav_menu_link">
              <img src={appIcon} />
              <p>Applicants</p>
            </div>
          </Link>
        </nav>
      </div>
    );
  }
}

export default NavBar;
