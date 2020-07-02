import React from 'react';
import jobData from '../utilities/jobData.js';
import appData from '../utilities/appData.js';

function RenderJobSelect() {
  let optionItems = jobData.map((data) => (
    <option key={data.id} value={data.id}>
      {data.jobName}
    </option>
  ));

  return (
    <div>
      <select>{optionItems}</select>
    </div>
  );
}

class AddAppForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applicants: appData,
      newApp: {
        fname: '',
        sname: '',
        email: '',
        phnumber: '',
        position: '',
        city: '',
        state: '',
        comments: '',
      },
    };
    this.handleCloseForm = this.handleCloseForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { applicants, newApp } = this.state;
    this.setState(
      {
        contacts: [...applicants, newApp],
      },
      () => {
        for (let val in newApp) {
          newApp[val] = '';
        }
        this.setState({ newApp });
      }
    );
    console.log(applicants);
  }

  handleInput(e, element) {
    const { newApp } = this.state;
    newApp[element] = e.target.value;
    this.setState({ newApp });
  }

  handleCloseForm(e) {
    console.log('works yeeey');
    e.preventDefault();
    this.props.closeForm(e);
  }

  renderForm() {
    const { newApp } = this.state;
    const { fname, sname, email, phnumber, state, city, comments } = newApp;
    return (
      <React.Fragment>
        <form className="app_form" onSubmit={this.handleSubmit}>
          <div>
            <div className="app_form-first-row">
              <label>
                <h4>First name:</h4>
                <input
                  type="text"
                  name="fname"
                  value={fname}
                  onChange={(e) => this.handleInput(e, 'fname')}
                />
                <span></span>
              </label>
              <label>
                <h4>Second name:</h4>
                <input
                  type="text"
                  name="sname"
                  value={sname}
                  onChange={(e) => this.handleInput(e, 'sname')}
                />
                <span></span>
              </label>
              <label>
                <h4>E-mail:</h4>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => this.handleInput(e, 'email')}
                />
                <span></span>
              </label>
              <label>
                <h4>Ph. number:</h4>
                <input
                  type="text"
                  name="phnumber"
                  value={phnumber}
                  onChange={(e) => this.handleInput(e, 'phnumber')}
                />
                <span></span>
              </label>
              <label>
                <h4>Position:</h4>
                <RenderJobSelect />
                <span></span>
              </label>
            </div>
            <div className="app_form-second-row">
              <label>
                <h4>City:</h4>
                <input
                  type="text"
                  name="city"
                  value={city}
                  onChange={(e) => this.handleInput(e, 'city')}
                />
                <span></span>
              </label>
              <label>
                <h4>State/Country:</h4>
                <input
                  type="text"
                  name="state"
                  value={state}
                  onChange={(e) => this.handleInput(e, 'state')}
                />
                <span></span>
              </label>
              <label>
                <h4>Other comments:</h4>
                <textarea
                  type="text"
                  value={comments}
                  onChange={(e) => this.handleInput(e, 'comments')}
                ></textarea>
                <span></span>
              </label>
              <div className="form_btn-ctn">
                <button
                  type="button"
                  id="close-form"
                  onClick={this.handleCloseForm}
                >
                  Close Form
                </button>
                <button type="submit" id="submit-form">
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }

  render() {
    return <React.Fragment>{this.renderForm()}</React.Fragment>;
  }
}

export default AddAppForm;
