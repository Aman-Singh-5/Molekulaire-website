import React from "react";
import { About } from "./About";
import { Banner } from "./Banner";
import { Combo } from "./Combo";
import { Follow } from "./Follow";
import { Result } from "./Result";
import { Routine } from "./Routine";
import { Words } from "./Words";
import { Footer } from "./global/Footer";


export const Landing = () => {
    return(
     <>
            <Banner/>
            <Routine/>
            <Result/>
            <Combo/>
            <Words/>
            <About/>
            <Follow/>
            <Footer/>
    </>
    );
}