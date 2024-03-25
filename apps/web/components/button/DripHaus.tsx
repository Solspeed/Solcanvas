'use client'

import React from "react";
import { useReducer } from "react";

interface Props {
    property1: "variant-2" | "default";
    className: any;
}

const DripHaus = ({ property1, className }: Props): JSX.Element => {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });

    return (
        <div
            className={`w-[390px] h-[100px] rounded-[15px] bg-black relative ${state.property1 === "variant-2" ? "shadow-[2px_1.5px_10px_5px_#a965f74c]" : ""
                } ${className}`}
            onMouseLeave={() => {
                dispatch("mouse_leave");
            }}
            onMouseEnter={() => {
                dispatch("mouse_enter");
            }}
        >
            <div
                className={`[font-family:'Inter',Helvetica] left-[110px] tracking-[0.70px] text-[35px] top-[34px] font-medium leading-[30px] whitespace-nowrap absolute ${state.property1 === "variant-2" ? "text-[#a965f7]" : "text-[#94949494]"
                    }`}
            >
                Drip Haus
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


export default DripHaus;