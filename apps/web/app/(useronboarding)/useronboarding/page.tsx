"use client";
import { useState, useEffect } from "react";
import { ChangeEvent } from "react";
import required from "../../../public/images/required.png";
import next from "../../../public/images/next.png";
import Image from "next/image";
import { useRouter } from "next/navigation"; // corrected import statement
import supabase from '../../../supabase';
import { useWallet } from '@solana/wallet-adapter-react';

export default function UserOnBoarding() {
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const router = useRouter();
    const {  publicKey } = useWallet();
    console.log("hello");
    // console.log(publicKey?.toBase58());




    const saveWalletId = async (walletId: string) => {
        try {
            // Insert wallet ID into the database
            const { data, error } = await supabase.from('onboarding').insert([{ wallet_id: walletId }]);
            if (error) {
                throw error;
            }
            console.log('Wallet ID saved successfully:', data);
            // Set redirecting state to true and redirect the user
            //   setRedirecting(true);
            // router.push("/useronboarding");
        } catch (error: any) {
            // Log and handle errors
            console.error('Error saving wallet ID:', error.message);
            // Optionally, provide feedback to the user
            alert('Failed to save wallet ID. Please try again later.');
        }
    };

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 45) setName(inputValue);
    };

    const handleBioChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        if (inputValue.length <= 80) setBio(inputValue);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Save name, bio, and wallet ID
            const { data, error } = await supabase.from('onboarding').insert([
                { name, bio, wallet_id: publicKey?.toString() } // Added null check for publicKey
            ]);
            if (error) {
                throw error;
            }
            console.log('Data inserted successfully:', data);

            // Redirect to add project page
            router.push("/addproject");
        } catch (error: any) {
            console.error('Error inserting data:', error.message);
            // Optionally, provide feedback to the user
            alert("Failed to insert data. Please try again later.");
        }
    };
    
    

    const nameCharacterCount = name.length;
    const bioCharacterCount = bio.length;

    return (
        <form className="flex flex-col self- sm:mt-24 max-w-full mt-10 " onSubmit={handleSubmit}>
            <div className="flex gap-2.5 self-start">
                <div className="shrink-0 rounded-2xl bg-zinc-400 h-[17px] w-[38px]" />
                <div className="shrink-0 w-14 bg-blue-600 rounded-2xl h-[17px]" />
                <div className="shrink-0 rounded-2xl bg-zinc-400 h-[17px] w-[38px]" />
            </div>
            <div className="mt-11 sm:text-5xl font-semibold tracking-wide leading-8 text-white max-w-full text-4xl">
                Onboarding
            </div>
            <div className="mt-5 text-2xl font-medium tracking-wide leading-8 text-white text-opacity-50 max-w-full">
                Lets get started by telling the world your <br />
                name and about yourself.
            </div>
            <div className="flex gap-5 justify-between sm:mt-20 w-full text-2xl tracking-wide leading-8 whitespace-nowrap sm:flex-none flex-wrap mt-10 max-w-full">
                <div className="flex gap-2.5 self-start text-white text-opacity-80">
                    <div>Name</div>
                    <Image
                        alt=""
                        width={100}
                        height={100}
                        loading="lazy"
                        src={required}
                        className="shrink-0 self-start w-3.5 aspect-square"
                    />
                </div>
                <div className="font-medium text-white text-opacity-30">{nameCharacterCount}/45</div>
            </div>
            <input
                className="justify-center items-start p-5 mt-8 sm:text-xl font-medium tracking-wide leading-8 bg-black rounded-xl border border-solid border-white border-opacity-20 placeholder:opacity-20 text-white text-opacity-50 "
                placeholder="Enter your name"
                value={name}
                onChange={handleNameChange}
                required
            />
            <div className="flex gap-5 sm:mt-20 w-full text-2xl tracking-wide leading-8 whitespace-nowrap flex-wrap mt-10 max-w-full">
                <div className="flex flex-1 gap-1.5 self-start text-white text-opacity-80">
                    <div>Bio</div>
                    <Image
                        alt=""
                        width={100}
                        height={100}
                        loading="lazy"
                        src={required}
                        className="shrink-0 self-start w-3.5 aspect-square"
                    />
                </div>
                <div className="font-medium text-white text-opacity-30">{bioCharacterCount}/80</div>
            </div>
            <input
                className="justify-center items-start p-5 mt-8 sm:text-xl font-medium tracking-wide leading-8 bg-black rounded-xl border border-solid border-white border-opacity-20 text-white text-opacity-50 placeholder:opacity-20 px-5 max-w-full"
                placeholder="Give intro about yourself"
                value={bio}
                onChange={handleBioChange}
                required
            />
            <div className="flex gap-5 justify-between sm:mt-40 w-full text-2xl font-medium tracking-wide leading-7 whitespace-nowrap flex-wrap mt-10 max-w-full">
                <div className="justify-center sm:px-8 py-5 text-white rounded-2xl bg-neutral-900 px-5">
                    Cancel
                </div>
                <button type="submit" className="flex gap-5 justify-between sm:px-7 py-5 text-black bg-white rounded-2xl px-5">
                    <div>Next</div>
                    <Image
                        alt=""
                        width={100}
                        height={100}
                        loading="lazy"
                        src={next}
                        className="shrink-0 w-4  aspect-[0.76] stroke-[2px] stroke-black"
                    />
                </button>
            </div>
        </form>
    );
}
