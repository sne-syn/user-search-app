import React, { FC } from "react";
interface WrapperProps {
    type: "accent" | "main";
    children: React.ReactNode;
    interactive?: boolean;
}
declare const Wrapper: FC<WrapperProps>;
export default Wrapper;
