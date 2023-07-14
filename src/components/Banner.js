import { Header } from "./global/Header";

export const Banner = () => {
    return(
        <>
            <section className="banner-section">
            <Header/>
                <div className="container pt">
                    
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className="banner-heading">The Skincare Alchemist</h1>
                            <p className="banner-para">Transforming Your Skin with Magical Potions</p>
                            <button className="banner-btn">SHOP SKINCARE</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}