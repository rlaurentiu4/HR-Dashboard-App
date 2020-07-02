import React from 'react';
import firebase from '../config/firebase.js';
import regeneratorRuntime from 'regenerator-runtime';

function AddAppForm() {
  const [newApplicant, setNewApplicat] = React.useState();

  // const [applicants, setApplicant] = React.useState([]);
  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const db = firebase.firestore();
  //     const data = await db.collection('applicants').get();
  //     setApplicant(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   fetchData();
  //   console.log(applicants);
  // }, []);

  const onCreate = () => {
    const db = firebase.firestore();
    db.collection('applicants').add({ name: newApplicant });
    console.log('works');
  };

  return (
    <div>
      <input
        type="text"
        name="fullname"
        placeholder="Fullname"
        onChange={(e) => setNewApplicat(e.target.value)}
        value={newApplicant}
      />
      <button onClick={onCreate}>Submit</button>
      {/* {applicants.map((applicant) => (
      <li key={applicant.id}>{applicant.name}</li> */}
    </div>
  );
}

export default AddAppForm;
