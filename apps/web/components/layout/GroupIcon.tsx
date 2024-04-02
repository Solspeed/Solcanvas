import Image from "next/image";
import groupIcon from "../../public/images/map.png"

export default function GroupIcon() {
    return (
        <Image
            className="self-stretch md:px-36 sm:px-24 px-8 h-full max-w-full overflow-hidden shrink-0 object-contain  w-full [transform:scale(1.039)]"
            loading="eager"
            alt=""
            src={groupIcon}
        />
    )
}