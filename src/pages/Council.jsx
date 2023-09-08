import React from "react";

const Council = () => {
  return (
    <>
      <div className="bg-white max-w-7xl w-full h-full mx-auto text-center flex flex-col justify-center">
        <div className="border-b-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 py-4 sm:py-6">
            Choir Council
          </h1>
        </div>
      </div>
      <div className="bg-white max-w-7xl text-gray-900 flex flex-col items-center text-center py-6 md:mx-auto px-4">
        <h1 className="text-xl">
          <b>Lopez ECHS Choir Council</b>
        </h1>
        <br />
        <p>
          <b>
            <i>
              Meetings are held every Wednesday at 8:30AM in the Choir Hall
              <br />
              Meetings are open to all choir members.
            </i>
          </b>
        </p>
        <br />
        <p>
          President - Erasmo Martinez Jr.
          <br />
          Vice President - Christian Quintero
          <br />
          Secretary - Luis Nava
          <br />
          Treasurer - Malenie Ruiz
          <br />
          <br />
          <b>Choir Leadership Team</b>
          <br />
        </p>
      </div>
    </>
  );
};

export default Council;
