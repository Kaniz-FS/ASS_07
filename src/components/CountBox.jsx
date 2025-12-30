import React from "react";
import vectorImg from "../assets/vectorF.png";

const CountBox = ({ taskTotal, resolvedTotal }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 px-4 md:px-8">
      {/* In Progress */}
      <div className="rounded-md relative min-h-[200px] md:min-h-[250px] overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-[#632EE3] to-[#9F62F2]" />

        
        <div
          className="absolute left-0 top-0 h-full
                     w-[40%] md:w-[45%]
                     bg-no-repeat bg-left bg-contain"
          style={{ backgroundImage: `url(${vectorImg})` }}
        />

       
        <div
          className="absolute right-0 top-0 h-full
                     w-[40%] md:w-[45%] 
                     bg-no-repeat bg-right bg-contain"
          style={{
            backgroundImage: `url(${vectorImg})`,
            transform: "scaleX(-1)",
          }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-white">
          <h2 className="font-semibold text-xl md:text-3xl">In-Progress</h2>
          <p className="font-semibold text-lg md:text-2xl">{taskTotal}</p>
        </div>
      </div>

      {/* Resolved */}
      <div className="rounded-md relative min-h-[200px] md:min-h-[250px] overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-[#54CF68] to-[#00827A]" />

       
        <div
          className="absolute left-0 top-0 h-full
                     w-[40%] md:w-[45%] 
                     bg-no-repeat bg-left bg-contain"
          style={{ backgroundImage: `url(${vectorImg})` }}
        />

        
        <div
          className="absolute right-0 top-0 h-full
                     w-[40%] md:w-[45%]
                     bg-no-repeat bg-right bg-contain"
          style={{
            backgroundImage: `url(${vectorImg})`,
            transform: "scaleX(-1)",
          }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-white">
          <h2 className="font-semibold text-xl md:text-3xl">Resolved</h2>
          <p className="font-semibold text-lg md:text-2xl">{resolvedTotal}</p>
        </div>
      </div>
    </section>
  );
};

export default CountBox;
