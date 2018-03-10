import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ItemService from './ItemService';
import {FormErrors} from '../FormErrors';
import 'bootstrap/dist/css/bootstrap.css';
import '../Form.css';
import SkyLight from 'react-skylight';
//const passwordHash = require('password-hash');
// import validator from 'validator';
class AddItem extends Component {

  constructor(props) {
      super(props);
      this.state = {
          firstName: '',
          lastName: '',
          username: '',
          email: '',
          phone: '',
         // password: '',
        //  confirmPassword: '',
          code:'',
          formErrors: {
              firstName: '',
              lastName: '',
              username: '',
              email: '',
              phone: '',
             // password: '',
            //  confirmPassword: ''
          },
          firstNameValid: false,
          lastNameValid: false,
          usernameValid: false,
          emailValid: false,
          phoneValid: false,
        //  passwordValid: false,
         // confirmPasswordValid: false,
          formValid: false
      };
      this.addItemService = new ItemService();

      this.handleUserInput = this.handleUserInput.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => {
                this.validateField(name, value)
            });
    };
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let firstNameValid = this.state.firstNameValid;
        let lastNameValid = this.state.lastNameValid;
        let usernameValid = this.state.usernameValid;
        let emailValid = this.state.emailValid;
        let phoneValid = this.state.phoneValid;
       // let passwordValid = this.state.passwordValid;
        //let confirmPasswordValid = this.state.confirmPasswordValid;

        switch (fieldName) {
            case 'firstName':
                firstNameValid = value.match(/^[a-zA-Z]+$/);
                fieldValidationErrors.firstName = firstNameValid ? '' : ' is invalid';
                break;
            case 'lastName':
                lastNameValid = value.match(/^[a-zA-Z]+$/);
                fieldValidationErrors.lastName = lastNameValid ? '' : ' is invalid';
                break;
            case 'username':
                usernameValid = (value.length >= 5 && value.length <=20);
                fieldValidationErrors.username = usernameValid ? '' : ' is invalid';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'phone':
                phoneValid=(value.length >= 5 && value.match(/^[0-9]+$/));
                fieldValidationErrors.phone = phoneValid ? '' : ' is invalid';
                break;
            // case 'password':
            //     passwordValid = value.length >= 6;
            //     fieldValidationErrors.password = passwordValid ? '' : ' is too short';
            //     break;
            // case 'confirmPassword':
            //     confirmPasswordValid = (value===this.state.password);
            //     fieldValidationErrors.confirmPassword = confirmPasswordValid ? '' : 'is too short';
            //     break;

            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            firstNameValid: firstNameValid,
            lastNameValid:lastNameValid,
            usernameValid:usernameValid,
            phoneValid:phoneValid,
            emailValid: emailValid,
            //passwordValid: passwordValid,
            //confirmPasswordValid:confirmPasswordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid:this.state.firstNameValid && this.state.lastNameValid && this.state.usernameValid &&  this.state.emailValid && this.state.phoneValid}); //this.state.passwordValid && this.state.confirmPasswordValid});
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    handleSubmit(event) {
      event.preventDefault();
      let obj={ firstName: '',
            lastName: '',
            username: '',
            email: '',
            phone: '',
            //password:'',
            code:''
      };
      let a= this.state;
        //let hashedPassword = passwordHash.generate(a.password);
        obj.firstName=a.firstName; obj.lastName=a.lastName;obj.email=a.email;obj.phone=a.phone;obj.username=a.username;//obj.password=hashedPassword;

        this.addItemService.sendData(obj);

      this.props.history.push('/login');
    }

    render() {
        var  dialogStyles  = {
            backgroundColor : '#e6e8eb',
            height:'auto',
            top:'35%'
        } ;
      return (
        <div>


            <form className="signUp" onSubmit={this.handleSubmit}>

                <h2>Sign up</h2>

                <div className={`form-group ${this.errorClass(this.state.formErrors.firstName)}`}>
                    <label htmlFor="firstName">First Name</label>
                    {this.state.formErrors.firstName }

                    <input type="text" required className="form-control" name="firstName"
                           placeholder="Your Name"
                           value={this.state.firstName}
                           onChange={this.handleUserInput}/>
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.lastName)}`}>
                    <label htmlFor="lastName">Last Name</label>
                    {this.state.formErrors.lastName}
                    <input type="text" required className="form-control" name="lastName"
                           placeholder="Your Lastname"
                           value={this.state.lastName}
                           onChange={this.handleUserInput}/>
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.username)}`}>
                    <label htmlFor="username">Uername</label>
                    {this.state.formErrors.username }
                    <input type="text" required className="form-control" name="username"
                           placeholder="Username"
                           value={this.state.username}
                           onChange={this.handleUserInput}/>
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                    <label htmlFor="email">Email address</label>
                    {this.state.formErrors.email }
                    <input type="email" required className="form-control" name="email"
                           placeholder="Email"
                           value={this.state.email}
                           onChange={this.handleUserInput}/>
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.phone)}`}>
                    <label htmlFor="phone">Phone Number</label>
                    {this.state.formErrors.phone }
                    <input type="text" required className="form-control" name="phone"
                           placeholder="Phone number"
                           value={this.state.phone}
                           onChange={this.handleUserInput}/>
                </div>

                <button type="submit" value="Submit" className="btn submit-btn" disabled={!this.state.formValid}>Sign up</button>
            </form>

      </div>
      );
    }
  }


{/*<div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>*/}
{/*<label htmlFor="password">Password</label>*/}
{/*<input type="password" className="form-control" name="password"*/}
{/*placeholder="Password"*/}
{/*value={this.state.password}*/}
{/*onChange={this.handleUserInput}/>*/}
{/*</div>*/}
{/*<div className={`form-group ${this.errorClass(this.state.formErrors.confirmPassword)}`}>*/}
{/*<label htmlFor="confirmPassword">Confirm your password</label>*/}
{/*<input type="password" required className="form-control" name="confirmPassword"*/}
{/*placeholder="Confirm your password"*/}
{/*value={this.state.confirmPassword}*/}
{/*onChange={this.handleUserInput}/>*/}
{/*</div>*/}

export default AddItem;
