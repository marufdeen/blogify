import React from 'react';
import { Link } from 'react-router-dom';
export default class Header extends React.Component {
    render() {
        return (
            <header role="banner">
            <div className="top-bar">
              <div className="container">
                <div className="row">
                  <div className="col-9 social">
                    <a href="#"><span className="fa fa-bell"><sup>3</sup></span></a>
                  </div>
                  <div className="col-3 search-top">
                    <form action="#" className="search-top-form">
                      <span className="icon fa fa-search"></span>
                      <input type="text" id="s" placeholder="Type keyword to search..." />
                    </form>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="container logo-wrap">
              <div className="row pt-5">
                <div className="col-12 text-center">
                  <a className="absolute-toggle d-block d-md-none" data-toggle="collapse" href="#navbarMenu" role="button" aria-expanded="false" aria-controls="navbarMenu"><span className="burger-lines"></span></a>
                  <h1 className="site-logo"><Link to="/">Blogify</Link></h1>
                </div>
              </div>
            </div>
            
            <nav className="navbar navbar-expand-md  navbar-light bg-light">
              <div className="container">
                
               
                <div className="collapse navbar-collapse" id="navbarMenu">
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                      <Link className="nav-link active" to="/">Home</Link>
                    </li> 
                    <li className="nav-item">
                      <Link className="nav-link" to="/join">Join</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                  </ul>
                  
                </div>
              </div>
            </nav>
          </header>
        )
    }
};