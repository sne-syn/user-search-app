import React, { FC } from "react";

interface DateInfoProps {
  date: string | null;
}
const getHumanReadableDate = (date: string): string => {
  const dateFormatted = new Date(date);

  const day = dateFormatted.getDay();
  const month = dateFormatted.toLocaleString("default", { month: "short" });
  const year = dateFormatted.getFullYear();

  return `${day} ${month} ${year}`;
};

const DateInfo: FC<DateInfoProps> = ({ date }) => {
  return (
    <>
      {date && (
        <div className="dse-date" data-testid="date-info">
          <span>Joined </span>
          <time dateTime={date}>{getHumanReadableDate(date)}</time>
        </div>
      )}
    </>
  );
};

export default DateInfo;
