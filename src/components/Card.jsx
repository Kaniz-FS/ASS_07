import React from 'react';

const Card = ({customer, handleCustomer}) => {
 
  return (
     <div onClick={()=>handleCustomer(customer)} className="rounded-md cursor-pointer  bg-base-100 p-4 shadow">
              <div className="flex justify-between text-sm     items-center">
                <h2 className="card-title text-[18px] text-[#001931]">
                  {customer.title}
                </h2>

                <div
                  className={`badge badge-xl font-semibold rounded-3xl text-[16px] gap-2 ${
                    customer.status === "Open"
                      ? "bg-[#B9F8CF] text-[#0B5E06]"
                      : "bg-[#F8F3B9] text-[#9C7700]"
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded-full ${
                      customer.status === "Open"
                        ? "bg-[#02A53B]"
                        : "bg-[#FEBB0C]"
                    }`}
                  ></span>
                  {customer.status}
                </div>
              </div>

              {/* Description */}
              <p className="text-md text-[#627382] mt-1">
                {customer.description}
              </p>

              {/* Footer */}
              <div className="flex justify-between items-center mt-4">
                {/* Left */}
                <div className="flex gap-3 items-center">
                  <span className="text-sm text-[#627382] font-medium ">
                    {"#"}
                    {customer.id}
                  </span>
                  <span
                    className={`text-sm font-semibold ${
                      customer.priority === "HIGH PRIORITY"
                        ? "text-[#F83044]"
                        : customer.priority === "MEDIUM PRIORITY"
                        ? "text-[#FEBB0C]"
                        : "text-[#02A53B]"
                    }`}
                  >
                    {customer.priority}
                  </span>
                </div>

                {/* Right */}
                <div className="flex gap-4  items-center text-sm text-[#627382]">
                  <span> {customer.customer}</span>
                  <span className="flex items-center gap-1">
                    {customer.createdAt}
                  </span>
                </div>
              </div>
            </div>
  );
};

export default Card;