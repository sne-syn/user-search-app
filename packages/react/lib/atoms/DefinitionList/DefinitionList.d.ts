import { FC } from "react";
interface DefinitionListProps {
    list: {
        [key: string]: number | string;
    };
}
declare const DefinitionList: FC<DefinitionListProps>;
export default DefinitionList;
