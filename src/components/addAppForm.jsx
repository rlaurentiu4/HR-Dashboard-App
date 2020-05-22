import React from 'react';
import jobData from '../utilities/jobData.js';
import appData from '../utilities/appData.js';

class AddAppForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applicants: appData,
    };
    this.renderJobSelect = this.renderJobSelect.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    const { applicants } = this.state,
      fname = this.refs.fname.value,
      sname = this.refs.sname.value,
      email = this.refs.email.value,
      phnumber = this.refs.phnumber.value,
      city = this.refs.city.value,
      state = this.refs.state.value,
      comments = this.refs.comments.value;
    this.setState(
      {
        applicants: [
          ...applicants,
          {
            fname,
            sname,
            email,
            phnumber,
            city,
            state,
            comments,
          },
        ],
      },
      () => {
        (this.refs.fname.value = ''),
          (this.refs.sname.value = ''),
          (this.refs.email.value = ''),
          (this.refs.phnumber.value = ''),
          (this.refs.city.value = ''),
          (this.refs.state.value = ''),
          (this.refs.comments.value = '');
      }
    );
    console.log(this.state);
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
                <input type="text" name="fname" ref="fname" />
                <span></span>
              </label>
              <label>
                <h4>Second name:</h4>
                <input type="text" name="sname" ref="sname" />
                <span></span>
              </label>
              <label>
                <h4>E-mail:</h4>
                <input type="text" name="email" ref="email" />
                <span></span>
              </label>
              <label>
                <h4>Ph. number:</h4>
                <input type="text" name="phnumber" ref="phnumber" />
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
                <input type="text" name="city" ref="city" />
                <span></span>
              </label>
              <label>
                <h4>State/Country:</h4>
                <input type="text" name="state" ref="state" />
                <span></span>
              </label>
              <label>
                <h4>Other comments:</h4>
                <textarea type="text" ref="comments"></textarea>
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
