import React from 'react';

const SessionErrors = (props) => (
  <div className="session-errors-container">
    {props.sessionErrors.map((error, idx) => (
      <p className="session-errors-item" key={idx}>{error}</p>
    )
    )}
  </div>
)

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: { username: "", password: "" },
      demo: { username: 'Drew', password: 'tester' }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleInput(field) {
    return (e) => {
      const form = this.state.form;
      form[field] = e.target.value;
      this.setState({ form });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state.form);
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    this.props.demoAction(this.state.demo);
  }

  render() {
    return (
      <div className='session-form-parent'>
        {this.props.sessionErrors.length === 0 ? <></> : <SessionErrors sessionErrors={this.props.sessionErrors} />}
        <div className="session-form-container">
          <h2>{this.props.formType} {this.props.formType === "Sign up" ? "for" : "to"} Cluck</h2>
          {/* <form onClick={this.props.clearErrors}> */}
          <form>
            <p>Enter your <span style={{ fontWeight: 'bold' }}>username</span> and <span style={{ fontWeight: 'bold' }}>password</span>.</p>
            <input type='text' value={this.state.username}
              autoFocus="autofocus"
              placeholder='username'
              onChange={this.handleInput('username')} />
            <br />
            <input type='password' value={this.state.password}
              placeholder='password'
              onChange={this.handleInput('password')} />
            <br />
            <button onClick={this.handleSubmit}>{this.props.formType}</button>
            <br />
            <button onClick={this.handleDemoSubmit}>Demo Login</button>
          </form>
        </div>
      </div >
    )
  }
}

export default SessionForm;