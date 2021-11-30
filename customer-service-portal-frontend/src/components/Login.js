import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import "../App.css";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "email":
                setEmail(value);
                break;
            
            case "password":
                setPassword(value);
                break;

            default:
                break; 
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            return alert("Fill up the form!");
        }
    };

    function renderLogin() {
        return (
            <div>
                <form className="h-72 w-80 shadow-md bg-gray-200 rounded-md mr-56" autoComplete="off" onSubmit={handleSubmit}>
                    <div className="bg-white w-full h-24 text-left">
                        <div className="ml-4 pt-6">
                    <span className="text-gray-600 font-bold text-xl">Login</span>
                    <p className="text-gray-600">Get access to your orders</p>
                    </div>
                    </div>
                    <div className="mt-4">
                    <div className="input-container text-left w-full flex flex-col justify-center items-center">
                        <input className="input-col" type="email" name="email" value={email} placeholder="Enter your email address" onChange={handleOnChange} required></input>
                        <input className="input-col" type="password" name="password" value={password} placeholder="Enter your password" onChange={handleOnChange} required></input>
                    </div>
                    <button type="submit" className="mt-4 w-16 h-8 bg-green-400 shadow-md rounded-md text-white font-bold">Login</button>
                    </div>
                    </form>
            </div>
        )
    }
    return (
        <div>
            <div className="login-container">
                <div className="bg-gray-400 bg-opacity-25 h-44 flex justify-start items-center">
                    <div className="flex flex-col ml-36 text-left">
                        <span className="text-gray-800 font-semibold text-4xl">Customer Service Portal</span>
                        <p className="mt-4 text-gray-600">Your one point contact for issues related to the purchased products</p>
                    </div>
                </div>
                <div className="flex justify-end items-center mt-8">
                    {renderLogin()}
                </div>
            </div>
        </div>
    )
}

// Login.propTypes = {
//     handleOnChange: PropTypes.func.isRequired,
//     handleSubmit: PropTypes.func.isRequired,
//     email: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired,
// };

export default Login
