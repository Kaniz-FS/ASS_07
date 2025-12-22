import React, { use } from 'react';

import Container from './Container';
import vectorImg from "../assets/vectorF.png";

const IssuesManagement = ({customerPromise}) => {

  const customerData = use(customerPromise)
  console.log(customerData)
  return (
    <Container>
  <section className='grid grid-cols-2 gap-6 my-16 px-8'>
    {/* left col */}
  <div className='rounded-md relative  min-h-[250px] overflow-hidden'>
     
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
      transform: 'scaleX(-1)' 
    }}
  ></div>
  {/* text */}
  <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-white">
    <h2 className='font-semibold text-3xl'>In-Progress</h2>
    <p className='font-semibold text-2xl'>0</p>
  </div>
  </div>
  {/* right col */}
 <div className='rounded-md relative  min-h-[250px] overflow-hidden' 
  >
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
      transform: 'scaleX(-1)' 
    }}
  ></div>
  {/* text */}
  <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-white">
    <h2 className='font-semibold text-3xl'>Resolved</h2>
    <p className='font-semibold text-2xl'>0</p>
  </div>
  </div>
</section>




<section className="grid grid-cols-4  gap-4 mb-8 px-8">
  <div className='col-span-3'>
  <h2 className='text-[#34485A] font-semibold text-4xl '>Customer Tickets</h2>
</div>
  <div className='mb-6 col-span-1'>
  <h2 className='text-[#34485A] font-semibold text-4xl '>Task Status</h2>
</div>
 
  {/* LEFT SIDE */}
  <div className="col-span-3 grid rounded-2xl grid-cols-2  gap-4">
    
    <div className="rounded-md  bg-base-100 p-4 shadow">
      
       <div className="flex justify-between text-sm  items-center"> 
          <h2 className="card-title text-[18px] text-[#001931]">
            Login Issues - Can't Access Account
          </h2>

          <div className="badge badge-xl bg-[#B9F8CF]  font-semibold rounded-3xl text-[16px] text-[#0B5E06] gap-2">
            <span className="w-4 h-4 bg-[#02A53B] rounded-full"></span>
            Open
          </div>
        </div>

        {/* Description */}
        <p className="text-md text-[#627382] mt-1">
          Customer is unable to log in to their account. They've tried resetting
          their password multiple times but still...
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4">

          {/* Left */}
          <div className="flex gap-3 items-center">
            <span className="text-sm text-[#627382] font-medium ">#1001</span>
            <span className="text-sm font-semibold text-[#F83044]">
              HIGH PRIORITY
            </span>
          </div>

          {/* Right */}
          <div className="flex gap-4  items-center text-sm text-[#627382]">
            <span>John Smith</span>
            <span className="flex items-center gap-1">
              📅 1/15/2024
            </span>
          </div>
        </div>
    </div>

   

  </div>

  {/* RIGHT SIDE*/}
 
  <div className="bg-base-100 p-4 shadow-lg">
    <h1 className="flex justify-center font-bold text-2xl">Cart</h1>
    <div className="divider"></div>

    <div className="bg-green-800 p-3 rounded shadow-sm">
      <h1 className="font-bold text-white text-xl">
        Total: <span className="font-normal text-lg">0</span>
      </h1>
    </div>
  </div>

</section>

</Container>



  );
};

export default IssuesManagement;