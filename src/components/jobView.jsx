import React from 'react';
import JobTable from './jobTable.jsx';

import apvApp from '../assets/icons/apv_app.png';
import rmvApp from '../assets/icons/remove_app.png';
import schApp from '../assets/icons/sch_app.png';

class JobsView extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="_view_btn-ctn">
            <button className="btn-action">
              <img src={apvApp} className="btn-icn" />
              Approve Applicant
            </button>
            <button className="btn-action">
              <img src={rmvApp} className="btn-icn" />
              Remove Applicant
            </button>
            <button className="btn-action">
              <img src={schApp} className="btn-icn" />
              Schedule interview
            </button>
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
