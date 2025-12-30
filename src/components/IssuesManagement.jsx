import React, { use, useState } from "react";
import { toast } from "react-toastify";

import Container from "./Container";
import vectorImg from "../assets/vectorF.png";
import Card from "./Card";
import CountBox from "./CountBox";

const IssuesManagement = ({ customerPromise }) => {
  const customerData = use(customerPromise);
  // console.log(customerData);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);
  const [customers, setCustomers] = useState(customerData);

  const handleCustomer = (customer) => {
    toast.success("In-Progress!!");

    const isExist = taskStatus.find((ticket) => ticket.id === customer.id);
    if (isExist) return;

    const newTaskStatus = [...taskStatus, customer];
    setTaskStatus(newTaskStatus);
  };

  const handleComplete = (task) => {
    toast.success("Complete!");

    // removing
    const remainingTasks = taskStatus.filter((ticket) => ticket.id !== task.id);
    setTaskStatus(remainingTasks);

    // adding in resolved
    const newResolvedTasks = [...resolvedTasks, task];
    setResolvedTasks(newResolvedTasks);

    const remainingCustomers = customers.filter((c) => c.id !== task.id);
    setCustomers(remainingCustomers);
  };

  return (
    <Container>
      <CountBox
        taskTotal={taskStatus.length}
        resolvedTotal={resolvedTasks.length}
      ></CountBox>
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8 px-4 md:px-8">
        {/* left */}
        <div className="lg:col-span-3">
          <h2 className="text-[#34485A] font-semibold text-2xl md:text-4xl">
            Customer Tickets
          </h2>
        </div>
       
        <div className="hidden lg:block lg:col-span-1">
          <h2 className="text-[#34485A] font-semibold text-2xl md:text-4xl">
            Task Status
          </h2>
        </div>

      
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {customers.map((customer) => (
            <Card
              key={customer.id}
              customer={customer}
              handleCustomer={handleCustomer}
            />
          ))}
        </div>

        {/* Right*/}

        <div className="space-y-4 ">
          <h2 className="block lg:hidden text-[#34485A] font-semibold text-2xl">
            Task Status
          </h2>
          
          <div className="shadow bg-base-100 p-3 text-center space-y-3 rounded">
            <h2 className="font-semibold text-xl md:text-2xl">Task Status</h2>

            {taskStatus.length === 0 && (
              <p className="text-[#627382] text-sm">
                Select a ticket to add to Task Status
              </p>
            )}

            {taskStatus.map((task) => (
              <div
                key={task.id}
                className="shadow p-3 rounded-xl bg-base-300 space-y-3"
              >
                <h2 className="font-semibold">{task.title}</h2>
                <button
                  onClick={() => handleComplete(task)}
                  className="bg-[#02A53B] text-white w-full px-3 py-1.5 rounded font-semibold"
                >
                  Complete
                </button>
              </div>
            ))}
          </div>

          {/* Resolved */}
          <div className="shadow p-3 space-y-3 bg-base-100 rounded">
            <h2 className="font-semibold text-center text-xl md:text-2xl">
              Resolve Task
            </h2>

            {resolvedTasks.length === 0 && (
              <p className="text-[#627382] text-center text-sm">
                No resolved tasks yet.
              </p>
            )}

            {resolvedTasks.map((task) => (
              <div key={task.id} className="shadow p-3 rounded-xl bg-[#E0E7FF]">
                <h2 className="font-semibold">{task.title}</h2>
                <div className="flex justify-between items-center mt-3">
                  <p className="text-[#02A53B] font-semibold">Completed</p>
                  <p className="text-sm text-[#627382]">Click to remove</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default IssuesManagement;
