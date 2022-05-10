import React from "react";

//Currently not using - to be added when login can denied entry and localDB can save users
const FormSignup = () => {
    return (
        <div className="form-content-right">
            <form className="form">
                <h1>Create a new Stock Account!</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        Username
                        <input
                            type="text"
                            name="username"
                            className="form-input"
                            placeholder="Enter your username..."
                        ></input>
                    </label>
                    <label htmlFor="email" className="form-label">
                        Email
                        <input
                            type="text"
                            email="email"
                            className="form-input"
                            placeholder="Enter your email"
                        ></input>
                    </label>
                    <label htmlFor="password" className="form-label">
                        Password
                        <input
                            type="text"
                            password="password"
                            className="form-input"
                            placeholder="Enter your password"
                        ></input>
                    </label>
                    <label htmlFor="passwordConfirm" className="form-label">
                        Confirm Password
                        <input
                            type="text"
                            passwordConfirm="passwordConfirm"
                            className="form-input"
                            placeholder="Please confirm your password"
                        ></input>
                    </label>
                </div>
            </form>
        </div>
    );
};

export default FormSignup;
