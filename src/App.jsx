import "./App.css";
// connecting components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import IssuesManagement from "./components/IssuesManagement";

import Container from "./components/Container";
import { Suspense } from "react";

const fetchCustomers = async () => {
  const resp = await fetch("/CustomerInfo.json");
  return resp.json();
};

function App() {
  const customerPromise = fetchCustomers();
  return (
    <>
      <NavBar></NavBar>

      <Suspense
        fallback={<span className="loading loading-spinner loading-lg"></span>}
        npm
      >
        <IssuesManagement customerPromise={customerPromise}></IssuesManagement>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
