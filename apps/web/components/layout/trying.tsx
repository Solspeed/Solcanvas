import React from 'react';
import newsletterBgImage from "../../public/images/newsletterBgImage.png"
export default function Trying() {
    return (
        <div
            className=" h-screen w-screen flex items-center relative"
            style={{
                backgroundImage: `url(${newsletterBgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        > </div>
    );
}