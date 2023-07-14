import {BsArrowRight } from 'react-icons/bs';
export const Footer = () => {
    return(
        <>
            <section className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 style={{fontWeight:"400", marginBottom:"4rem"}}>Get early acces to<br/> new launches!</h1>
                            <form id='email' method='post'><input type="email" id="email" name="email" placeholder="Enter Your Email"></input>
                            <a className='footer-arrow-icon' href='#'><BsArrowRight/></a></form>
                            
                        </div>
                    </div>
                    <div className="footer-content-box d-flex justify-content-center">
                        <div className="footer-content">
                            <ul>
                                <h3>Shop</h3>
                                <li>Facewash</li>
                                <li>Serum</li>
                                <li>Moisturizer</li>
                                <li>Sunscreen</li>
                            </ul>
                        </div>
                        <div className="footer-content">
                        <ul>
                                <h3>About</h3>
                                <li>Our story</li>
                                <li>Shipping and returns</li>
                                <li>Contact</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div className="footer-content">
                        <ul>
                                <h3>Our mission</h3>
                                <li><p>We thrive to win the comfidence and<br/> trust of people by providing them with<br/> skin care products.</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-icon d-flex justify-content-center">
                        <div><img src="images/insta.png"/></div>
                        <div><img src="images/fb.png"/></div>
                        <div><img src="images/twitter.png"/></div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center footer-copyright">
                        <p>2023, Molekulaire</p>
                    </div>
                </div>
            </section>
        </>
    );
}