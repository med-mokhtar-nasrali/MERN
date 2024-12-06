import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		title: "",
		author: "",
		pages: "",
		isAvailable: false,
	});

	const submitHandler = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:8000/api/books", formData)
			.then((res) => {
				console.log("Book added:", res.data);
				setFormData((prevBooks) => [...prevBooks, res.data]);
				navigate("/");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	return (
		<>
			<NavBar addBook="Add Book" />
			<div>
				<div className="container vh-100 d-flex justify-content-center align-items-center">
					<div
						className="card shadow-lg p-4"
						style={{ width: "28rem", borderRadius: "15px" }}
					>
						<h3 className="text-center mb-4 text-primary">📚 Add a New Book</h3>
						<form onSubmit={submitHandler}>
							<div className="mb-3">
								<label className="form-label fw-bold">Title</label>
								<input
									className="form-control"
									name="title"
									value={formData.title}
									onChange={handleChange}
									type="text"
									placeholder="Enter book title"
								/>
							</div>
							<div className="mb-3">
								<label className="form-label fw-bold">Author Name</label>
								<input
									className="form-control"
									name="author"
									value={formData.author}
									onChange={handleChange}
									type="text"
									placeholder="Enter author's name"
								/>
							</div>
							<div className="mb-3">
								<label className="form-label fw-bold">Page Count</label>
								<input
									className="form-control"
									name="pages"
									value={formData.pages}
									onChange={handleChange}
									type="number"
									placeholder="Number of pages"
								/>
							</div>
							<div className="form-check mb-3">
								<input
									className="form-check-input"
									name="isAvailable"
									checked={formData.isAvailable}
									onChange={handleChange}
									type="checkbox"
									id="isAvailableCheck"
								/>
								<label className="form-check-label" htmlFor="isAvailableCheck">
									Is it available?
								</label>
							</div>
							<button type="submit" className="btn btn-primary w-100">
								➕ Add Book
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Form;
