import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import Vlidator from 'validator';
import App from '../src/App';
import AddItem from '../src/components/AddItem';
import IndexItem from '../src/components/IndexItem';
import EditItem from '../src/components/EditItem';
import Lava from '../src/components/lava';
import PasswordReset from '../src/components/passwordReset';

import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
import '../src/index.css';
import Menu from "../src/components/menu";
import Header from "../src/components/header";
import Web from "../src/components/web";
import LogIn from "../src/components/log_in";
import User from "../src/components/user";
// import "./assets/css/main.css"
// import "./assets/css/font-awesome.min.css"
// import "./assets/css/ie8.css"
// import "./assets/css/ie9.css"

ReactDOM.render(
    <Router>
        <div>

            <Route exact path='/' component={App}/>
            <Route path='/add-item' component={AddItem}/>
            <Route path='/index' component={IndexItem}/>
            <Route path='/edit/:id' component={EditItem}/>
            <Route path='/lav' component={Lava}/>
            <Route path='/login' component={LogIn}/>
            <Route path='/web' component={Web}/>
            <Route path='/user' component={User}/>
            <Route path='/passwordReset' component={PasswordReset}/>
        </div>
    </Router>,

    document.getElementById('root')

);

ReactDOM.render(

    <Menu />,


    document.getElementById('menu')

);

ReactDOM.render(

    <Header />,


    document.getElementById('head')

);


