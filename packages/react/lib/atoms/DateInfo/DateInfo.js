import React from 'react';

const getHumanReadableDate = (date) => {
    const dateFormatted = new Date(date);
    const day = dateFormatted.getDay();
    const month = dateFormatted.toLocaleString("default", { month: "short" });
    const year = dateFormatted.getFullYear();
    return `${day} ${month} ${year}`;
};
const DateInfo = ({ date }) => {
    return (React.createElement("div", { className: "dse-date" },
        React.createElement("span", null, "Joined "),
        date && React.createElement("time", { dateTime: date }, getHumanReadableDate(date))));
};

export { DateInfo as default };
//# sourceMappingURL=DateInfo.js.map
