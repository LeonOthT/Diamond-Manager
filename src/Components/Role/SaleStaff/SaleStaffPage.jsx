import React from "react";
import Welcome from "../Admin/Welcome";
import NavBar from "../Admin/NavBar";
import UserProfile from "../Admin/UserProfile";
import SaleFeatures from "./SaleFeatures";

export default function SaleStaffPage() {
  return (
    <div className="">
      <NavBar />
      <Welcome />
      <UserProfile role={"Delivery Staff"} />
      <SaleFeatures />
    </div>
  );
}
