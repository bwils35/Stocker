import React from "react";
import LoginForm from "./LoginForm";

const Logout = (props) => {
    const { onSetShowLoginHandler, onSetShowTradesHandler } = props;

    // Create logout logic
    const onLogout = () => {
        onSetShowLoginHandler(true);
        onSetShowTradesHandler(false);
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
