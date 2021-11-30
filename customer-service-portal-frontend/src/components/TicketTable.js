import React from 'react'
import { useNavigate } from 'react-router-dom';

const TicketTable = ({ tickets }) => {
 
    const navigate = useNavigate();

    function handleIssueRedirect(tickets) {
        navigate("/ticket", {state: tickets})
    }
    
    if(!tickets.length)
    return (
        <div>
            <table class="table-fixed border-separate border border-black mt-12">
                <thead>
                    <tr>
                        <th className="w-96 h-auto border border-black">Serial No.</th>
                        <th className="w-96 h-auto border border-black">Subject</th>
                        <th className="w-96 h-auto border border-black">Status</th>
                        <th className="w-96 h-auto border border-black">Opened Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td onClick={() => handleIssueRedirect(tickets)}>
                            SSL Issue
                        </td>
                        <td>Pending Response</td>
                        <td>2020-10-21</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>SSL Issue</td>
                        <td>Pending Response</td>
                        <td>2020-10-21</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>SSL Issue</td>
                        <td>Pending Response</td>
                        <td>2020-10-21</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TicketTable
