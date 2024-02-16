import Image from "next/image";
import groupIcon from "../../public/images/groupIcon.svg"

export default function GroupIcon() {
    return (
        <Image
            className="self-stretch h-full max-w-full overflow-hidden shrink-0 object-contain  w-full [transform:scale(1.039)]"
            loading="eager"
            alt=""
            src={groupIcon}
        />
    )
}