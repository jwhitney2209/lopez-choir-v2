import React from "react";

const Recordings = () => {
  return (
    
      <div className="bg-white max-w-7xl w-full h-full mx-auto text-center flex flex-col justify-center">
        <div className="border-b-4">
          <p className="text-2xl md:text-3xl font-bold text-gray-900 py-4 sm:py-6">
            Recordings
          </p>
        </div>
        <div className="bg-white max-w-7xl text-gray-900 flex flex-col items-center text-center py-6 md:mx-auto px-4 space-y-6">
          <p className="text-gray-900 font-bold text-xl">
            Class Learning Tracks
          </p>
          <p className="mx-2 md:mx-0">
            Learning tracks for our songs that we are learning in class & for
            UIL
          </p>
          <a
            className=""
            href="https://drive.google.com/drive/folders/1RFwHXw7Xg0vWAM1Ts1d_7lp1zB7Hb8XP?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="bg-gray-900 hover:bg-yellow-600 font-bold inline-flex items-center justify-center rounded-lg p-3.5 text-white">
              LEARNING RECORDINGS
            </button>
          </a>
          <p className="text-gray-900 font-bold text-xl">
            All-State Learning Tracks
          </p>
          <p className="mx-2 md:mx-0">
            Learnings tracks for the 2022-2023 All-State Music
            <br />{" "}
            <i>
              (you must be logged in to your student email through google in
              order to access these tracks)
            </i>
          </p>
          <a
            className=""
            href="https://drive.google.com/drive/folders/1U9mnezuqyE6AMJAObHFvD6FkXn1zw6W9?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button" className="bg-gray-900 hover:bg-yellow-600 font-bold inline-flex items-center justify-center rounded-lg p-3.5 text-white">
              ALL-STATE RECORDINGS
            </button>
          </a>
          {/* <p className="text-blue-900 font-bold text-xl p-2">
          All-State Sight Reading
        </p>
        <p>Previous Pre-Area & Area All-State Sight Reading exercises</p>
        <button className="bg-blue-900 hover:bg-amber-500   w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">
          All-State Sight Reading
        </button>
        <p className="text-blue-900 font-bold text-xl p-2">
          Sight Reading Factory (SRF)
        </p>
        <p>
          A link to Sight Reading Factory, a website where students can practice
          their sight reading skills on their own
        </p>
        <button className="bg-blue-900 hover:bg-amber-500   w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white">
          Sight Reading Factory
        </button> */}
        </div>
      </div>
  );
};

export default Recordings;
