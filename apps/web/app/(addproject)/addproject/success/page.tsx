import * as React from "react";

interface TitleProps {
  text: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ text, className }) => {
  return (
    <h1
      className={`text-6xl tracking-wider leading-8 text-purple-500 capitalize max-md:max-w-full max-md:text-4xl ${className}`}
    >
      {text}
    </h1>
  );
};

interface SubtitleProps {
  text: string;
  className?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text, className }) => {
  return (
    <h2
      className={`self-stretch mt-24 text-5xl tracking-wider leading-8 text-purple-300 capitalize max-md:mt-10 max-md:max-w-full max-md:text-4xl ${className}`}
    >
      {text}
    </h2>
  );
};

const MyComponent: React.FC = () => {
  return (
    <main className="flex flex-col w-screen items-center  pt-20 pb-12 bg-black">
      <section className="flex flex-col items-center md:mt-52 mt-10 max-w-full">
        <Title text="Project name" />
        <Subtitle text="Successfully created" />
        <p className="mt-72 text-base font-medium tracking-wide leading-8 text-center text-white text-opacity-50 max-md:mt-10 max-md:max-w-full">
          You will be redirected another page to claim your reward
        </p>
      </section>
    </main>
  );
};

export default MyComponent;
