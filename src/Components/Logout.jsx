import React from "react";
import LoginForm from "./LoginForm";

const Logout = (props) => {
    const { onSetShowLoginHandler, onSetShowTradesHandler } =
        props;
    // const onLogoutHandler = () => {
    //     console.log("Logged out!");
    //     e.alert("You have been successfully logged out.");
    // onSetShowLoginHandler(true);
    // onSetShowTradesHandler(false);
    // };

    const onLogout = () => {
        onSetShowLoginHandler(true);
        onSetShowTradesHandler(false);
        // Create logout logic
    };

    return (
        <>
            <div className="row">
                <div className="col-6" />
                <div className="col-6 mt-3">
                    <button
                        type="submit"
                        className="btn btn-danger btn-outline-dark btn-md"
                        onClick={onLogout}
                    >
                        Logout
                    </button>
                    <div className="col-6" />
                </div>
            </div>
        </>
    );
};

export default Logout;
