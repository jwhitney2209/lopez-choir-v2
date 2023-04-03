import React from "react";

const Calendar = () => {
  return (
    <div className="bg-white max-w-7xl w-full h-full mx-auto text-center flex flex-col justify-center">
        <div className="border-b-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 py-4 sm:py-6">
            Calendar
          </h1>
        </div>
      <div className="flex m-2 justify-center">
      <iframe title="lopezcal" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&mode=AGENDA&showNav=0&showPrint=0&showTabs=0&showTz=0&showTitle=0&showDate=0&src=MjZkYjE5MTA1ZDY1YTMzZDQyMGMxNzMwZmE0YmU2NzI1YjIzZjU0MTJmZDQ0OTg4NzY2NDJiYmYzMmViNWE1YUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23009688" width="800" height="600" frameBorder="0" scrolling="no"></iframe>
      </div>
    </div>
  );
};

export default Calendar;
