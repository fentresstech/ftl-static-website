import logo from './logo.svg';
import './App.css';
import './animate.min.css';
import './bootstrap.min.css';
import './nice-select.css';
import './style.css';
import './responsive.css';
import './jquery.mCustomScrollbar.min.css';
import 'https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css';
import 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css';

function App() {
  return (
<div>
        {/* loader  */}
        <div className="loader_bg">
          <div className="loader"><img src="images/loading.gif" alt="#" /></div>
        </div>
        {/* end loader */} 
        {/* header */}
        <header>
          {/* header inner */}
          <div className="header">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                  <div className="full">
                    <div className="center-desk">
                      <div className="logo"> <a href="index.html">Wise</a> </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                  <div className="menu-area">
                    <div className="limit-box">
                      <nav className="main-menu">
                        <ul className="menu-area-main">
                          <li className="active"> <a href="index.html">Home</a> </li>
                          <li> <a href="#about">About</a> </li>
                          <li> <a href="#service"> Service</a> </li>
                          <li> <a href="#download">Screenshot</a> </li>
                          <li> <a href="#testimonial">Contact us</a> </li>
                          <li className="mean-last"> <a href="#"><img src="images/search_icon.png" alt="#" /></a> </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end header inner */} 
          </div></header>
        {/* end header */}
        <section className="slider_section">
          <div id="myCarousel" className="carousel slide banner-main" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="first-slide" src="images/banner2.png" alt="First slide" />
                <div className="container">
                  <div className="carousel-caption relative">
                    <h1>Basic template</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img className="second-slide" src="images/banner2.png" alt="Second slide" />
                <div className="container">
                  <div className="carousel-caption relative">
                    <h1>Basic template</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img className="third-slide" src="images/banner2.png" alt="Third slide" />
                <div className="container">
                  <div className="carousel-caption relative">
                    <h1>Basic template</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
              <i className="fa fa-angle-left" />
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
              <i className="fa fa-angle-right" />
            </a>
          </div>
        </section>
        {/* about  */}
        <div id="about" className="about top_layer">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>About Informations</h2>
                  <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="img-box">
                  <figure><img src="images/about.png" alt="img" /></figure>
                  <a href="#">read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end abouts */}
        {/* service */} 
        <div id="service" className="service">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>Services </h2>
                  <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of <br />using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container margin-r-l">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
                <div className="service-box">
                  <figure>
                    <a href="images/1.jpg" className="fancybox" rel="ligthbox">
                      <img src="images/1.jpg" className="zoom img-fluid " alt="" />
                    </a>
                    <span className="hoverle">
                      <a href="images/1.jpg" className="fancybox" rel="ligthbox">Food</a>
                    </span>  
                  </figure>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
                <div className="service-box">
                  <figure>
                    <a href="images/2.jpg" className="fancybox" rel="ligthbox">
                      <img src="images/2.jpg" className="zoom img-fluid " alt="" />
                    </a>
                    <span className="hoverle">
                      <a href="images/1.jpg" className="fancybox" rel="ligthbox">Fashion</a>
                    </span>
                  </figure>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
                <div className="service-box">
                  <figure>
                    <a href="images/3.jpg" className="fancybox" rel="ligthbox">
                      <img src="images/3.jpg" className="zoom img-fluid " alt="" />
                    </a>
                    <span className="hoverle">
                      <a href="images/3.jpg" className="fancybox" rel="ligthbox">Booking</a>
                    </span>
                  </figure>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
                <div className="service-box">
                  <figure>
                    <a href="images/4.jpg" className="fancybox" rel="ligthbox">
                      <img src="images/4.jpg" className="zoom img-fluid " alt="" />
                    </a>
                    <span className="hoverle">
                      <a href="images/4.jpg" className="fancybox" rel="ligthbox">Marketing</a>
                    </span> 
                  </figure>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 thumb">
                <div className="service-box">
                  <figure>
                    <a href="images/5.jpg" className="fancybox" rel="ligthbox">
                      <img src="images/5.jpg" className="zoom img-fluid " alt="" />
                    </a>
                    <span className="hoverle">
                      <a href="images/5.jpg" className="fancybox" rel="ligthbox">Design</a>
                    </span> 
                  </figure>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="service-box">
                  <figure>
                    <a href="images/6.jpg" className="fancybox" rel="ligthbox">
                      <img src="images/6.jpg" className="zoom img-fluid " alt="" />
                    </a>
                    <span className="hoverle">
                      <a href="images/6.jpg" className="fancybox" rel="ligthbox">Making Food</a>
                    </span>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end service */}
        {/* Download */}
        <div id="download" className="download">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>Download  And  Use  For  Free</h2>
                  <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of <br />using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div id="main_slider" className="carousel slide banner-main" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active"> <img className="first-slide" src="images/banner.png" alt="First slide" /> </div>
                    <div className="carousel-item"> <img className="second-slide" src="images/banner.png" alt="Second slide" /> </div>
                    <div className="carousel-item"> <img className="third-slide" src="images/banner.png" alt="Third slide" /> </div>
                  </div>
                  <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev"> <i className="fa fa-angle-left" /></a> <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next"> <i className="fa fa-angle-right" /></a> 
                </div>
                <div className="read-more">
                  <a href="#">download now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end Download */}
        {/* Testimonial */}
        <div id="testimonial" className="testimonial">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h3>Testimonial</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div id="testimonial_slider" className="carousel slide banner-bg" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="first-slide" src="images/testimonial-img.png" />
                      <div className="container">
                        <div className="carousel-caption relat">
                          <h3>Luka due</h3>
                          <span><i className="fa fa-quote-left" /> ( foundery )<i className="fa fa-quote-right" /></span>
                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img className="second-slide" src="images/testimonial-img.png" />
                      <div className="container">
                        <div className="carousel-caption relat">
                          <h3>Luka due</h3>
                          <span><i className="fa fa-quote-left" /> ( foundery )<i className="fa fa-quote-right" /></span>
                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img className="third-slide" src="images/testimonial-img.png" />
                      <div className="container">
                        <div className="carousel-caption relat">
                          <h3>Luka due</h3>
                          <span><i className="fa fa-quote-left" /> ( foundery )<i className="fa fa-quote-right" /></span>
                          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#testimonial_slider" role="button" data-slide="prev"> <i className="fa fa-angle-right" /></a> <a className="carousel-control-next" href="#testimonial_slider" role="button" data-slide="next"> <i className="fa fa-angle-left" /></a> 
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div className="contact">
                  <h3>Contact Us</h3>
                  <form>
                    <div className="row">
                      <div className="col-sm-12">
                        <input className="contactus" placeholder="Name" type="text" name="Name" />
                      </div>
                      <div className="col-sm-12">
                        <input className="contactus" placeholder="Phone" type="text" name="Email" />
                      </div>
                      <div className="col-sm-12">
                        <input className="contactus" placeholder="Email" type="text" name="Email" />
                      </div>
                      <div className="col-sm-12">
                        <textarea className="textarea" placeholder="Message" type="text" name="Message" defaultValue={""} />
                      </div>
                      <div className="col-sm-12">
                        <button className="send">Send</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end Testimonial */} 
        {/*  footer */} 
        <footr>
          <div className="footer">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-6 col-sm-12 width">
                  <div className="address">
                    <h3>Address</h3>
                    <i><img src="icon/3.png" />Locations</i>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12 width">
                  <div className="address">
                    <h3>Menus</h3>
                    <i><img src="icon/2.png" />Locations</i>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12 width">
                  <div className="address">
                    <h3>Useful Linkes</h3>
                    <i><img src="icon/1.png" />Locations</i>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-12 width">
                  <div className="address">
                    <h3>Social Media </h3>
                    <ul className="contant_icon">
                      <li><img src="icon/fb.png" alt="icon" /></li>
                      <li><img src="icon/tw.png" alt="icon" /></li>
                      <li><img src="icon/lin (2).png" alt="icon" /></li>
                      <li><img src="icon/instagram.png" alt="icon" /></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 width">
                  <div className="address">
                    <h3>Newsletter </h3>
                    <input className="form-control" placeholder="Enter your email" type="type" name="Enter your email" />
                    <button className="submit-btn">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright">
              <p>Copyright 2019 All Right Reserved By <a href="https://html.design/">Free html Templates</a></p>
            </div>
          </div>
        </footr>
        {/* end footer */}
        {/* Javascript files*/} 
        {/* sidebar */} 
      </div>

  );
}

export default App;
