import React from "react";

const Council = () => {
  return (
    <>
      <div className="max-w-[1240px] w-full h-full mx-auto text-center flex flex-col justify-center">
        <div className="border-b-4">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 pb-2">
            Choir Council
          </h1>
        </div>
      </div>
      <div className="max-w-[800px] text-blue-900 text-center pt-2 md:text-left mx-2 md:mx-auto">
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
          President - Mia Gracia
          <br />
          Vice President - Erasmo Martinez Jr.
          <br />
          Secretary - Christian Quintero
          <br />
          Treasurer - Janice Maldonado
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
