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
      <iframe title="lopezcal" src="https://calendar.google.com/calendar/embed?src=jwhitney%40bisd.us&ctz=America%2FChicago" width="800" height="600" frameBorder="0" scrolling="no"></iframe>
      </div>
    </div>
  );
};

export default Calendar;
