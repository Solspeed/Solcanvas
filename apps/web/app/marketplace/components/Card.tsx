import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

interface CardProps {
  imageSrc: string;
  iconSrc: string;
  title: string;
  description: string;
  url: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, iconSrc, title, description , url}) => {
  // Function to extract limited words from description
  const getLimitedDescription = (description: string, limit: number): string => {
    const words = description.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return description;
  };

  const limitedDescription = getLimitedDescription(description, 8);

  return (
    <a href={`/marketplace/${url}`} className="w-[45.875rem] h-[19.063rem] bg-[#151515] rounded-[15px]">
      <Image
        src={imageSrc}
        alt={title}
        width={734}
        height={152.5}
        className="w-full shrink-0 object-center object-cover h-[50%] rounded-t-[15px]"
      />
      <div className="flex items-center sm:ml-6 ml-2 gap-4 h-[50%]">
        <Image
          src={iconSrc}
          alt={`${title} icon`}
          width={90}
          height={90}
          className="shrink-0 flex aspect-square"
        />
        <div className="flex flex-col justify-center gap-2">
          <div className="text-white font-semibold text-[22px]">{title}</div>
          <div className="text-[#B2B2B2] xl:tracking-normal md:tracking-tight tracking-tighter text-[15px]">
            {limitedDescription}
          </div>
        </div>
      </div>
    </a>
  );
};

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;