import exp from "constants";
import * as React from "react";

function MyComponent() {
  return (
    <div className="flex flex-col items-center px-5">
       <div className='rounded-t-md overflow-hidden '>
        <div className='h-[0.25rem] bg-[#B2B2B2]' style={{ width: '46.563rem' }} />
        <div className='flex justify-between w-full '>
          <div className='flex flex-col items-center'>
            <div className="h-0 w-[0.25rem] bg-[#B2B2B2]" style={{ height: "12.825rem" }} />
          </div>
          <div className='flex flex-col items-center'>
            <div className="h-0 w-[0.25rem] bg-[#B2B2B2]" style={{ height: "12.825rem" }} />
          </div>
        </div>
      </div>
      <div className="flex gap-[21rem] justify-between self-stretch w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col px-20 pt-20 pb-12 rounded-2xl bg-neutral-900 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 mt-6 max-md:mx-2">
            <div className="flex flex-col flex-1 items-center">
              <img
                loading="lazy"
                srcSet="..."
                className="rounded-full aspect-square w-[177px]"
              />
              <img
                loading="lazy"
                srcSet="..."
                className="mt-24 rounded-full aspect-square w-[177px] max-md:mt-10"
              />
            </div>
            <img
              loading="lazy"
              srcSet="..."
              className="shrink-0 my-auto max-w-full rounded-full aspect-square w-[177px]"
            />
          </div>
          <div className="self-center mt-32 text-6xl font-semibold tracking-wider leading-8 text-white max-md:mt-10 max-md:text-4xl">
            Token
          </div>
        </div>
        <div className="flex flex-col px-20 pt-20 pb-12 rounded-2xl bg-neutral-900 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 mt-6 max-md:mx-2">
            <div className="flex flex-col flex-1 items-center">
              <img
                loading="lazy"
                srcSet="..."
                className="rounded-full aspect-square w-[177px]"
              />
              <img
                loading="lazy"
                srcSet="..."
                className="mt-24 rounded-full aspect-square w-[177px] max-md:mt-10"
              />
            </div>
            <img
              loading="lazy"
              srcSet="..."
              className="shrink-0 my-auto max-w-full rounded-full aspect-square w-[177px]"
            />
          </div>
          <div className="self-center mt-32 text-6xl font-semibold tracking-wider leading-8 text-white max-md:mt-10 max-md:text-4xl">
            Token
          </div>
        </div>
      </div>
      <div className='rounded-b-md overflow-hidden'>
        <div className='flex justify-between w-full '>
          <div className='flex flex-col items-center'>
            <div className="h-0 w-[0.25rem] bg-[#B2B2B2]" style={{ height: "12.825rem" }} />
          </div>
          <div className='flex flex-col items-center'>
            <div className="h-0 w-[0.25rem] bg-[#B2B2B2]" style={{ height: "12.825rem" }} />
          </div>
        </div>
        <div className='h-[0.25rem] bg-[#B2B2B2]' style={{ width: '46.563rem' }} />

      </div>

    </div>
  );
}

export default MyComponent;

