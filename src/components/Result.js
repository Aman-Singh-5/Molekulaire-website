export const Result = () => {
    return(
        <>
            <section className="section result-section">
                <div className="container pl-86 pb-200">
                    <div className="row">
                        <div className="col-lg-5">
                            <h1>We Believe In Science</h1>
                            <p className="sub-para">Clean, dermotologist-tested skin solutions.</p>
                            <button className="btn btn-dark">SEE RESULTS</button>
                        </div>

                        <div className="col-lg-7">
                            <div className="result-icon-box d-flex justify-content-center">

                                <div className="result-icon text-center">
                                    <img src="images/icon1.png"/>
                                    <p>Innovative Formulas.</p>
                                </div>

                                <div className="result-icon text-center">
                                    <img src="images/icon2.png"/>
                                    <p>Effective Ingredient.</p>
                                </div>

                                <div className="result-icon text-center">
                                    <img src="images/icon3.png"/>
                                    <p>Individualizes Benifits.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* ===================== second part ====================== */}

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="result-left-img">
                            <img src="images/image.png"/>
                            </div>
                        </div>
                        <div className="col-lg-6 result-right-col">
                            <div className="result-content-heading">
                                <h1>Clinically Proven Results</h1>
                                <p>Our clean and sustainable products are clinically proven to work at the higher standards</p>
                            </div>
                            <div className="result-content-box d-flex">
                                <div className="result-content-one">
                                    <span>Oil Control Matt</span>
                                    <h3>Sunscrean</h3>
                                    <p>protect the screen from both UAV and UAB rays</p>
                                    <img className="result-img-1" src="images/sunscreen.png"/>
                                    <div className="shop-now shop-now-1">
                                        <p>See Results in <b>10 Days</b></p>
                                        <button className="shop-now-btn">Shop Now</button>
                                    </div>
                                </div>
                                {/* ======== */}
                                <div className="result-content-one" style={{backgroundColor:"#d8e4e4"}}>
                                    <span>Oil Control Matt</span>
                                    <h3>Sunscrean</h3>
                                    <p>protect the screen from both UAV and UAB rays</p>
                                    <img className="result-img-2" src="images/facewash.png"/>
                                    <div className="shop-now shop-now-2">
                                        <p>See Results in <b>10 Days</b></p>
                                        <button className="shop-now-btn">Shop Now</button>
                                    </div>
                                </div>
                                {/* ========== */}
                            </div>
                        </div>
                    </div>
                </div>



            </section>
        </>
    );
}