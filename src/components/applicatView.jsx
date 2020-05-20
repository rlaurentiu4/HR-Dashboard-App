import React from 'react';
import AppTable from './appTable.jsx';

class ApplicantView extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="_view-table-ctn">
          <h1>App View</h1>
          <AppTable />
        </div>
      </React.Fragment>
    );
  }
}

export default ApplicantView;
