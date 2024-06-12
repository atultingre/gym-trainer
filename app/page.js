"use client";
import GymClients from "./(routes)/clients/page";
import Dashboard from "./(routes)/dashboard/page";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <div>
      {/* <UploadForm /> */}
      <Dashboard />
      <GymClients />
      {/* <Reviews /> */}
      <ToastContainer />

    </div>
  );
}
