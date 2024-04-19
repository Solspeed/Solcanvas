import star from "../../public/star.png";

interface TextSectionProps {
  title: string;
  paragraphs: string[];
}

const TextSection: React.FC<TextSectionProps> = ({ title, paragraphs }) => {
  return (
    <section className="flex flex-col">
      <h1 className="sm:text-[48px] text-2xl sm:leading-10 leading-8 font-silkscreen">
        {title}
      </h1>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="sm:mt-20 mt-10 max-md:max-w-full font-nunito"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}
    </section>
  );
};

const MyComponent: React.FC = () => {
  const textSections = [
    {
      title: "The Universe of Solana",
      paragraphs: [
        `Ridiculously compelling, SolCanvas is your personal teleport to the <br /> Solana ecosystem. It's not just an app, it's the revolution your <br /> pocket has been waiting for.`,
        `SolCanvas: It's like having the cosmos in your palm, but the <br /> cosmos is just Solana projects, which is arguably better than the <br /> actual cosmos.`,
        `Get involved, add your projects, edit existing ones, and rack up <br /> those SPL tokens. Who said nothing in life is free?`,
      ],
    },
  ];

  return (
    <section className=" flex justify-center  sm:px-16 px-10 mq450:px-6 w-full bg-black text-[#954AD2]">
      <div className="relative flex flex-col w-full max-w-[936px] sm:space-y-24 space-y-12">
      <img src={star.src} alt="Star" className=" absolute sm:top-44 top-36 sm:right-12 right-0 w-[344px] h-[344px]  object-cover" />
        {textSections.map((section, index) => (
          <TextSection key={index} title={section.title} paragraphs={section.paragraphs} />
        ))}
      </div>
    </section>
  );
};

export default MyComponent;