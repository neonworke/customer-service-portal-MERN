import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TicketTable = () => {

    const [complaintticket, setComplaintTicket] = useState([]);

    const ticketnavigate = useNavigate();

    function handleTicketRedirect(row) {
        ticketnavigate("/tickets", {state: row})
    }

    useEffect(() => {
        async function getTickets() {
            try {
                const response = await axios.get("http://localhost:3000/complaintList/getcomplaint")
                console.log("response", response);
                setComplaintTicket([...response.data.results]);
            } catch (err) {
                console.log("error occurred", err);
            }
        }
        getTickets();
    }, []);

        return (
            <div>
                <table className="table-fixed border-separate border border-black mt-12">
                    <thead>
                        <tr>
                            <th className="w-96 h-auto border border-black">Serial No.</th>
                            <th className="w-96 h-auto border border-black">Subject</th>
                            <th className="w-96 h-auto border border-black">Product Name</th>
                            <th className="w-96 h-auto border border-black">Complaint</th>
                        </tr>
                    </thead>
                    <tbody>
                        {complaintticket.length ? complaintticket.map((row) => (
                            <tr key={row._id}>
                                <td>{row._id}</td>
                                <td onClick={() => handleTicketRedirect(row)} key={row._id}>
                                {row.subject}
                                </td>
                                <td>{row.productName}</td>
                                <td>{row.complaint}</td>
                            </tr>
                        )) : <tr>
                            <td>No ticket show</td>
                        </tr>
                        }
                    </tbody>
                </table>
            </div>
        )
}

export default TicketTable
