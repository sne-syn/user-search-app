import React, { FC } from "react";
interface WrapperProps {
    type: "accent" | "main";
    children: React.ReactNode;
}
declare const Wrapper: FC<WrapperProps>;
export default Wrapper;
