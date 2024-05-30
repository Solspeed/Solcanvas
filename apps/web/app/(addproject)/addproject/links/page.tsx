"use client";
import { useState } from "react";
import required from "../../../../public/images/required.png";
import next from "../../../../public/images/next.png";
import Image from "next/image";
import supabase from "../../../../supabase";
import { useRouter } from "next/navigation";
import { useFormData } from '../context/FormDataContext';

export default function Links() {
  const { formData, updateFormData } = useFormData();
  const router = useRouter();
console.log("FormData:", formData);
  const [email, setEmail] = useState(formData.email || "");
  const [website, setWebsite] = useState(formData.website || "");
  const [github, setGithub] = useState(formData.github || "");
  const [twitter, setTwitter] = useState(formData.twitter || "");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    updateFormData({ email: newEmail });
  };

  const handleWebsiteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newWebsite = event.target.value;
    setWebsite(newWebsite);
    updateFormData({ website: newWebsite });
  };

  const handleGithubChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newGithub = event.target.value;
    setGithub(newGithub);
    updateFormData({ github: newGithub });
  };
  const handlePreviousClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();   
    router.push('/addproject/team');
  };
  const handleTwitterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTwitter = event.target.value;
    setTwitter(newTwitter);
    updateFormData({ twitter: newTwitter });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // try {
    //   // Insert data into 'project_listing' table
    //   const { data, error } = await supabase.from("project_listing").insert([
    //     {
    //       email,
    //       githubLink: github,
    //       twitterLink: twitter,
    //       websiteLink: website,
    //     },
    //   ]);

    //   if (error) {
    //     throw error;
    //   }

    //   console.log("Data inserted successfully:", data);
    //   // Redirect or perform additional actions upon successful insertion
    //   router.push("/addproject/description");
    // } catch (error:any) {
    //   console.error("Error inserting data:", error.message);
    //   // Optionally, provide feedback to the user
    //   alert("Failed to insert data. Please try again later.");
    // }
    router.push("/addproject/description");
  };

  return (
    <form
      className="flex flex-col self- sm:mt-24 font-nunito max-w-full mt-10 "
      onSubmit={handleSubmit}
    >
      <div className="flex gap-2.5 self-start">
        <div className="shrink-0 rounded-2xl bg-zinc-400 h-[11px]  w-[38px]" />
        <div className="shrink-0 w-14 bg-[#954AD2] rounded-2xl h-[11px]" />
        <div className="shrink-0 rounded-2xl bg-zinc-400 h-[11px]  w-[38px]" />
      </div>
      <div className="mt-11 sm:text-[30px] font-silkscreen font-medium tracking-wide leading-8 text-white max-w-full text-4xl">
        Project links 😎
      </div>
      <div className="mt-5 text-[16px] font-nunito font-medium tracking-wide leading-8 text-white text-opacity-50 max-w-full">
        Add all the links and contact information that you
        <br />
        want to share with others.
      </div>
      <div className="sm:w-[457px]">
        <div className="flex gap-5  justify-between  w-full text-[16px] tracking-wide leading-8 whitespace-nowrap sm:flex-none flex-wrap sm:mt-20 mt-10 max-w-full">
          <div className="flex flex-1 self-start  text-white text-opacity-80">
            <div>Contact Email</div>
            <Image
              alt=""
              width={100}
              height={100}
              loading="lazy"
              src={required}
              className="shrink-0 self-start w-3.5 aspect-square"
            />
          </div>
        </div>
        <input
          type="email"
          className="justify-center items-start p-[13px] mt-4 w-full placeholder:text-[16px] text-[18px] font-medium tracking-wide leading-8 bg-[#DFA9FE] rounded-xl border border-solid border-white border-opacity-20 placeholder:opacity-40 placeholder:font-nunito placeholder:text-black text-black text-opacity-70 "
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <div className="flex gap-5  w-full text-[16px] tracking-wide leading-8 whitespace-nowrap flex-wrap mt-10 max-w-full">
          <div className="flex flex-1  self-start text-white text-opacity-80">
            <div>Other Links</div>
            <Image
              alt=""
              width={100}
              height={100}
              loading="lazy"
              src={required}
              className="shrink-0 self-start w-3.5 aspect-square"
            />
          </div>
        </div>
        <input
          className="justify-center items-start p-[13px] mt-4 w-full placeholder:text-[16px] text-[18px] font-medium tracking-wide leading-8 bg-[#DFA9FE] rounded-xl border border-solid border-white border-opacity-20 placeholder:opacity-40 placeholder:font-nunito placeholder:text-black text-black text-opacity-70 "
          placeholder="@website"
          value={website}
          onChange={handleWebsiteChange}
          required
        />
        <input
          className="justify-center items-start p-[13px] mt-4 w-full placeholder:text-[16px] text-[18px] font-medium tracking-wide leading-8 bg-[#DFA9FE] rounded-xl border border-solid border-white border-opacity-20 placeholder:opacity-40 placeholder:font-nunito placeholder:text-black text-black text-opacity-70 "
          placeholder="@github"
          value={github}
          onChange={handleGithubChange}
          required
        />
        <input
          className="justify-center items-start p-[13px] mt-4 w-full placeholder:text-[16px] text-[18px] font-medium tracking-wide leading-8 bg-[#DFA9FE] rounded-xl border border-solid border-white border-opacity-20 placeholder:opacity-40 placeholder:font-nunito placeholder:text-black text-black text-opacity-70 "
          placeholder="@twitter"
          value={twitter}
          onChange={handleTwitterChange}
          required
        />
        <div className="flex gap-5 justify-between w-full text-[16px] font-medium tracking-wide leading-7 whitespace-nowrap flex-wrap sm:mt-20 mt-10 max-w-full">
        <button
            onClick={handlePreviousClick}
            className="flex gap-5 font-nunito justify-between items-center sm:-mr-12 px-8 py-2 text-white text-opacity-80 bg-[#954AD2] rounded-[15px]"
          >
            <div>Back</div>
          </button>
          <button type="submit" className="flex gap-5 font-nunito justify-between items-center sm:-mr-12 px-4 py-2 text-white text-opacity-80 bg-[#954AD2] rounded-[15px]">
            <div>Next</div>
            <Image
              alt=""
              width={100}
              height={100}
              loading="lazy"
              src={next}
              className="shrink-0 w-[12px] aspect-[0.76] stroke-[2px] stroke-white"
            />
          </button>
        </div>
      </div>
    </form>
  );
}