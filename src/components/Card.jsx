import React from "react";

const Card = ({ customer, handleCustomer }) => {
  return (
    <div
      onClick={() => handleCustomer(customer)}
      className="rounded-md cursor-pointer bg-base-100 p-4 shadow
                 hover:shadow-md transition"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <h2 className="card-title text-base sm:text-[18px] text-[#001931]">
          {customer.title}
        </h2>

        <div
          className={`badge badge-lg sm:badge-xl font-semibold rounded-3xl
                      text-sm sm:text-[16px] gap-2 w-fit ${
                        customer.status === "Open"
                          ? "bg-[#B9F8CF] text-[#0B5E06]"
                          : "bg-[#F8F3B9] text-[#9C7700]"
                      }`}
        >
          <span
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
              customer.status === "Open" ? "bg-[#02A53B]" : "bg-[#FEBB0C]"
            }`}
          ></span>
          {customer.status}
        </div>
      </div>

      <p className="text-sm sm:text-md text-[#627382] mt-2">
        {customer.description}
      </p>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mt-4">
        <div className="flex gap-3 items-center flex-wrap">
          <span className="text-sm text-[#627382] font-medium">
            #{customer.id}
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

        <div className="flex gap-4 items-center text-sm text-[#627382] flex-wrap">
          <span>{customer.customer}</span>
          <span>{customer.createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
