import React from 'react';
import appData from '../utilities/appData.js';

class AppTable extends React.Component {
  constructor(props) {
    super(props);
    this.renderTable = this.renderTable.bind(this);
    this.renderTableHeader = this.renderTableHeader.bind(this);
  }

  renderTableHeader() {
    let header = Object.keys(appData[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  renderTable() {
    return appData.map((applicant) => {
      const { id, fName, sName, eMail, phNumber } = applicant;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{fName}</td>
          <td>{sName}</td>
          <td>{eMail}</td>
          <td>{phNumber}</td>
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

export default AppTable;
