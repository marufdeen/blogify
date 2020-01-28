import React from 'react'

export default class Dashboard extends React.Component {
    render() {
        return ( 
<div className="container">

        <div className="row mb-4">
          <div className="col-md-6">
            <h1> Profile</h1>
          </div>
        </div>
        <div className="row blog-entries">
          <div className="col-md-12 col-lg-8 main-content">
            
            <form action="#" method="post">
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <label htmlFor="name">Name</label>
                      <input type="text" id="name" className="form-control " />
                    </div>
                    <div className="col-md-12 form-group">
                      <label htmlFor="phone">Phone</label>
                      <input type="text" id="phone" className="form-control " />
                    </div>
                    <div className="col-md-12 form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" className="form-control " />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <label htmlFor="message">Write Message</label>
                      <textarea name="message" id="message" className="form-control " cols="30" rows="8"></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input type="submit" value="Send Message" className="btn btn-primary" />
                    </div>
                  </div>
                </form>
          </div>
          <div className="col-md-12 col-lg-4 sidebar">
            <div className="sidebar-box search-form-wrap">
              <form action="#" className="search-form">
                <div className="form-group">
                  <span className="icon fa fa-search"></span>
                  <input type="text" className="form-control" id="s" placeholder="Type a keyword and hit enter" />
                </div>
              </form>
            </div> 
            <div className="sidebar-box">
              <div className="bio text-center">
                <img src="assets/images/person_1.jpg" alt="Image Placeholder" className="img-fluid" />
                <div className="bio-body">
                  <h2>Meagan Smith</h2>
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
