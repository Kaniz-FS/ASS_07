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
  // 1
  const [resolvedTasks, setResolvedTasks] = useState([]);
  const [customers, setCustomers] = useState(customerData);

  const handleCustomer = (customer) => {
    toast.success("In-Progress!!");

    const isExist = taskStatus.find((ticket) => ticket.id === customer.id);
    if (isExist) return;

    const newTaskStatus = [...taskStatus, customer];
    setTaskStatus(newTaskStatus);
  };

  // 3
  const handleComplete = (task) => {
    toast.success("Complete!");

    // remove from in-progress
    const remainingTasks = taskStatus.filter((ticket) => ticket.id !== task.id);
    setTaskStatus(remainingTasks);

    // add to resolved
    const newResolvedTasks = [...resolvedTasks, task];
    setResolvedTasks(newResolvedTasks);

    // 2
    const remainingCustomers = customers.filter((c) => c.id !== task.id);
    setCustomers(remainingCustomers);
  };

  return (
    <Container>
      <CountBox
        taskTotal={taskStatus.length}
        resolvedTotal={resolvedTasks.length}
      ></CountBox>

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
          {customers.map((customer) => (
            <Card
              key={customer.id}
              customer={customer}
              handleCustomer={handleCustomer}
            />
          ))}
        </div>
        {/* right side*/}

        <div className="space-y-4">
          <div className="shadow bg-base-100 p-2 text-center space-y-3 rounded">
            <h2 className="font-semibold text-2xl">Task Status</h2>

            {taskStatus.length === 0 && (
              <p className="text-[#627382] text-sm mb-3">
                Select a ticket to add to Task Status
              </p>
            )}
            {taskStatus.map((task) => (
              <div
                key={task.id}
                className="shadow p-3  rounded bg-base-300 space-y-3"
              >
                <h2 className="font-semibold">{task.title}</h2>
                <button
                  onClick={() => handleComplete(task)}
                  className="bg-[#02A53B] text-[#FFFFFF] w-full  px-3 py-1.5 rounded font-semibold"
                >
                  Complete
                </button>
              </div>
            ))}
          </div>

          {/* <div className="shadow p-2 space-y-3 bg-base-100  text-center rounded">
            <h2 className="font-semibold  text-2xl ">Resolve Task</h2>
            <p className="text-[#627382] text-sm mb-3">
              No resolved tasks yet.
            </p> */}
          <div className="shadow p-2 space-y-3 bg-base-100 text-center rounded">
            <h2 className="font-semibold text-2xl">Resolve Task</h2>

            {resolvedTasks.length === 0 && (
              <p className="text-[#627382] text-sm">No resolved tasks yet.</p>
            )}

            {resolvedTasks.map((task) => (
              <div key={task.id} className="shadow p-2 rounded bg-base-200">
                <h2 className="font-semibold text-sm">{task.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default IssuesManagement;
