import React, { Component } from 'react';
import SkyLight from 'react-skylight';
import LogIn from './log_in';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu:{}


        };
    }

        render() {
        return (
            <nav id="menu">
                <header className="major">
                    <h2>Menu</h2>
                </header>
                <ul>
                    <li><a href="/user">User</a></li>
                    <li><a href="/">Homepage</a></li>
                    <li><a href="/web">Web Programming</a></li>
                    <li><a href="elements.html">Elements</a></li>
                    <li>
                        <span className="opener">Submenu</span>
                        <ul>
                            <li><a href="/">Lorem Dolor</a></li>
                            <li><a href="/">Ipsum Adipiscing</a></li>
                            <li><a href="/">Tempus Magna</a></li>
                            <li><a href="/">Feugiat Veroeros</a></li>
                        </ul>
                    </li>
                    
                    <li>
                        <span className="opener">Another Submenu</span>
                        <ul>
                            <li><a href="/">Lorem Dolor</a></li>
                            <li><a href="/">Ipsum Adipiscing</a></li>
                            <li><a href="/">Tempus Magna</a></li>
                            <li><a href="/">Feugiat Veroeros</a></li>
                        </ul>
                    </li>
                    <li><a href="/">Maximus Erat</a></li>
                    <li><a href="/">Sapien Mauris</a></li>
                    <li><a href="/">Amet Lacinia</a></li>
                </ul>
            </nav>


        );
    }
}

export default Menu;
