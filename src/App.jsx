import "./App.css";
// connecting components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import IssuesManagement from "./components/IssuesManagement";
import Container from "./components/Container";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

const fetchCustomers = async () => {
  const resp = await fetch("/CustomerInfo.json");
  return resp.json();
};

function App() {
  const customerPromise = fetchCustomers();
  return (
    <>
      <section className="bg-base-200">
        <NavBar></NavBar>

        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <IssuesManagement
            customerPromise={customerPromise}
          ></IssuesManagement>
        </Suspense>

        <Footer></Footer>

        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </section>
    </>
  );
}

export default App;
