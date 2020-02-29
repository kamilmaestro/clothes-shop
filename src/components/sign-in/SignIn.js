import React from 'react';
import './SignIn.styles.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;  
    try {
      auth.signInWithEmailAndPassword(email, password);
      this.setState({
        'email': '',
        'password': ''
      });
    } catch (error) {
      console.log(error);
    }
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
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;