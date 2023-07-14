import React from "react";
import { Footer } from "../global/Footer";
import { Header } from "../global/Header";

export const Shop = () => {
    return (
        <>
            <section className="section combo-section">
                <Header/>
                <div className="container p-0">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="combo-section-img">
                                <div className="combo-img-content">
                                    <h1>The Essential Combo</h1>
                                    <p className="para">Exquisitely Satisfying, 100% Vegan Bath Experiences.</p>
                                </div>
                            </div>
            
                        </div>
                        </div>
                        <div className="row ptt">
                            <div className="col-lg-6 text-center">
                                <img src="images/combo1.png"/>
                                <div className="combo-content1 combo-content">
                                    <h3>Sunscreen + Facewash</h3>
                                    <p>Rs. 2500</p>
                                    <button className="banner-btn">Add to Bag</button>
                                </div>

                            </div>
                            <div className="col-lg-6 text-center">
                            <img src="images/combo2.png"/>
                                <div className="combo-content2 combo-content">
                                    <h3>Sunscreen + Facewash</h3>
                                    <p>Rs. 2500</p>
                                    <button className="banner-btn button">Add to Bag</button>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                <Footer/>
            </section>
        </>
    );
}