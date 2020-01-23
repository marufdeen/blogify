import React from 'react';

export default class Home extends React.Component {
    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="mb-4">Latest Posts</h2>
                    </div>
                </div>
                <div className="row blog-entries">
                    <div className="col-md-12 col-lg-12 main-content">
                        <div className="row">
                            <div className="col-md-4">
                                <a href="blog-single.html" className="blog-entry element-animate" data-animate-effect="fadeIn">
                                    <img src="assets/images/img_5.jpg" alt="Image placeholder" />
                                    <div className="blog-content-body">
                                        <div className="post-meta">
                                            <span className="author mr-2"><img src="assets/images/person_1.jpg" alt="Colorlib" /> Colorlib</span>&bullet;
                          <span className="mr-2">March 15, 2018 </span> &bullet;
                          <span className="ml-2"><span className="fa fa-comments"></span> 3</span>
                                        </div>
                                        <h2>How to Find the Video Games of Your Youth</h2>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="blog-single.html" className="blog-entry element-animate" data-animate-effect="fadeIn">
                                    <img src="assets/images/img_6.jpg" alt="Image placeholder" />
                                    <div className="blog-content-body">
                                        <div className="post-meta">
                                            <span className="author mr-2"><img src="assets/images/person_1.jpg" alt="Colorlib" /> Colorlib</span>&bullet;
                          <span className="mr-2">March 15, 2018 </span> &bullet;
                          <span className="ml-2"><span className="fa fa-comments"></span> 3</span>
                                        </div>
                                        <h2>How to Find the Video Games of Your Youth</h2>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-4">
                                <a href="blog-single.html" className="blog-entry element-animate" data-animate-effect="fadeIn">
                                    <img src="assets/images/img_7.jpg" alt="Image placeholder" />
                                    <div className="blog-content-body">
                                        <div className="post-meta">
                                            <span className="author mr-2"><img src="assets/images/person_1.jpg" alt="Colorlib" /> Colorlib</span>&bullet;
                          <span className="mr-2">March 15, 2018 </span> &bullet;
                          <span className="ml-2"><span className="fa fa-comments"></span> 3</span>
                                        </div>
                                        <h2>How to Find the Video Games of Your Youth</h2>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-4">
                                <a href="blog-single.html" className="blog-entry element-animate" data-animate-effect="fadeIn">
                                    <img src="assets/images/img_7.jpg" alt="Image placeholder" />
                                    <div className="blog-content-body">
                                        <div className="post-meta">
                                            <span className="author mr-2"><img src="assets/images/person_1.jpg" alt="Colorlib" /> Colorlib</span>&bullet;
<span className="mr-2">March 15, 2018 </span> &bullet;
<span className="ml-2"><span className="fa fa-comments"></span> 3</span>
                                        </div>
                                        <h2>How to Find the Video Games of Your Youth</h2>
                                    </div>
                                </a>
                            </div>

                            <div className="row mt-5">
                                <div className="col-md-12 text-center">
                                    <nav aria-label="Page navigation" className="text-center">
                                        <ul className="pagination">
                                            <li className="page-item  active"><a className="page-link" href="#">&lt;</a></li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">&gt;</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
