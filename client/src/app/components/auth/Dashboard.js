import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile } from '../../../actions/profileActions';

class Dashboard extends Component {  
  componentDidMount() {
  this.props.getCurrentProfile();
}
   
  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    let dashboardContent;

      // If logged in user has a profile
      if (user.profile === false) {
        dashboardContent = <h1>Display Profile</h1>
      } else {
      dashboardContent = <h2>Welcome! { user.firstName }.</h2>
      }
    
    
    return (
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-6">
            {dashboardContent}
          </div>
        </div>
        <div className="row blog-entries">
          <div className="col-md-12 col-lg-8 main-content">
              <div className="row">
                <div className="col-md-12 form-group">
                  <label htmlFor="name">Name</label>
              <h4>  { user.lastName +' '+ user.firstName} </h4>
                </div>
                <div className="col-md-12 form-group">
                  <label htmlFor="name">Email</label>
              <h4>  { user.email} </h4>
                </div>
                <div className="col-md-12 form-group">
                  <label htmlFor="name">Role</label>
              <h4>  { user.role} </h4>
                </div>

              </div>
              {
                user.profile == false ? 
                  <Link to='/createProfile' className="btn btn-primary">Create Profile</Link>
              :  <Link to='/viewProfile' className="btn btn-primary">View Profile</Link>
              }
          </div>
          <div className="col-md-12 col-lg-4 sidebar">
            <div className="sidebar-box">
              <div className="bio text-center">
                <img src="assets/images/person_1.jpg" alt="Image Placeholder" className="img-fluid" />
                <div className="bio-body">
                  <h2>{ user.lastName +' '+ user.firstName} </h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem facilis sunt repellendus excepturi beatae porro debitis voluptate nulla quo veniam fuga sit molestias minus.</p>
                  <p><a href="#" className="btn btn-primary btn-sm">Read my bio</a></p>
                  <p className="social">
                    <a href="#" className="p-2"><span className="fa fa-facebook"></span></a>
                    <a href="#" className="p-2"><span className="fa fa-twitter"></span></a>
                    <a href="#" className="p-2"><span className="fa fa-instagram"></span></a>
                    <a href="#" className="p-2"><span className="fa fa-youtube-play"></span></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    )
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    auth: state.auth
  }
}
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);