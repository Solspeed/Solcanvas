import Image from "next/image";
import sentImage from '../../../public/images/marketplace/sent.png';
import receivedImage from '../../../public/images/marketplace/received.png';

interface Transaction {
    type: string,
    amount: string,
    recipient?: string,
    sender?: string
}

export default function TransactionsList({
    transactions
}: {
    transactions: Transaction[]
}) {
    return (
        <>
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
        </>
    );
}
