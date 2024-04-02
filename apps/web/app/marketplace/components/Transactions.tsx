'use client';

import { useState } from 'react';
import InteractionsList from './InteractionsList';
import transactionsData from '../data/transactionsData.json';
import TransactionsList from './TransactionsList';
import interactionsData from '../data/interactionsData.json'

export default function Transactions() {
    const [activeButton, setActiveButton] = useState('Transactions');

    const handleClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    return (
        <div className="flex flex-col xl:px-24 sm:px-12 px-6 w-full xl:-mt-20 ">
            <div className="flex sm:gap-5 gap-4 sm:ml-9 max-w-full sm:text-3xl text-xl font-medium tracking-wide leading-7 text-white whitespace-nowrap w-[408px] max-md:mt-10 max-md:ml-2.5">
                <button
                    className={`justify-center p-2.5 rounded-xl transition-colors duration-100 ${activeButton === 'Transactions' ? 'bg-neutral-900' : 'bg-transparent'} hover:bg-neutral-800`}
                    onClick={() => handleClick('Transactions')}
                >
                    Transactions
                </button>
                <button
                    className={`flex-auto p-2.5 rounded-xl my-auto transition-colors duration-100 ${activeButton === 'Interactions' ? 'bg-neutral-900' : 'bg-transparent'} hover:bg-neutral-800`}
                    onClick={() => handleClick('Interactions')}
                >
                    Interactions
                </button>
            </div>
            <div className="flex flex-col items-start sm:pl-12 pl-6 space-y-12 sm:py-14 py-7 sm:mx-2.5 mt-10 rounded-2xl bg-neutral-900">
                {activeButton === 'Transactions' && <TransactionsList transactions={transactionsData} />}
                {activeButton === 'Interactions' && <InteractionsList interactions={interactionsData} />}
            </div>
        </div>
    );
}
