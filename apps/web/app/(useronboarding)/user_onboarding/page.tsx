"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import supabase from "../../../supabase";
import { useWallet } from "@solana/wallet-adapter-react";
import required from "../../../public/images/required.png";
import next from "../../../public/images/next.png";
interface FormData {
  name: string;
  bio: string;
}

const UserOnBoarding = () => {

  const [formData, setFormData] = useState<FormData>({ name: "", bio: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { publicKey } = useWallet();
  console.log(publicKey?.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name") {
      setFormData({ ...formData, [name]: value.toLowerCase() });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const walletId = publicKey?.toString();

      const { data: existingName } = await supabase
        .from("onboarding")
        .select("name")
        .eq("name", formData.name)
        .single();

      if (existingName) {
        throw new Error(
          `A profile with the name '${formData.name}' already exists.`
        );
      }

      // Check if a profile with the same wallet ID already exists in the onboarding table
      const { data: existingProfile } = await supabase
        .from("onboarding")
        .select("name")
        .eq("wallet_id", walletId)
        .single();

      if (existingProfile) {
        throw new Error(
          `A profile with the same wallet ID already exists for user '${existingProfile.name}'.`
        );
      }

      await supabase
        .from("onboarding")
        .insert([{ ...formData, wallet_id: walletId }]);

      await supabase
        .from("project_listing")
        .insert([{ ...formData, username: formData.name }]);

      router.push("/marketplace");
      console.log(formData)
    } catch (error: any) {
      console.error("Error inserting data:", error.message);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col self- sm:mt-24 font-nunito max-w-full mt-10"
    >
      <div className="flex gap-2.5 self-start">
        {[1, 2, 3].map((key) => (
          <div
            key={key}
            className={`shrink-0 rounded-2xl bg-${key === 2 ? "[#954AD2]" : "zinc-400"} h-[17px] w-[38px]`}
          />
        ))}
      </div>
      <div className="mt-11 sm:text-5xl font-silkscreen font-semibold tracking-wide leading-8 text-white max-w-full text-4xl">
        Onboarding
      </div>
      <div className="mt-5 text-2xl font-nunito font-medium tracking-wide leading-8 text-white text-opacity-50 max-w-full">
        Lets get started by telling the world your <br />
        name and about yourself.
      </div>
      {["Name", "Bio"].map((label, index) => (
        <div
          key={index}
          className="flex flex-col gap-5 justify-between w-full text-2xl tracking-wide leading-8 whitespace-nowrap sm:flex-none flex-wrap mt-10 max-w-full"
        >
          <div className="flex  flex-1 self-start text-white text-opacity-80">
            <div>{label}</div>
            <Image
              alt=""
              width={100}
              height={100}
              loading="lazy"
              src={required}
              className="shrink-0 self-start w-3.5 aspect-square"
            />
          </div>
          <input
            className="justify-center items-start p-5 mt-4 sm:text-xl font-medium tracking-wide leading-8 bg-[#DFA9FE] rounded-xl border border-solid border-white border-opacity-20 placeholder:opacity-40 placeholder:font-nunito placeholder:text-black text-black text-opacity-70"
            placeholder={`Enter your ${label.toLowerCase()}`}
            name={label.toLowerCase()}
            value={formData[label.toLowerCase() as keyof FormData]}
            onChange={handleChange}
            required
          />
        </div>
      ))}

      <div className="flex gap-5 justify-end w-full text-2xl font-medium tracking-wide leading-7 whitespace-nowrap flex-wrap sm:mt-20 mt-10 max-w-full">
        <button
          type="submit"
          className="flex gap-5 font-nunito justify-between items-center sm:-mr-12 sm:px-7 py-4 text-white text-opacity-80 bg-[#954AD2] rounded-3xl px-5"
        >
          {loading ? <div>Loading...</div> : <div>Finish</div>}
          {/* <div>Finish</div> */}
          <Image
            alt=""
            width={100}
            height={100}
            loading="lazy"
            src={next}
            className="shrink-0 w-4 aspect-[0.76] stroke-[2px] stroke-white"
          />
        </button>
      </div>
    </form>
  );
};

export default UserOnBoarding;
