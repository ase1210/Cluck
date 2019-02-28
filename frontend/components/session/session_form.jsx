import React from 'react';

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
    const errors = this.props.sessionErrors.map(
      (error, idx) => <li className="session-errors-item" key={idx}>{error}</li>
    )
    const preposition = this.props.formType === "Signup" ? "for" : "to";
    return (
      <div className="session-form-container">
        <h2>{this.props.formType} {preposition} Cluck</h2>
        <p>Enter your username and password</p>
        {errors.length === 0 ? <></> : <ul className='session-errors-list'>{errors}</ul>}
        <form onClick={this.props.clearErrors}>
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
    )
  }
}

export default SessionForm;