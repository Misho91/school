import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import axios from "axios/index";
const cookies = new Cookies();
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:{photos:"user.png"}


        };
        this.onLogout = this.onLogout.bind(this);
       
    }



 componentWillMount(){
     if(cookies.get('c_user')){
        axios.get('http://localhost:8000/items/header/'+ cookies.get('c_user'))
            .then(response => {
                this.setState({ items: response.data });
                console.log(this.state.items);
            })
            .catch(function (error) {
                console.log(error);
            }) ;}

    }
    // aaa(){
    //
    //     //cookie.remove('userId', { path: '/index' });
    //     req.session.destroy(function(err) {
    //         // cannot access session here
    //     })
    //     console.log(this.aaa());



    onLogout() {


        cookies.remove('c_user', { path: '/' });
        axios.get('http://localhost:8000/items/headerc/')
            .then(response => {
               console.log("123456");

            })
            .catch(function (error) {
                console.log(error);
            });

         window.location.reload();

    }



    render() {
      //  const cookies = new Cookies();
      //   let $=this;
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
                    <div className={cookies.get('c_user')?"hide  ": "show" }>
                       <a href="/add-item" className="button" style={{borderRadius:20+"px",padding:[0+"px",9+"px"],display:"inline-block"}}>SingUp</a>
                       <a href="/login" className="button" style={{borderRadius:20+"px",padding:[0+"px",9+"px"],display:"inline-block",marginTop:1+"%",width:113+"px"}}>Login</a>

                    </div>
                    { cookies.get('c_user') && <div   className={cookies.get('c_user')?"show ": "hide"} >
                        <img className="user-avatar" src={require("../images/avatar/"+this.state.items.photos)} style={{width:50+"px",height:50+"px",borderRadius:50+"%"}}/>
                        <h6>{this.state.items.username}</h6>
                    <button type="submit" onClick={this.onLogout} style={{borderRadius:20+"px",padding:[0+"px",9+"px"],height:35+"px"}}>
                        Log out
                    </button>
                        </div>}
                </div>
            </header>


        </section>
        );
    }
}

export default Header;
