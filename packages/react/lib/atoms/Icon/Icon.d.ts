import { FC } from "react";
interface IconProps {
    iconData: {
        src: string;
        description: string;
        hasValue: boolean | null;
    };
}
declare const Icon: FC<IconProps>;
export default Icon;
