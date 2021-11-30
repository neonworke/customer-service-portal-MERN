import React from 'react'
import "../App.css";

const TicketForm = () => {
    return (
        <div className="h-full w-full flex justify-center items-center">
            <div className="border border-black w-1/2 h-96 my-8 shadow-lg rounded-lg flex flex flex-col">
                <div className="text-blue-700 font-bold text-2xl mt-2">Add New Ticket</div>
                <div>
                <form className="h-full w-full shadow-md bg-gray-200 rounded-md mr-56" autoComplete="off">
                    <div className="mt-4 flex flex-col flex justify-center items-center">
                    <div className="input-container text-left w-full flex flex-col justify-center items-center">
                        <input className="input-form" type="text" name="subject" placeholder="Enter Subject" required></input>
                        <input className="input-form" type="date" name="date" ></input>
                    </div>
                    <textarea rows="6" className="textarea-form w-80 mt-4" placeholder="Write a complaint"></textarea>        
                    <button type="submit" className="mt-4 w-auto h-auto p-2 bg-green-400 shadow-md rounded-md text-white font-bold">Submit</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TicketForm
