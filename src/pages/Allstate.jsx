import React from "react";

const Allstate = () => {
  return (
    <>
      <div className="bg-white max-w-7xl w-full h-full mx-auto text-center flex flex-col justify-center">
        <div className="border-b-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 py-4 sm:py-6">
            All State & UIL
          </h1>
        </div>
      </div>
      <div className="bg-white max-w-7xl text-gray-900 flex flex-col items-center text-center py-6 md:text-left md:mx-auto px-4">
        <p className="text-left">
          All LECHS choir students are{" "}
          <b>
            <i>highly encouraged</i>
          </b>{" "}
          to participate in the TMEA All-State Auditions and/or UIL Solo &
          Ensemble process.
        </p>
        <br />

        <p className="text-left">
          <b>UIL Solo & Ensemble</b> is a <i>rating-based</i> event (student vs.
          self) where a student will perform for a rating of Superior,
          Excellent, or Good in front of a judge.{" "}
          <b>
            This is not a rank-based competition, as in, there is no 1st, 2nd,
            or 3rd place etc...{" "}
          </b>
        </p>
        <br />
        <a
          href="https://forms.gle/MAfY6NYgH1o695BR8"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button" className="bg-gray-900 hover:bg-yellow-600 font-bold inline-flex items-center justify-center rounded-lg p-3.5 text-white">
            UIL SOLO & ENSEMBLE SIGN-UP
          </button>
        </a>
        <br />
        <p className="text-left">
          <b>Texas All-State Choir auditions</b> are <i>rank-based</i> events
          (student vs. student) where all students learn a set of music and
          audition for judges. The audition is conducted in a "blind" mode where
          the student and judges cannot see each other.{" "}
        </p>
        <br />

        <p className="text-left">
          <b>
            Once a singer is registered for a contest, if they choose to not
            participate for any reason they will be required to pay a
            cancellation fee to cover the cost of their entry fee(s) and meals.
          </b>
        </p>
        <br />
        <p className="text-left">
          The Texas Music Educators Association (TMEA) sponsors All-State Choirs
          (Mixed, Women's, and Men's) each year in February and the Region
          Choirs in November. Singers are selected throughout the entire state
          of Texas through a series of tryouts. The entire process is based on
          individual effort and is an individual accomplishment. Singers must be
          personally motivated to learn the music as well as work on
          sight-reading skills. According to TMEA policy, you must be an active
          member of the LECHS Choir Department. An active member must have
          attendance according to school policy and be academically eligible.
          Our department offers many opportunities to learn the music, including
          after school rehearsals and in-class lessons. The process is very
          strenuous; however, rewards for those who compete are tremendous.
        </p>
      </div>
    </>
  );
};

export default Allstate;
