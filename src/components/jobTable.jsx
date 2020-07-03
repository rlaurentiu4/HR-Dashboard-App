import React from 'react';
import jobData from '../utilities/jobData.js';

class JobTable extends React.Component {
  constructor(props) {
    super(props);
    this.renderTable = this.renderTable.bind(this);
    this.renderTableHeader = this.renderTableHeader.bind(this);
  }

  renderTableHeader() {
    let header = Object.keys(jobData[0]);
    return header.map((key) => {
      return <th key={key}>{key.toUpperCase()}</th>;
    });
  }

  renderTable() {
    return jobData.map((job) => {
      const { id, jobName, duration } = job;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{jobName}</td>
          <td>{duration}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <div>
            <table className="react-table">
              <tbody>
                <tr>{this.renderTableHeader()}</tr>
                {this.renderTable()}
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default JobTable;
