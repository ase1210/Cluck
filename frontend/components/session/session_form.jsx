import React from "react";
import NavBarContainer from "../navbar/navbar_container";

const SessionErrors = props => (
  <div className="session-errors-container">
    {props.sessionErrors.map((error, idx) => (
      <p className="session-errors-item" key={idx}>
        {error}
      </p>
    ))}
  </div>
);

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
      // form: { username: "", password: "" },
      // demo: { username: "Drew", password: "tester" }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleInput(field) {
    return e => {
      // const form = this.state.form;
      // form[field] = e.target.value;
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    const un = "Drew".split("");
    const pw = "tester".split("");
    this.setState({ username: "", password: "" }, () =>
      this.demoSignInHelper(un, pw)
    );
  }

  demoSignInHelper(un, pw) {
    if (un.length > 0) {
      this.setState({ username: this.state.username + un.shift() }, () => {
        window.setTimeout(() => this.demoSignInHelper(un, pw), 60);
      });
    } else if (pw.length > 0) {
      this.setState({ password: this.state.password + pw.shift() }, () => {
        window.setTimeout(() => this.demoSignInHelper(un, pw), 60);
      });
    } else {
      this.props.demoAction(this.state);
    }
  }

  render() {
    return (
      <div>
        <NavBarContainer />
        <div className="session-form-parent">
          {this.props.sessionErrors.length === 0 ? (
            <></>
          ) : (
            <SessionErrors sessionErrors={this.props.sessionErrors} />
          )}
          <div className="session-form-container">
            <h2>
              {this.props.formType}{" "}
              {this.props.formType === "Sign up" ? "for" : "to"} Cluck
            </h2>
            <form>
              <p>
                Enter your <span style={{ fontWeight: "bold" }}>username</span>{" "}
                and <span style={{ fontWeight: "bold" }}>password</span>.
              </p>
              <input
                type="text"
                value={this.state.username}
                autoFocus="autofocus"
                placeholder="username"
                onChange={this.handleInput("username")}
              />
              <br />
              <input
                type="password"
                value={this.state.password}
                placeholder="password"
                onChange={this.handleInput("password")}
              />
              <br />
              <button onClick={this.handleSubmit}>{this.props.formType}</button>
              <br />
              <button onClick={this.handleDemoSubmit}>Demo Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
