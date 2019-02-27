import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: { username: "", password: "" },
      // remember: "unchecked",
      demo: { username: 'Drew', password: 'tester' }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    // this.handleInput = this.handleInput.bind(this);
    // this.handleRemember = this.handleRemember.bind(this);
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
    this.props.action(this.state.demo);
  }

  // handleRemember(e) {
  //   const newVal = this.state.remember === "checked" ? "unchecked" : "checked";
  //   this.setState({ remember: newVal });
  // }

  render() {
    const errors = this.props.sessionErrors.map(
      (error, idx) => <li key={idx}>{error}</li>
    )
    return (
      <div>
        <h2>{this.props.formType} to Cluck</h2>
        <p>Enter your username and password</p>
        {errors.length === 0 ? <></> : <ul>{errors}</ul>}
        <form onClick={this.props.clearErrors}>
          <input type='text' value={this.state.username}
            onChange={this.handleInput('username')} />
          <br />
          <input type='password' value={this.state.password}
            onChange={this.handleInput('password')} />
          <br />
          <button onClick={this.handleSubmit}>{this.props.formType}</button>
          <br />
          <button onClick={this.handleDemoSubmit}>Demo Login</button>
          {/* <br /> */}
          {/* <label>
            <input type="checkbox" value={this.state.remember}
              onClick={this.handleRemember} />Remember me
          </label> */}
        </form>
      </div>
    )
  }
}

export default SessionForm;