import Image from "next/image";
import groupIcon from "../../public/images/groupIcon.svg"

export default function GroupIcon() {
    return (
        <Image
            className="self-stretch sm:mr-6 2xl:mr-0 sm:px-0 px-4 h-full max-w-full overflow-hidden shrink-0 object-contain  w-full [transform:scale(1.039)]"
            loading="eager"
            alt=""
            src={groupIcon}
        />
    )
}