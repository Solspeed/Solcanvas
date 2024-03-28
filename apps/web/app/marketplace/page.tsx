
'use client';
import ItemBar from "./components/ItemBar";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Recommendation from "./components/Recommendation";
import Footer from "../../components/layout/Footer";
import { useState } from "react";
import Balance from "./components/Balance";
import Transactions from "./components/Transactions";

interface PageContentState {
    isWalletClicked: boolean;
    contentToShow: "recommendations" | "walletContent";
}

export default function page() {
    const [state, setState] = useState<PageContentState>({
        isWalletClicked: false,
        contentToShow: "recommendations",
    });

    function handleWalletClick() {
        setState({ ...state, isWalletClicked: true, contentToShow: "walletContent" });
    }

    return (
        <div className="bg-black overflow-x-hidden">
            <Navbar />
            <div className="space-y-16">
                <ItemBar
                    isWalletClicked={state.isWalletClicked}
                    onWalletClick={handleWalletClick}
                />
                <div className="xl:pt-16">
                    {state.contentToShow === "recommendations" && <Recommendation />}
                    {state.contentToShow === "walletContent" && <Balance />}
                </div>
                <div className="xl:pt-36">
                    {state.contentToShow === "recommendations" && <Projects />}
                    {state.contentToShow === "walletContent" && <Transactions />}
                </div>
            </div>
            <div className="w-full relative bg-black overflow-hidden flex flex-col items-center justify-start sm:pt-[5.81rem] pt-[5.6rem] px-[0rem] pb-[0rem] box-border gap-[14.19rem] tracking-[normal] mq450:gap-[8rem] mq1000:gap-[14.19rem]">
                <Footer />
            </div>
        </div>
    );
}
