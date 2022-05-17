import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import React from "react";
import MainView from "./Views/MainView";
import FormSignUp from "./Components/FormSignup";

function App() {
	return (
		<div
			className="viewport"
			content="width=device-width"
			initial-scale="1"
		>
			<div className="row">
				<div className="col-md-3" />
				<div className="col-md-6">
					<div className="App">
						<div mx-5 className="App">
							<MainView />
							<FormSignUp />
						</div>
					</div>
				</div>
				<div className="col-md-3" />
			</div>
		</div>
	);
}

export default App;
