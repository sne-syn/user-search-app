import React, { FC, useState } from "react";
import Wrapper from "./../Wrapper";

interface ModalProps {
  content: string | JSX.Element;
  visibleOnMobile?: boolean;
  visibleOnTablet?: boolean;
}
const Modal: FC<ModalProps> = ({
  content,
  visibleOnMobile,
  visibleOnTablet,
}) => {
  const [close, setClose] = useState(false);
  const className = `dse-modal ${visibleOnMobile ? "dse-modal--mobile" : ""}  ${
    visibleOnTablet ? "dse-modal--tablet" : ""
  }`;
  return (
    <>
      {content && (
        <div className={className} style={close ? { display: "none" } : {}}>
          <Wrapper type="main" padded={false}>
            <div className="dse-modal__contentWrapper">
              {content}
              <button
                className="dse-modal__button"
                onClick={() => setClose(!close)}
              >
                X
              </button>
            </div>
          </Wrapper>
        </div>
      )}
    </>
  );
};

export default Modal;
