import React from 'react';
import vectorImg from "../assets/vectorF.png";


const CountBox = ({taskTotal}) => {
  return (
    <section className="grid grid-cols-2 gap-6 my-16 px-8">
        {/* left col */}
        <div className="rounded-md relative  min-h-[250px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"></div>
          {/* left side */}
          <div
            className="absolute left-0 top-0 w-[45%] h-full bg-no-repeat  bg-left"
            style={{ backgroundImage: `url(${vectorImg})` }}
          ></div>

          {/* right side */}
          <div
            className="absolute right-0 top-0 w-[45%] h-full bg-no-repeat bg-right "
            style={{
              backgroundImage: `url(${vectorImg})`,
              transform: "scaleX(-1)",
            }}
          ></div>
          {/* text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-white">
            <h2 className="font-semibold text-3xl">In-Progress</h2>
            <p className="font-semibold text-2xl">{taskTotal}</p>
          </div>
        </div>
        {/* right col */}
        <div className="rounded-md relative  min-h-[250px] overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-[#54CF68] to-[#00827A]"></div>
          {/* left side */}
          <div
            className="absolute left-0 top-0 w-[45%] h-full bg-no-repeat  bg-left"
            style={{ backgroundImage: `url(${vectorImg})` }}
          ></div>

          {/* right side */}
          <div
            className="absolute right-0 top-0 w-[45%] h-full bg-no-repeat bg-right "
            style={{
              backgroundImage: `url(${vectorImg})`,
              transform: "scaleX(-1)",
            }}
          ></div>
          {/* text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-white">
            <h2 className="font-semibold text-3xl">Resolved</h2>
            <p className="font-semibold text-2xl">0</p>
          </div>
        </div>
      </section>
  );
};

export default CountBox;