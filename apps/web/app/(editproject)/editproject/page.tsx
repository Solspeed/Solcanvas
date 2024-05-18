export default function ProjectListing() {
  
  return (
    <form className={`flex flex-col sm:mt-24 font-nunito mr-12 ml-8`}>
      <div className="flex gap-2.5 self-start">
        <div className="shrink-0 rounded-2xl bg-zinc-400 h-[11px]  w-[38px]" />
        <div className="shrink-0 w-14 bg-[#954AD2] rounded-2xl h-[11px]" />
        <div className="shrink-0 rounded-2xl bg-zinc-400 h-[11px]  w-[38px]" />
      </div>
      <div className="mt-11 sm:text-[30px] font-silkscreen font-medium tracking-wide leading-8 text-white max-w-full text-4xl">
        GM, "USER NAME"
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 place-content-evenly mt-12 w-[90vw] sm:w-[80vw] xl:w-[60vw] sm:gap-12 gap-6">
        <a href="/editproject/name" className="justify-center text-center flex items-center px-16 py-6 whitespace-nowrap bg-purple-300 rounded-2xl max-md:px-5">
          Name/ Tagline
        </a>
        <a href="/editproject/description" className="justify-center text-center flex items-center px-16 py-6  whitespace-nowrap bg-purple-300 rounded-2xl max-md:px-5">
          Brief Description
        </a>
        <a href="/editproject/category" className="justify-center text-center flex items-center px-16 py-6  whitespace-nowrap bg-purple-300 rounded-2xl max-md:px-5">
          Category
        </a>
        <a href="/editproject/banner" className="justify-center text-center flex items-center px-16 py-6  whitespace-nowrap bg-purple-300 rounded-2xl max-md:px-5">
          Logo/ Banner
        </a>
        <a href="/editproject/team" className="justify-center text-center flex items-center px-16 py-6  whitespace-nowrap bg-purple-300 rounded-2xl max-md:px-5">
          Team Members
        </a>
        <a href="/editproject/links" className="justify-center text-center flex items-center px-16 py-6  whitespace-nowrap bg-purple-300 rounded-2xl max-md:px-5">
          Links
        </a>
      </div>
    </form>
  );
}
