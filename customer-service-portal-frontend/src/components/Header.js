/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function Header() {

  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  
  return (
    <div className="bg-gray-800 w-full h-16">
      <div className="mx-8 flex flex-row text-white justify-between items-center py-4">
        <div className="text-2xl font-bold">Customer Service Portal</div>
      <div className="flex flex-row mr-32">
        <Link to="/dashboard"><span className="pr-4">Dashboard</span></Link>
        <Link to="/addticket"><span className="pr-4">Add New Ticket</span></Link>
        <button onClick={() => handleClick()} className="pr-4">Logout</button>
        </div>
        </div>
    </div>
  )
}
