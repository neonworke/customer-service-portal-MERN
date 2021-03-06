import React from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";

function Tickets() {

    const homenavigate = useNavigate();
    function handleHomeRedirect() {
        deleteComplaint(ticketdata._id)
        homenavigate("/addticket");
    }

    const ticketlocation = useLocation();
    const ticketdata = ticketlocation.state;

    console.log("ticketdata", ticketdata);

    async function deleteComplaint(_id) {
        try {
            const response = await axios.delete("http://localhost:3000/complaintList/deletecomplaint", {
                data: {
                    _id: _id,
                },
              });
              console.log("response", response);
        } catch (e) {
            console.log("Some error occured while adding", e);
        }
    }

    return (
        <div className="h-full w-full">
            <div className="flex justify-between mx-24 mt-12">
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <span className="font-bold">Subject:</span>
                        <p className="ml-4">{ticketdata.subject}</p>
                    </div>
                    <div className="flex flex-row">
                        <span className="font-bold">Ticket Open:</span>
                        <p className="ml-4">{ticketdata.productName}</p>
                        </div>
                        <div className="flex flex-row">
                    <span className="font-bold">Status:</span>
                        <p className="ml-4">{ticketdata.complaint}</p>
                        </div>
                </div>
                <button onClick={() => handleHomeRedirect()} type="button" className="bg-gray-800 text-white h-12 w-72 p-1 text-2xl font-bold shadow-md rounded-md">Close Ticket</button>
            </div>
        </div>
    )
}

export default Tickets
