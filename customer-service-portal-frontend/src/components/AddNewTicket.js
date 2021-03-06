import React, { useState, useEffect} from 'react'
import TicketTable from './TicketTable';
import tickets from "./DummyTickets.json";
import { useNavigate } from "react-router-dom";

function AddNewTicket() {

    const navigate = useNavigate();
    function handleFormClick() {
      navigate("/ticketform");
    }

    const [str, setStr] = useState("");
    const [dispTicket, setDispTicket] = useState(tickets);

    useEffect(() => {}, [str, dispTicket]);

    const handleOnChange = (e) => {
        const { value } = e.target;
        setStr(value);
        searchTicket(value);
    };

    const searchTicket = sttr => {
        const displayTicket = tickets.filter(row => row.subject.toLowerCase().includes(sttr.toLowerCase()));
        setDispTicket(displayTicket)
    }
    return (
        <div>
            <div className="flex flex-col h-full w-full">
            <div className="flex flex-row justify-between mx-10 mt-8">
                <button onClick={() => handleFormClick()} className="h-auto w-52 text-xl p-3 bg-blue-800 text-white font-bold shadow-md rounded-md">Add New Ticket</button>
            </div>
            <TicketTable tickets={dispTicket}/>    
            </div>
        </div>
    )
}

export default AddNewTicket
