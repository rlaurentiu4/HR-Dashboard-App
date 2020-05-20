import React from 'react';
import JobTable from './jobTable.jsx';
import AddAppForm from './addAppForm.jsx';

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
          <div>
            <button onClick={this.showFormApp}>Add Applicant</button>
            {showForm && <AddAppForm closeForm={this.closeFormApp} />}
          </div>
          <div className="job_view-table-ctn">
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
