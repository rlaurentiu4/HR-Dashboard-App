import React from 'react';
import appData from '../utilities/appData.js';

function RenderTableHeader() {
  let header = Object.keys(appData[0]);
  return header.map((key, index) => {
    return <th key={index}>{key.toUpperCase()}</th>;
  });
}

function TableOfApp() {
  return appData.map((applicant) => {
    const {
      id,
      fName,
      sName,
      eMail,
      phNumber,
      position,
      city,
      state,
      comments,
    } = applicant;
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{fName}</td>
        <td>{sName}</td>
        <td>{eMail}</td>
        <td>{phNumber}</td>
        <td>{position}</td>
        <td>{city}</td>
        <td>{state}</td>
        <td>{comments}</td>
      </tr>
    );
  });
}

class AppTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <div>
            <table className="react-table">
              <tbody>
                <tr>
                  <RenderTableHeader />
                </tr>
                <TableOfApp />
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AppTable;
