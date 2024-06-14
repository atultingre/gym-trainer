"use client";
import GymClients from "./(routes)/clients/page";
import Dashboard from "./(routes)/dashboard/page";
import Reviews from "./(routes)/reviews/page";

export default function Home() {
  return (
    <div>
      <Dashboard />
      <GymClients />
      <Reviews />
    </div>
  );
}
