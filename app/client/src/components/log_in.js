import React, {Component} from 'react';
import axios from 'axios';
import {FormErrors} from '../FormErrors';
import '../Form.css';
import ItemService from './ItemService';
import IndexItem from "./IndexItem";
import Cookies from 'universal-cookie';

class LogIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error:'',
            email: '',
            password: '',
            formErrors: {
                email: '',
                password: ''
            },
            emailValid: false,
            passwordValid: false,
            formValid: false
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addItemService = new ItemService();
        this.paaa =this.paaa.bind(this);
        this.login = this.login.bind(this);
this.addIndexItem = new IndexItem();
//this.bac = this.bac.bind(this);
    }



    login(data) {

        axios.post('http://localhost:8000/items/login', {
            item: data
        })
            .then(res=> {
                if (res.data) {
                    const cookies = new Cookies();
                    cookies.set('c_user', res.data, { path: '/' });

                    this.props.history.push('/user');
                    window.location.reload();
                }
            })
            .catch(err => console.log(err))
       
    }
//   bac() {
//      return this.simpleDialog.show();
//
//
// }
//
    paaa(){

      return  this.props.history.push('/user');
        
    };


    handleUserInput(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value})
        // () => {
        //     this.validateField(name, value)
        // });
    };


// // validateField(fieldName, value) {
// //     let fieldValidationErrors = this.state.formErrors;
// //     let emailValid = this.state.emailValid;
// //     let passwordValid = this.state.passwordValid;
// //
// //     switch (fieldName) {
// //         case 'email':
// //             emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
// //             fieldValidationErrors.email = emailValid ? '' : ' is invalid';
// //             break;
// //         case 'password':
// //             passwordValid = value.length >= 6;
// //             fieldValidationErrors.password = passwordValid ? '' : ' is too short';
// //             break;
// //         default:
// //             break;
// //     }
// //
// //     this.setState({
// //         emailValid: emailValid,
// //         passwordValid: passwordValid
// //     }, this.validateForm);
// // }
//
//     validateForm() {
//         this.setState({formValid: this.state.emailValid && this.state.passwordValid});
//     }
errorClass(error) {
    return (error.length === 0 ? '' : 'has-error');
}

handleSubmit(event) {
    event.preventDefault();
    let obj = {

        email: '',

        password: ''

    };
    let a = this.state;
    //let hashedPassword = passwordHash.generate(a.password);
    obj.email = a.email;
    // obj.password = hashedPassword;
    obj.password =a.password;
    this.login(obj);
   // this.props.history.push('/user');
   // const expires = new Date();

    //
    // cookie.save(
    //     'userId',
    //     '1234',
    //     {
    //         path: '/index',
    //         expires,
    //         maxAge: 1000,
    //         //domain: 'https://play.bukinoshita.io',
    //         //secure: true
    //        // httpOnly: true
    //     }
    // )

    //console.log(a.error);
   
}




render() {
    // let  dialogStyles  = {
    //     //backgroundColor : '#e6e8eb',
    //   //  height:'auto',
    //     //top:'35%'
    //
    //     listStyle: 'none'
    // } ;

    return (
        <div>






            <form className="signUp" onSubmit={this.handleSubmit}>
                <h2>Sign up</h2>
                <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors}/>
                </div>


                <div className={`form-group ${this.errorClass(this.state.error)}`}>
                    <label htmlFor="email">Email address</label>
                    <input type="email" required className="form-control" name="email"
                           placeholder="Email"
                           value={this.state.email}
                           onChange={this.handleUserInput}/>

                </div>

                <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password"
                           placeholder="Password"
                           value={this.state.password}
                           onChange={this.handleUserInput}/>
                </div>

                <button type="submit" value="Submit" className="btn  submit-btn"
                        /*disabled={!this.state.formValid}*/>Log In
                </button>

                <ul>
                <li style={{listStyle: 'none'}}><a href="/passwordReset">Forgot password?</a></li>
                </ul>

            </form>


        </div>
    );
}
}


export default LogIn;
