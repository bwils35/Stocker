import LoginForm from "./LoginForm";

const Logout = () => {

    return (
        <>
            <div className="row">
                <div className="col-6" />
                <div className="col-6 mt-3">
                    <button
                        type="submit"
                        className="btn btn-danger btn-outline-dark btn-md"
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
