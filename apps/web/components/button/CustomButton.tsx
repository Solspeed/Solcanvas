'use client'

import React from "react";
import { useReducer } from "react";

interface Props {
    property1: "variant-2" | "default";
    className: any;
    text: string; // Add text prop
}

const CustomButton = ({ property1, className, text }: Props): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });

    return (
        <div
            className={`w-[390px] h-[100px] text-center rounded-[15px] bg-black relative ${state.property1 === "variant-2" ? "shadow-[2px_1.5px_10px_5px_#a965f74c]" : ""
                } ${className}`}
            onMouseLeave={() => {
                dispatch("mouse_leave");
            }}
            onMouseEnter={() => {
                dispatch("mouse_enter");
            }}
        >
            <div
                className={`  left-[110px] tracking-[0.70px] text-[35px] top-[34px] font-medium leading-[30px] whitespace-nowrap   ${state.property1 === "variant-2" ? "text-[#a965f7]" : "text-[#94949494]"
                    }`}
            >
                {text} 
            </div>
        </div>
    );
};

function reducer(state: any, action: any) {
    switch (action) {
        case "mouse_enter":
            return {
                ...state,
                property1: "variant-2",
            };

        case "mouse_leave":
            return {
                ...state,
                property1: "default",
            };
    }

    return state;
}

export default CustomButton;