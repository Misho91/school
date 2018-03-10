import React, { Component } from 'react';
import Cookies from 'universal-cookie';


class Header extends Component {


    // aaa(){
    //
    //     cookie.remove('userId', { path: '/index' });
    // }

    render() {
        const cookies = new Cookies();

        return (<section>
            
            <header id="header">

                <a href="/" className="logo"><img src={require('../logo.png')}/></a>
                <div className="sign">
                    <ul className="icons">
                        <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                        <li><a href="#" className="icon fa-snapchat-ghost"><span className="label">Snapchat</span></a></li>
                        <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a href="#" className="icon fa-medium"><span className="label">Medium</span></a></li>
                    </ul>
                    <div className={cookies.get('c_user')?"hide  ": "show" } >
                       <a href="/add-item">SingUp</a>
                       <a href="/login">Login</a>
                        <div className="user-avatar">
                            <img src={require("../images/user.png")}/>
                        </div>
                    </div>
                    <button type="submit" onClick={this.aaa} className={cookies.get('c_user')?"show ": "hide"} >
                        Log out
                    </button>
                </div>
            </header>


        </section>
        );
    }
}

export default Header;
