import React, { useState, useEffect } from "react"
import LandingImgLg from "../../assets/images/landing-page-lg.png";
import LandingImgSm from "../../assets/images/landing-page-sm.png";


function BgImage(props) {

    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);

    const imageURL = window.innerWidth >= 568 ? LandingImgLg : LandingImgSm;

     const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

     useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    });

    return (
       <div id="background-img" style={{ backgroundImage: `url(${imageURL})`, height: "100vh", backgroundRepeat: "no-repeat"}}>
            {props.children}
       </div>
    )
}

export default BgImage; 