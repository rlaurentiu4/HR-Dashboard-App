import React from 'react';
import AppTable from './appTable.jsx';
import AddAppForm from './addAppForm.jsx';

import addApp from '../assets/icons/add_app.png';
import rmvApp from '../assets/icons/remove_app.png';

class ApplicantView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };

    this.showFormApp = this.showFormApp.bind(this);
    this.closeFormApp = this.closeFormApp.bind(this);
  }

  showFormApp() {
    console.log('form closed');
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
              <img src={rmvApp} className="btn-icn" />
              Remove Applicant
            </button>
          </div>
          <div className="_view-table-ctn">
            <AppTable />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ApplicantView;
