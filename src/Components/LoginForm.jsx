import React, { useState } from "react";

function LoginForm({ error, onSetShowLoginHandler, onSetShowTradesHandler }) {
    const [detail, setDetails] = useState({
        name: "",
        email: "",
        password: "",
    });

    const submithandler = (e) => {
        e.preventDefault();
        Login(detail);

        onSetShowLoginHandler(false);
        onSetShowTradesHandler(true);
    };

    const adminUser = {
        email: "admin@admin.com",
        password: "admin1234",
    };

    const Login = (detail) => {
        console.log(detail);

        if (
            detail.email == adminUser.email &&
            detail.password == adminUser.password
        ) {
            console.log("Logged In");
        } else {
            console.log("failed to login");
            alert("INCORRECT LOGIN DETAILS");
        }
    };

    // create a method to show/hide the login form

    return (
        <form className="row" onSubmit={submithandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {error != "" ? <div className="error">{error}</div> : ""}
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={(e) =>
                            setDetails({ ...detail, name: e.target.value })
                        }
                        value={detail.name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) =>
                            setDetails({ ...detail, email: e.target.value })
                        }
                        value={detail.email}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">password: </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) =>
                            setDetails({ ...detail, password: e.target.value })
                        }
                        value={detail.password}
                    />
                </div>
                <input type="submit" value="LOGIN"></input>
            </div>
        </form>
    );
}

export default LoginForm;
