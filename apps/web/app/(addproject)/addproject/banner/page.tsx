"use client";

import { useState, ChangeEvent } from "react";
import required from "../../../../public/images/required.png";
import next from "../../../../public/images/next.png";
import Image from "next/image";
import upload from "../../../../public/images/upload.png";
import supabase from "../../../../supabase";
import { useRouter } from "next/navigation";
import { useFormData } from '../context/FormDataContext'

export default function ProjectBanner() {

  const { formData, updateFormData } = useFormData();
  const [logoFile, setLogoFile] = useState<File | null>(null); // State to hold the selected logo file
  const [bannerFile, setBannerFile] = useState<File | null>(null); // State to hold the selected banner file
  const router = useRouter();
  console.log("FormData:", formData);
  const handleFileSelect = (file: File, fileType: string) => {
    if (fileType === 'logo') {
      setLogoFile(file);
    } else if (fileType === 'banner') {
      setBannerFile(file);
    }
  };
  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    fileType: string
  ) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) {
      handleFileSelect(droppedFile, fileType);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>, fileType: string) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      handleFileSelect(selectedFile, fileType);
    }
  };

  const clearFile = (fileType: string) => {
    if (fileType === 'logo') {
      setLogoFile(null);
    } else if (fileType === 'banner') {
      setBannerFile(null);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Image uploads
      const logoUploadResult = logoFile
        ? await supabase.storage.from('logo_image').upload(`project_logo_${Date.now()}`, logoFile)
        : null;

      const bannerUploadResult = bannerFile
        ? await supabase.storage.from('banner_image').upload(`project_banner_${Date.now()}`, bannerFile)
        : null;

      if (logoUploadResult?.error || bannerUploadResult?.error) {
        throw new Error('Image upload failed.');
      }

      // Construct Image Paths
      const logoImagePath = logoUploadResult
        ? constructImageUrl('logo_image', logoUploadResult.data.path)
        : undefined;

      const bannerImagePath = bannerUploadResult
        ? constructImageUrl('banner_image', bannerUploadResult.data.path)
        : undefined;

      // Update form data with logo and banner image URLs
      updateFormData({
        logoImageUrl: logoImagePath,
        bannerImageUrl: bannerImagePath,
      });

      // Redirect to the next step
      router.push('/addproject/team');
    } catch (error) {
      console.error('Error submitting data:', error);
      // Handle error state or provide feedback to the user
    }
  };

  const constructImageUrl = (bucketName: string, imagePath: string) => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    return `${supabaseUrl}/storage/v1/object/public/${bucketName}/${encodeURIComponent(imagePath)}`;
  };


  const handllePreviousClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push("/addproject/categories");
  }



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
        MAKE IT LOOK SEXY 🔥
      </div>
      <div className="mt-5 text-[16px] font-nunito font-medium tracking-wide leading-8 text-white text-opacity-50 max-w-full">
        Show world your product design skill of banner and logo.
      </div>
      <div className="sm:w-[457px]">
        <div className="flex gap-5 justify-between w-full text-2xl tracking-wide leading-8 whitespace-nowrap sm:flex-none flex-wrap sm:mt-20 mt-10 max-w-full">
          <div className="flex flex-1 self-start text-white text-opacity-80">
            <div>Logo</div>
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
        <div
          className="flex py-[15px] pr-3.5 pl-7 mt-8 bg-[#DCA7FB] rounded-xl max-md:flex-wrap max-md:pl-5"
          onDrop={(e) => handleDrop(e, "logo")}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className="cursor-pointer flex">
            <img
              loading="lazy"
              src={upload.src}
              className="shrink-0 my-auto mr-4 aspect-square stroke-[2px] stroke-black w-[25px]"
            />
            <div className="flex flex-col grow shrink-0 basis-0 w-full">
              <div className="text-[18px] font-medium tracking-normal leading-8 text-blue-600">
                {logoFile ? (
                  <span className="text-black">{logoFile.name}</span>
                ) : (
                  <>
                    <span className="text-black">Drop, Paste here or</span>{" "}
                    <label
                      htmlFor="logoInput"
                      className="text-blue-600 cursor-pointer"
                    >
                      Browse
                    </label>
                  </>
                )}
                {logoFile && (
                  <button
                    onClick={() => {
                      clearFile("logo");
                    }}
                    className="ml-2 text-red-600 cursor-pointer focus:outline-none"
                  >
                    Remove
                  </button>
                )}
              </div>
              <div className="text-[13px] tracking-normal leading-8 text-black text-opacity-50">
                Recommended size: 250*250 | JPG, PNG, GIF. Max size: 50MB
              </div>
            </div>
          </div>
          <input
            type="file"
            id="logoInput"
            className="hidden"
            accept="image/jpeg, image/png, image/gif"
            onChange={(e) => handleInputChange(e, "logo")}
          />
        </div>
        <div className="flex gap-5 w-full text-2xl tracking-wide leading-8 whitespace-nowrap flex-wrap mt-10 max-w-full">
          <div className="flex flex-1 self-start text-white text-opacity-80">
            <div>Banner</div>
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
        <div
          className="flex py-[15px] pr-3.5 pl-7 mt-8 bg-[#DCA7FB] rounded-xl max-md:flex-wrap max-md:pl-5"
          onDrop={(e) => handleDrop(e, "banner")}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className="cursor-pointer flex">
            <img
              loading="lazy"
              src={upload.src}
              className="shrink-0 my-auto mr-4 aspect-square stroke-[2px] stroke-black w-[25px]"
            />
            <div className="flex flex-col grow shrink-0 basis-0 w-full">
              <div className="text-[18px] font-medium tracking-normal leading-8 text-blue-600">
                {bannerFile ? (
                  <span className="text-black">{bannerFile.name}</span>
                ) : (
                  <>
                    <span className="text-black">Drop, Paste here or</span>{" "}
                    <label
                      htmlFor="bannerInput"
                      className="text-blue-600 cursor-pointer"
                    >
                      Browse
                    </label>
                  </>
                )}
                {bannerFile && (
                  <button
                    onClick={() => clearFile("banner")}
                    className="ml-2 text-red-600 cursor-pointer focus:outline-none"
                  >
                    Remove
                  </button>
                )}
              </div>
              <div className="text-[13px] tracking-normal leading-8 text-black text-opacity-50">
                Recommended size: 150 0*500 | JPG, PNG, GIF. Max size: 50MB
              </div>
            </div>
          </div>
          <input
            type="file"
            id="bannerInput"
            className="hidden"
            accept="image/jpeg, image/png, image/gif"
            onChange={(e) => handleInputChange(e, "banner")}
          />
        </div>
        <div className="flex gap-5 justify-between w-full text-[16px] font-medium tracking-wide leading-7 whitespace-nowrap flex-wrap sm:mt-20 mt-10 max-w-full">
        <button
            onClick={handllePreviousClick}
            className="flex gap-5 font-nunito justify-between items-center sm:-mr-12 px-8 py-2 text-white text-opacity-80 bg-[#954AD2] rounded-[15px]"
          >
            <div>Back</div>
          </button>
          <button type="submit">
            <a
              // href="/addproject/team"
              className="flex gap-5 font-nunito justify-between items-center sm:-mr-12 px-4 py-2 text-white text-opacity-80 bg-[#954AD2] rounded-[15px]"
            >
              <div>Next</div>
              <Image
                alt=""
                width={100}
                height={100}
                loading="lazy"
                src={next}
                className="shrink-0 w-[12px] aspect-[0.76] stroke-[2px] stroke-white"
              />
            </a>
          </button>
        </div>
      </div>
    </form>
  );
}

