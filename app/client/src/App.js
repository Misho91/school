import React, { Component } from 'react';
import './App.css';
import './assets/css/main.css';
import {AddItem} from './components/AddItem';

// //GET request to server from client
// axios.get('http://localhost:8000/api/', {
//
// })
// .then(response => {
//
// })
// .catch(error => {
//
// });
//
// //POST request to server from client
// axios.post('http://localhost:8000/api/', {
//
// })
// .then(response => {
//
// })
// .catch(error => {
//
// });

// //PUT request to server from client
// axios.put('http://localhost:8000/api/', {
//
// })
// .then(response => {
//
// })
// .catch(error => {
//
// });
//
// //DELETE request to server from client
// axios.delete('http://localhost:8000/api/', {
//
// })
// .then(response => {
//
// })
// .catch(error => {
//
// });

class App extends Component {
    render() {
        return (
            <div>


                {/*// <!-- Banner -->*/}
                <section id="banner">
                    <div className="content">
                        <header>
                            <h1>Hi, I’m Editorial<br/>
                                by HTML5 UP</h1>
                            <p>A free and fully responsive site template</p>
                        </header>
                        <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum
                            congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris.
                            Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac
                            quam. Lorem ipsum dolor sit nullam.</p>
                        <ul className="actions">
                            <li><a href="#" className="button big">Learn More</a></li>
                        </ul>
                    </div>
                    <span className="image object">
										<img src="images/image.jpg" alt=""/>
									</span>
                </section>

                {/*// <!-- Section -->*/}
                <section>
                    <header className="major">
                        <h2>Erat lacinia</h2>
                    </header>
                    <div className="features">
                        <article>
                            <span className="icon fa-diamond"></span>
                            <div className="content">
                                <h3>Portitor ullamcorper</h3>
                                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                    facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            </div>
                        </article>
                        <article>
                            <span className="icon fa-paper-plane"></span>
                            <div className="content">
                                <h3>Sapien veroeros</h3>
                                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                    facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            </div>
                        </article>
                        <article>
                            <span className="icon fa-rocket"></span>
                            <div className="content">
                                <h3>Quam lorem ipsum</h3>
                                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                    facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            </div>
                        </article>
                        <article>
                            <span className="icon fa-signal"></span>
                            <div className="content">
                                <h3>Sed magna finibus</h3>
                                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                    facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            </div>
                        </article>
                    </div>
                </section>

                {/*// <!-- Section -->*/}
                <section>
                    <header className="major">
                        <h2>Ipsum sed dolor</h2>
                    </header>
                    <div className="posts">
                        <article>
                            <a href="#" className="image"><img src="images/pic01.jpg" alt=""/></a>
                            <h3>Interdum aenean</h3>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis
                                ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </article>
                        <article>
                            <a href="#" className="image"><img src="images/pic02.jpg" alt=""/></a>
                            <h3>Nulla amet dolore</h3>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis
                                ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </article>
                        <article>
                            <a href="#" className="image"><img src="images/pic03.jpg" alt=""/></a>
                            <h3>Tempus ullamcorper</h3>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis
                                ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </article>
                        <article>
                            <a href="#" className="image"><img src="images/pic04.jpg" alt=""/></a>
                            <h3>Sed etiam facilis</h3>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis
                                ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            <ul classNameName="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </article>
                        <article>
                            <a href="#" className="image"><img src="images/pic05.jpg" alt=""/></a>
                            <h3>Feugiat lorem aenean</h3>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis
                                ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </article>
                        <article>
                            <a href="#" className="image"><img src="images/pic06.jpg" alt=""/></a>
                            <h3>Amet varius aliquam</h3>
                            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis
                                ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">More</a></li>
                            </ul>
                        </article>
                    </div>
                </section>

            </div>

        );

    }
}

export default App;
