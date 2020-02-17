import React from 'react';
import './SignIn.styles.scss';
import FormInput from '../form-input/FormInput';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      email: '',
      password: ''
    });
  }

  handleChange = event => {
    const {value, name} = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label='email' required></FormInput>
          <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label='password' required></FormInput>
          <input type="submit" value="Submit form"></input>
        </form>
      </div>
    );
  }
}

export default SignIn;