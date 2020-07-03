import React from 'react';
import JobTable from './jobTable.jsx';
import appData from '../utilities/appData.js';

import apvApp from '../assets/icons/apv_app.png';
import schApp from '../assets/icons/sch_app.png';

class JobsView extends React.Component {
  render() {
    let appLenght = Object.keys(appData).length;
    return (
      <React.Fragment>
        <div className="main_ctn anim-view-ctn">
          <div className="_view_btn-ctn">
            <button className="btn-action">
              <img src={apvApp} className="btn-icn" />
              Approve Applicant
            </button>
            <button className="btn-action">
              <img src={schApp} className="btn-icn" />
              Schedule interview
            </button>
            <div className="_app-view-ctn-data">
              <div>
                <h4>Total</h4>
                <h3>{appLenght}</h3>
              </div>
              <div>
                <h4>Approved</h4>
                <h3>6</h3>
              </div>
              <div>
                <h4>Schedule</h4>
                <h3>3</h3>
              </div>
            </div>
          </div>
          <div className="_view-table-ctn">
            <div style={{ display: 'flex' }}>
              <h3>List with all the available jobs</h3>
              <input
                type="text"
                placeholder="Search for..."
                className="search_job-ctn"
              />
            </div>
            <JobTable />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default JobsView;
