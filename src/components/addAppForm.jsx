import React from 'react';
import firebase from '../config/firebase.js';
import regeneratorRuntime from 'regenerator-runtime';

function AddAppForm() {
  const [fName, setNewFName] = React.useState([]);
  const [sName, setSName] = React.useState([]);

  const [email, setEmail] = React.useState([]);
  const [phNumber, setPhNumber] = React.useState([]);

  const onCreate = () => {
    const db = firebase.firestore();
    db.collection('applicants').add({
      firstName: fName,
      secondName: sName,
      email: email,
      phNumber: phNumber,
    });
  };

  const handleSubmit = (e) => {
    preventDefault(e);
  };

  return (
    <div className="app_form">
      <input
        type="text"
        name="fullname"
        placeholder="Fullname"
        onChange={(e) => setNewFName(e.target.value)}
        value={fName}
      />

      <input
        type="text"
        name="secondname"
        placeholder="Secondname"
        onChange={(e) => setSName(e.target.value)}
        value={sName}
      />

      <input
        type="email"
        name="email"
        placeholder="enter email adress"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <input
        type="text"
        name="phNumber"
        placeholder="Enter phone number"
        onChange={(e) => setPhNumber(e.target.value)}
        value={phNumber}
      />

      <button onClick={onCreate} className="submit-form">
        Submit
      </button>
    </div>
  );
}

export default AddAppForm;
