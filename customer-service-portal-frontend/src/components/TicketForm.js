import React, { useState } from 'react'
import axios from "axios";
import "../App.css";

const TicketForm = () => {

    const [ticketFormInput, updateTicketFormInput] = useState({
        subject: "",
        productName: "",
        complaint: ""
    });

    function handleChange(e) {
        const newdata = {...ticketFormInput}
        newdata[e.target.id] = e.target.value;
        updateTicketFormInput(newdata);
    }

    async function addComplaint() {
        try {
            const response = await axios.post("http://localhost:3000/complaintList/addcomplaint", {
                subject: ticketFormInput.subject,
                productName: ticketFormInput.productName,
                complaint: ticketFormInput.complaint
            });
            console.log("response", response);
        } catch (e) {
            console.log("Some error occured while listing", e);
        }
    }
    
    function onSubmit(event) {
        event.preventDefault();
        addComplaint();
        updateTicketFormInput({
            subject: "",
            productName: "",
            complaint: ""
        })
    }
    return (
        <div className="h-full w-full flex justify-center items-center">
            <div className="border border-black w-1/2 h-96 my-8 shadow-lg rounded-lg flex flex flex-col">
                <div className="text-blue-700 font-bold text-2xl mt-2">Add New Ticket</div>
                <div>
                <form className="h-full w-full shadow-md bg-gray-200 rounded-md mr-56" autoComplete="off" onSubmit={(event)=> onSubmit(event)}>
                    <div className="mt-4 flex flex-col flex justify-center items-center">
                    <div className="input-container text-left w-full flex flex-col justify-center items-center">
                        <input className="input-form" type="text" id="subject" placeholder="Enter Subject"  value={ticketFormInput.subject} onChange={(e) =>handleChange(e)} required></input>
                        <input className="input-form" type="text" id="productName" placeholder="Enter Product Name" value={ticketFormInput.productName} onChange={(e) =>handleChange(e)} required></input>
                    </div>
                    <textarea rows="6" className="textarea-form w-80 mt-4" id="complaint" placeholder="Write a complaint" value={ticketFormInput.complaint} onChange={(e) =>handleChange(e)}></textarea>        
                    <button type="submit" className="mt-4 w-auto h-auto p-2 bg-green-400 shadow-md rounded-md text-white font-bold">Submit</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TicketForm
