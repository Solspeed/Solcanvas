"use client"
import React, { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import upload from '../../../../public/images/upload.png';
import next from '../../../../public/images/next.png';
import supabase from '../../../../supabase';
import { useRouter } from 'next/navigation';
import { useFormData } from '../context/FormDataContext';

interface Member {
  name: string;
  github: string;
  twitter: string;
  image: File | string | null;
}

export default function Team(): JSX.Element {
  const { updateFormData } = useFormData();
  const router = useRouter();
  const [members, setMembers] = useState<Member[]>([{ name: '', github: '', twitter: '', image: null }]);
  const [uploading, setUploading] = useState<boolean>(false);

  const handleMemberImageSelect = async (event: ChangeEvent<HTMLInputElement>, index: number): Promise<void> => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      try {
        setUploading(true);
        const randomId = Math.random().toString(36).substring(7); // Generate random ID
        const { data, error } = await supabase.storage.from('teamMembersImage').upload(`team-member-${randomId}`, selectedFile);
        if (error) {
          throw error;
        }
        if (data) {
          const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
          const imageUrl = `${supabaseUrl}/storage/v1/object/public/teamMembersImage/team-member-${randomId}`;
          setMembers((prevMembers) => {
            const newMembers = [...prevMembers];
            const member = newMembers[index] || { name: '', github: '', twitter: '', image: null };
            member.image = imageUrl;
            newMembers[index] = member;
            return newMembers;
          });
        }
      } catch (error: any) {
        console.error('Error uploading image:', error.message);
        // Handle error
      } finally {
        setUploading(false);
      }
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>, index: number, field: keyof Member): void => {
    const { value } = event.target;
    setMembers((prevMembers) => {
      const newMembers = [...prevMembers];
      const member = newMembers[index] || { name: '', github: '', twitter: '', image: null };
      member[field] = value;
      newMembers[index] = member;
      return newMembers;
    });
  };

  const addMember = (): void => {
    setMembers((prevMembers) => [...prevMembers, { name: '', github: '', twitter: '', image: null }]);
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    try {
        // Prepare team data
        const teamData = members.map((member) => ({
            name: member.name,
            github: member.github,
            twitter: member.twitter,
            image: member.image instanceof File ? null : member.image, // Fix: Convert File object to null
        }));

        // Save team data to FormDataContext
        updateFormData({ teamMembers: teamData });

        // Redirect to the next form
        router.push('/addproject/description');
    } catch (error: any) {
      console.error('Error saving team data:', error.message);
      alert('Failed to save team data. Please try again.');
    } finally {
      router.push('/addproject/links');
    }
  };

  return (
    <form className="flex flex-col self- sm:mt-24 font-nunito max-w-full mt-10" onSubmit={handleSubmit}>
    <div className="flex gap-2.5 self-start">
      <div className="shrink-0 rounded-2xl bg-zinc-400 h-[11px]  w-[38px]" />
      <div className="shrink-0 w-14 bg-[#954AD2] rounded-2xl h-[11px]" />
      <div className="shrink-0 rounded-2xl bg-zinc-400 h-[11px]  w-[38px]" />
    </div>
    <div className="mt-11 sm:text-[30px] font-silkscreen font-medium tracking-wide leading-8 text-white max-w-full text-4xl">
      ADD YOUR TEAM 🫂
    </div>
    <div className="mt-5 text-[16px] font-nunito font-medium tracking-wide leading-8 text-white text-opacity-50 max-w-full">
      Show the world your team members.
    </div>
    <div className="sm:w-[875px]">
      {members.map((member, index) => (
        <div key={index} className="flex gap-3.5 items-center self-center mt-8 w-full xl:flex-nowrap flex-wrap">
          <div className="flex items-center justify-center  bg-[#DCA7FB] rounded-[10px] flex-col px-2 aspect-square">
            <input
              type="file"
              accept="image/jpeg, image/png, image/gif"
              onChange={(e) => handleMemberImageSelect(e, index)}
              className="hidden"
              id={`memberImageInput-${index}`}
            />
          {member.image && typeof member.image === 'string' ? (
              <img src={member.image} alt="Member Image" className="w-24 h-24 rounded-full" />
          ) : (
              <label htmlFor={`memberImageInput-${index}`} className="cursor-pointer">
                  <Image src={upload} alt="Upload Icon" width={25} height={25} className="shrink-0 stroke-black" />
                  <div className="text-xs font-medium tracking-normal leading-8 text-blue-600">
                      Drop, Paste here or <span className="text-blue-600">Browse</span>
                  </div>
              </label>
          )}
            <div className="mt-2 text-xs tracking-normal leading-3 text-center text-black text-opacity-50">
              Recommended size: 250x250 JPG, PNG, GIF. Max size: 5MB
            </div>
          </div>
          <input
            className="justify-center items-start pl-4 py-4 my-auto text-[18px] font-medium tracking-normal leading-8 bg-[#DCA7FB] rounded-xl  text-black text-opacity-60  placeholder:text-[16px] placeholder:font-nunito placeholder:text-black  placeholder:text-opacity-40"
            placeholder="Name of the member"
            value={member.name}
            onChange={(e) => handleInputChange(e, index, 'name')}
          />
          <input
            className="justify-center items-start pl-4 py-4 my-auto text-[18px] font-medium tracking-normal leading-8 bg-[#DCA7FB] rounded-xl  text-black text-opacity-60  placeholder:text-[16px] placeholder:font-nunito placeholder:text-black  placeholder:text-opacity-40"
            placeholder="@Github"
            value={member.github}
            onChange={(e) => handleInputChange(e, index, 'github')}
          />
          <input
            className="justify-center items-start pl-4 py-4 my-auto text-[18px] font-medium tracking-normal leading-8 bg-[#DCA7FB] rounded-xl  text-black text-opacity-60  placeholder:text-[16px] placeholder:font-nunito placeholder:text-black  placeholder:text-opacity-40"
            placeholder="@Twitter"
            value={member.twitter}
            onChange={(e) => handleInputChange(e, index, 'twitter')}
          />
        </div>
      ))}
      <div className="justify-center text-center items-center self-center px-16 py-4 mt-12 w-full text-xl font-medium tracking-wide leading-8 bg-[#DCA7FB] rounded-xl border border-dashed border-white border-opacity-30 max-w-[879px] text-black text-opacity-80 max-md:px-5 max-md:mt-10 cursor-pointer" onClick={addMember}>
        Add Another Member
      </div>
      <div className="flex gap-5 justify-between w-full text-[16px] font-medium tracking-wide leading-7 whitespace-nowrap flex-wrap sm:mt-20 mt-10 max-w-full">
        <a href="/addproject/banner" className="flex gap-5 font-nunito justify-between items-center sm:-mr-12 px-8 py-2 text-white text-opacity-80 bg-[#954AD2] rounded-[15px]">
          <div>Back</div>
        </a>
        <button type="submit" className="flex gap-5 font-nunito justify-between items-center sm:-mr-12 px-4 py-2 text-white text-opacity-80 bg-[#954AD2] rounded-[15px]">
          <div>Next</div>
          <Image alt="" src={next} width={12} height={12} className="shrink-0 aspect-[0.76] stroke-white" />
        </button>
      </div>
    </div>
  </form>
);
}
