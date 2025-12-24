import React, { use } from "react";
import Container from "./Container";
import vectorImg from "../assets/vectorF.png";
import Card from './Card'
import CountBox from "./CountBox";

const IssuesManagement = ({ customerPromise }) => {
  const customerData = use(customerPromise);
  console.log(customerData);
  return (
    <Container>
      <CountBox/>

      <section className="grid grid-cols-4  gap-4 mb-8 px-8">
        <div className="col-span-3">
          <h2 className="text-[#34485A] font-semibold text-4xl ">
            Customer Tickets
          </h2>
        </div>
        <div className="mb-6 col-span-1">
          <h2 className="text-[#34485A] font-semibold text-4xl ">
            Task Status
          </h2>
        </div>

        <div className="col-span-3 grid rounded-2xl grid-cols-2  gap-4">
          {customerData.map((customer) => (
           <Card key={customer.id} customer={customer}/>
          ))}
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
