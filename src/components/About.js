export const About = () => {
    return (
        <>
            <section className="section about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="about-content">
                                <h1>Constructing Molekulaire</h1>
                                <p className="sub-para pt-2rem">Molékulaire is the outcome of self-love, confidence and trust.
                                    We wanted to introduce something to people they can trust and believe in.</p>
                                <p className="sub-para">Our team has laid a foundation of ethics and transparency so that people have something to believe in and trust</p>
                                <div className="about-points d-flex">
                                    <div className="about-icon d-flex">
                                        <p>Highly Effective</p>
                                    </div>
                                    <div className="about-icon d-flex">
                                        <p>Affordable</p>
                                    </div>
                                    <div className="about-icon d-flex">
                                        <p>Safe to Use</p>
                                    </div>
                                </div>
                                <div className="about-btn"><button className="banner-btn">KNOW OUR STORY</button></div>
                            </div>
                                
                        </div>
                        <div className="col-lg-5">
                            <div className="about-img"><img src="images/photo.png"/></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}