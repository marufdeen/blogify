import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authActions';
import propTypes from 'prop-types';

class Header extends React.Component {

  onLogoutClick(e) {
  e.preventDefault();
  this.props.logoutUser();
  this.props.history.push('/join');
}

    render() {
      const { isAuthenticated, user } = this.props.auth;
      const authLinks = (
        <nav className="navbar navbar-expand-md  navbar-light bg-light">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/newPost">|Create Post|</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/myPosts">|My Posts|</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link " to="/dashboard">|Profile|</Link>
              </li> 
              <li className="nav-item">
                <a href='' onClick = { this.onLogoutClick.bind(this) } className="nav-link">|Logout|</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      );
      const guestLinks = (
        <nav className="navbar navbar-expand-md  navbar-light bg-light">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/bloggers">Bloggers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/join">Join</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      )
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
            
             { isAuthenticated ? authLinks : guestLinks }
          </header>
        )
    }
};

Header.propTypes = {
  logoutUser: propTypes.func.isRequired,
  auth: propTypes.object.isRequired

}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps, { logoutUser })(withRouter(Header));