import React from 'react';
import jobData from '../utilities/jobData.js';

class AddAppForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      fnameError: '',
      sname: '',
      sError: '',
      email: '',
      emailError: '',
      phnumber: '',
      phError: '',
      city: '',
      state: '',
      textarea: '',
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.renderJobSelect = this.renderJobSelect.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitForm(e) {
    e.preventDefault();
  }

  handleCloseForm(e) {
    console.log('works yeeey');
    e.preventDefault();
    this.props.closeForm(e);
  }

  renderJobSelect() {
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

  renderForm() {
    return (
      <React.Fragment>
        <form className="app_form" onSubmit={this.submitForm}>
          <div>
            <div className="app_form-first-row">
              <label>
                <h4>First name:</h4>
                <input
                  type="text"
                  name="fname"
                  onChange={this.onChangeHandler}
                />
                <span></span>
              </label>
              <label>
                <h4>Second name:</h4>
                <input
                  type="text"
                  name="sname"
                  onChange={this.onChangeHandler}
                />
                <span></span>
              </label>
              <label>
                <h4>E-mail:</h4>
                <input
                  type="text"
                  name="email"
                  onChange={this.onChangeHandler}
                />
                <span></span>
              </label>
              <label>
                <h4>Ph. number:</h4>
                <input
                  type="text"
                  name="phnumber"
                  onChange={this.onChangeHandler}
                />
                <span></span>
              </label>
              <label>
                <h4>Position:</h4>
                {this.renderJobSelect()}
                <span></span>
              </label>
            </div>
            <div className="app_form-second-row">
              <label>
                <h4>City:</h4>
                <input
                  type="text"
                  name="city"
                  onChange={this.onChangeHandler}
                />
                <span></span>
              </label>
              <label>
                <h4>State/Country:</h4>
                <input
                  type="text"
                  name="state"
                  onChange={this.onChangeHandler}
                />
                <span></span>
              </label>
              <label>
                <h4>Other comments:</h4>
                <textarea></textarea>
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
