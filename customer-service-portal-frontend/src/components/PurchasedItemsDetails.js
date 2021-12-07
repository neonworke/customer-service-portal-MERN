import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import FeedbackComp from './FeedbackComp';
import '../App.css';

function PurchasedItemsDetails() {

    const location = useLocation();
    const data = location.state;

    console.log("data", data);

    const productname = data.name;

    const [feedbackReceived, setFeedbackReceived] = useState([]);
    const [feedbackFormInput, updatefeedbackFormInput] = useState({
        feedback:""
    });

    useEffect(() => {
        getFeedback(productname);
    }, []);

    function handleChange(e) {
        const newdata = {...feedbackFormInput}
        newdata[e.target.id] = e.target.value;
        updatefeedbackFormInput(newdata);
    }

    async function getFeedback(productname) {
        try {
            const feedbackResponse = await axios.get("http://localhost:3000/feedbackList/getreviews?name="+productname)
            console.log("feedbackResponse", feedbackResponse.data.results);
            setFeedbackReceived([...feedbackResponse.data.results]);
        } catch(err) {
            console.log("err", err);
        }
    }

    async function addFeedback() {
        try {
            const response = await axios.post("http://localhost:3000/feedbackList/addreviews", {
                name: data.name,
                feedback: feedbackFormInput.feedback
            });
            console.log("response", response);
            getFeedback(productname);
            } catch (e) {
            console.log("Some error occured while listing", e);
        }
    }

    
    
    function onSubmit(event) {
        event.preventDefault();
        addFeedback();
        updatefeedbackFormInput({
            feedback: "",
        })
    }

    if (data) {
        return (
        
            <div className="h-full w-full flex flex-col">
                <div className="bg-blue-100 w-full h-auto py-8 flex justify-start">
                    <div className="flex flex-row ml-24">
                        <img src={data.image} alt="laptop" className="h-44 w-44 mx-8" />
                        <div className="flex flex-col justify-center text-left font-bold">
                            <div>{data.name}</div>
                            <div>Price: ${data.price}</div>
                            <div>Detail: {data.desc}</div>
                        </div>
                        <div className="ml-16 flex flex-col">
                            <span className="font-bold text-lg">Provide your feedback</span>
                            <form className="mt-2 flex flex-col" onSubmit={(event) => onSubmit(event)}>
                                <textarea rows="5" cols="40" id="feedback" className="feedback-input shadow-md rounded-md border border-black pt-2" placeholder="Give your feedback" type="text" value={feedbackFormInput.feedback} onChange={(e) => handleChange(e)}></textarea>
                                <button type="submit" className="h-auto w-auto shadow-md rounded-md text-white font-semibold bg-gray-800 mt-1 py-1">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start ml-24 mt-4">
                    <div className="flex flex-col text-left">
                        <span className="font-bold text-lg">Reviews:</span>
                        <FeedbackComp feedbackReceived={feedbackReceived} setFeedbackReceived={setFeedbackReceived} />
                    </div>
                </div>
            </div>
        )
    }
}



export default PurchasedItemsDetails
