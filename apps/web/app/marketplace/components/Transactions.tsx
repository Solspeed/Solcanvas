import Image from 'next/image';
import sentImage from '../../../public/images/marketplace/sent.png';
import receivedImage from '../../../public/images/marketplace/received.png';
import transactions from '../data/transactionsData.json'

export default function Transactions() {
    return (
        <div className="flex flex-col xl:px-24 sm:px-12 px-6 w-full  xl:-mt-20 ">
            <div className="flex sm:gap-5 gap-4 sm:ml-9  max-w-full sm:text-3xl text-xl font-medium tracking-wide leading-7 text-white whitespace-nowrap w-[408px] max-md:mt-10 max-md:ml-2.5">
                <div className="justify-center p-2.5 rounded-xl bg-neutral-900">Transactions</div>
                <div className="flex-auto my-auto">Interactions</div>
            </div>
            <div className="flex flex-col items-start sm:pl-12 pl-6 space-y-12 sm:py-14 py-7 sm:mx-2.5 mt-10 rounded-2xl bg-neutral-900">
                {transactions.map((transaction, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <div className="flex flex-col justify-start">
                            <Image
                                alt={transaction.type === 'Sent' ? 'sent icon' : 'received icon'}
                                loading="lazy"
                                src={transaction.type === 'Sent' ? sentImage : receivedImage}
                                className="aspect-[1.08] sm:w-[70px] w-[50px]"
                            />
                        </div>
                        <div className="flex flex-col">
                            <div className="text-white sm:text-[24px] text-2xl font-medium leading-8 tracking-[1%]">{transaction.type}</div>
                            <div className="text-sm sm:tracking-[1%] tracking-normal font-medium leading-8 text-white text-opacity-50">
                                {transaction.type === 'Sent' ? `You sent ${transaction.amount} to ${transaction.recipient}` : `You received ${transaction.amount} from ${transaction.sender}`}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}