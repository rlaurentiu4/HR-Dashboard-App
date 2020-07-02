import React, { Children } from 'react';
import firebase from '../config/firebase.js';

function AppTable() {
  const [applicants, setApplicants] = React.useState([]);
  const speed = React.useState(['']);
  console.log(this.state);
  let data = () =>
    React.useEffect(() => {
      const fetchData = async () => {
        const db = firebase.firestore();
        const data = await db.collection('applicants').get();
        setApplicants(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      fetchData();
    }, []);
  data();

  // const db = firebase.firestore();
  // const dbRef = db.ref().child('data');
  // db.Ref.on('value', (snapshot) => {
  //   this.setState({
  //     data: snapshot.val(),
  //   });
  // });

  let renderData = () => (
    <div>
      {applicants.map((applicant) => (
        <li key={applicant.id}>{applicant.name}</li>
      ))}
    </div>
  );

  // return <div>{true ? data() : renderData()}</div>;

  return <div>{renderData()}</div>;
  console.log(this.fetchData());
}

export default AppTable;

// function RenderTableHeader() {
//   let header = Object.keys(appData[0]);
//   return header.map((key, index) => {
//     return <th key={index}>{key.toUpperCase()}</th>;
//   });
// }

// function TableOfApp() {
//   return appData.map((applicant) => {
//     const {
//       id,
//       fName,
//       sName,
//       eMail,
//       phNumber,
//       position,
//       city,
//       state,
//       comments,
//     } = applicant;
//     return (
//       <tr key={id}>
//         <td>{id}</td>
//         <td>{fName}</td>
//         <td>{sName}</td>
//         <td>{eMail}</td>
//         <td>{phNumber}</td>
//         <td>{position}</td>
//         <td>{city}</td>
//         <td>{state}</td>
//         <td>{comments}</td>
//       </tr>
//     );
//   });
// }

// class AppTable extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <div>
//           <div>
//             <table className="react-table">
//               <tbody>
//                 <tr>
//                   <RenderTableHeader />
//                 </tr>
//                 <TableOfApp />
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }
