import React from 'react';
import JobTable from './jobTable.jsx';
import AddAppForm from './addAppForm.jsx';

import addApp from '../assets/icons/add_app.png';
import apvApp from '../assets/icons/apv_app.png';
import rmvApp from '../assets/icons/remove_app.png';
import schApp from '../assets/icons/sch_app.png';

class JobsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };

    this.showFormApp = this.showFormApp.bind(this);
    this.closeFormApp = this.closeFormApp.bind(this);
  }

  showFormApp() {
    console.log('works');
    this.setState({ showForm: true });
  }

  closeFormApp() {
    this.setState({ showForm: false });
  }

  render() {
    const { showForm } = this.state;
    return (
      <React.Fragment>
        <div>
          <div className="_view_btn-ctn">
            <button onClick={this.showFormApp} className="btn-action">
              <img src={addApp} className="btn-icn" />
              Add Applicant
            </button>
            {showForm && <AddAppForm closeForm={this.closeFormApp} />}
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
