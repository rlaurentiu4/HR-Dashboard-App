import React from 'react';
import appData from '../utilities/appData.js';
import jobData from '../utilities/jobData.js';

class DashboardView extends React.Component {
  render() {
    let jobLenght = Object.keys(jobData).length;
    let appLenght = Object.keys(appData).length;
    return (
      <React.Fragment>
        <div className="app-box">
          <h2>Total Nr. of applicants</h2>
          <h3>{appLenght}</h3>
        </div>
        <div className="app-box">
          <h2>Total Nr. of jobs</h2>
          <h3>{jobLenght}</h3>
        </div>
      </React.Fragment>
    );
  }
}

export default DashboardView;
