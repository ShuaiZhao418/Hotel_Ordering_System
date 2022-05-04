import { useState, useEffect } from 'react';

import { fetchLogout } from './services';
import {Route, Switch, Link} from "react-router-dom";

import Search from './Search'
import Orders from './Orders'
import Infos from './Infos'
import Privacy from './Privacy'
import About from './About'

import './Show.css'
function Show({personalInfo, setPersonalInfo}) {  

    // logout
    function logout() {
        fetchLogout()
        .then( () => {
            setPersonalInfo();
        })
        .catch( error => {
            console.log(error);
        });
    }

    return (
        <div className="show">
            {/* header part */}
            <div className="title"> 
                <h1>HOTEL ORDERING SYSTEM</h1>
                    <div className="logout">
                    Welcome!{' ' + personalInfo + '  |  '}  
                        <button
                            className="logout__button"
                            onClick={ () => logout() }
                        >
                            <Link to="/">Logout</Link>
                        </button>
                    </div>
            </div>
            {/* menu part */}
            <a className="skiplink__recommand" href="#footer">
                 Skip to Footer
            </a>
           
            <div className="menu__show">
                <ul className="menu">
                    <li className="menu__item">
                        <button className="menu__subheader">SEARCH</button>
                        <ul className="submenu">
                            <li className="submenu__item" >   
                                <Link to="/search">
                                    SEARCH HOTEL
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="menu__item">
                        <button className="menu__subheader">HOME</button>
                        <ul className="submenu">
                            <li className="submenu__item">
                                <Link to="/my_infos">MY INFOMATION</Link>
                            </li>
                            <li className="submenu__item">
                                <Link to="/my_orders">MY ORDERS</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="menu__item">
                    <button className="menu__subheader">ABOUT</button>
                        <ul className="submenu">
                            <li className="submenu__item">
                                <Link to="/about_website">ABOUT WEBSITE</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="menu__item">
                    <button className="menu__subheader">PRIVACY</button>
                        <ul className="submenu">
                            <li className="submenu__item">
                                <Link to='/privacy'>PRIVACY DOC</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        
            
            {/* view part */}
            <div className='body'>
                <Switch>
                    <Route path={["/search","/"]} exact component={Search}/>
                    <Route path="/my_orders" exact component={Orders}/>
                    <Route path="/my_infos" exact component={Infos}/>
                    <Route path="/privacy" exact component={Privacy}/>
                    <Route path="/about_website" exact component={About}/>
                    <Route component={Search}></Route>
                </Switch>
            </div>
            {/* footer part */}
            <div className='footer'
            id="footer">
                <div className='footer__introduction'>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Careers</li>
                        <li>Meet our Partners</li>
                    </ul>
                </div>
                <div className='footer__others'>
                    <ul>
                        <li>Feedback</li>
                        <li>Help</li>
                        <li>Terms & conditions</li>
                    </ul>
                </div>
                <div className='footer__clarification'>
                    ©2022 Hotel Ordering System.
                </div>
            </div>
        </div>
    );
}

export default Show;