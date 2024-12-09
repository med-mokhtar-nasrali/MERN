import { useState } from "react";
import "./App.css";
import AllBooks from "./views/allBooks";
import { Route, Routes, Link } from "react-router-dom";
import OneBook from "./views/OneBook";
import Form from "./views/Form";
import Update from "./views/Update";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<AllBooks />} />
				<Route path="/books/:id/details" element={<OneBook />} />
				<Route path="/books/create" element={<Form />} />
				<Route path="/update/:id" element={<Update />} />
			</Routes>
		</>
	);
}

export default App;
