import React, { FC } from "react";

interface ErrorMessageProps {
  content: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ content }) => {
  return <h2 className="dse-error-message">{content}</h2>;
};

export default ErrorMessage;
