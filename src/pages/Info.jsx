import React from "react";

const Info = () => {
  return (
    <>
      <div className="bg-white max-w-7xl w-full h-full mx-auto text-center flex flex-col justify-center">
        <div className="border-b-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 py-4 sm:py-6">
            Parent Information
          </h1>
        </div>
      </div>
      <div className="bg-white max-w-7xl text-gray-900 flex flex-col py-6 mx-auto px-4">
        <p>
          For the 2023-2024 school year we will have information for parents
          posted on this page and we will be updating it regularly. Parents,
          please check this website regularly as well as the calendar page to
          stay up to date on all the events going on for the choir program. We
          plan to have an action packed year with many events!
        </p>
        <br />
        <div className="flex flex-col space-y-4">
          <p className="font-bold">
            Parent Information Google Form (2023-2024)
            <span className="text-red-700 font-bold">*Required</span>
          </p>
          <a
            href="https://forms.gle/6dXWJcnbUDMgess79"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className="bg-gray-900 hover:bg-yellow-600 font-bold inline-flex items-center justify-center rounded-lg p-3.5 text-white"
            >
              PARENT INFORMATION 2023-2024
            </button>
          </a>
        </div>
        <br />
        <p></p>
      </div>
    </>
  );
};

export default Info;
