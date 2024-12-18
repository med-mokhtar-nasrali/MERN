import { useState } from "react";
import Form from "./components/Form";
import { createContext } from "react";

const MyContext = createContext();
function App() {
	const [userName, setUserName] = useState("User");

	return (
		<>
			<div></div>
		</>
	);
}

export default App;
