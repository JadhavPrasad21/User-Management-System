import React from "react";
import Header from "../components/Header";
import Counter from "../components/Counter";
import TextEditor from "../components/TextEditor";
import "./Style.css";
import Form from "../components/Form";
import UserData from "../components/UserData/index";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Header />
      <div className="dash-Container">
        <div className="box-1">
          <Form />
        </div>
        <div className="box-2">
          <Counter />
        </div>
        <div className="box-3">
          <UserData />
        </div>
        <div className="box-3">
          <TextEditor />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
