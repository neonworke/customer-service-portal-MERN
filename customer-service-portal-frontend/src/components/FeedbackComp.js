import React from 'react'

function FeedbackComp({ feedbackReceived, setFeedbackReceived }) {
    return feedbackReceived.map((feedbackItem) => {
        return (
            <div className="flex flex-col bg-blue-100 w-96 h-auto shadow-md rounded-md mt-2" key={feedbackItem._id}>
                <p className="font-semibold ml-4">{ feedbackItem.feedback}</p>
            </div>
        )
    })
}

export default FeedbackComp
