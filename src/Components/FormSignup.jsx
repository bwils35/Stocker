import React from "react";
import Localbase from "localbase";

//Currently not using - to be added when login can denied entry and localDB can save users
const FormSignup = () => {
    let db = new Localbase("db");

    function additem() {
        db.collection("item").add({
            amount: 0.1772,
            amount_str: "0.17720000",
            buy_order_id: 1488763654836226,
            id: 231960191,
            microtimestamp: "1652302663826000",
            price: 28235.21,
            price_str: "28235.21",
            sell_order_id: 1488763654565888,
            timestamp: "1652302663",
            type: 0,
        });
    }

    function adduser() {
        db.collection("user").add({
            name: "dalton",
            email: "test",
            password: "this",
        });
    }
    function updateUser() {
        db.collection("user").doc({ name: "dalton" }).update({
            email: "dalton@email.com",
        });
    }

    function deleteUser() {
        db.collection("user").doc({ name: "dick" }).delete({
            name: "dick",
        });
    }

    return (
        <div className="form-content-right">
            <h1>Create a new Stock Account!</h1>
            <div className="form-group">
                <button className="btn btn-primary" id="add" onClick={additem}>
                    Add Item
                </button>
                <button id="user" className="btn btn-warning" onClick={adduser}>
                    Add user
                </button>
                <button
                    id="updatesUser"
                    className="btn btn-success"
                    onClick={updateUser}
                >
                    Update user
                </button>
                <button
                    id="deletesUser"
                    className="btn btn-danger"
                    onClick={deleteUser}
                >
                    Delete user
                </button>
                <label htmlFor="username" className="form-group">
                    Username
                    <input
                        type="text"
                        name="username"
                        className="form-input"
                        placeholder="Enter your username..."
                    ></input>
                </label>
                <label htmlFor="email" className="form-group">
                    Email
                    <input
                        type="text"
                        email="email"
                        className="form-input"
                        placeholder="Enter your email"
                    ></input>
                </label>
                <label htmlFor="password" className="form-group">
                    Password
                    <input
                        type="text"
                        password="password"
                        className="form-input"
                        placeholder="Enter your password"
                    ></input>
                </label>
                <label htmlFor="passwordConfirm" className="form-group">
                    Confirm Password
                    <input
                        type="text"
                        passwordConfirm="passwordConfirm"
                        className="form-input"
                        placeholder="Please confirm your password"
                    ></input>
                </label>
            </div>
        </div>
    );
};

export default FormSignup;
export { FormSignup };
