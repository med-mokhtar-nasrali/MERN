import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import axios from "axios";

const Update = () => {
	const [formData, setFormData] = useState({
		title: "",
		author: "",
		pages: 0,
		isAvailable: false,
	});
	const { id } = useParams();
	const navigate = useNavigate();
	const [ErrorHandler, setErrorHandler] = useState({});

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/books/${id}/details`)
			.then((res) => {
				console.log(res.data);
				setFormData({
					title: res.data.title,
					author: res.data.author,
					pages: res.data.pages,
					isAvailable: res.data.isAvailable,
				});
				console.log(formData);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	const submitHandler = (e) => {
		e.preventDefault();
		axios
			.put(`http://localhost:8000/api/books/${id}/details`, formData)
			.then((res) => {
				console.log("Book updated:", res.data);
				navigate("/");
			})
			.catch((err) => {
				console.error(err.response.data.errors);
				setErrorHandler(err.response.data.errors);
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
		<div>
			<NavBar update={formData.title} />
			<div>
				<div className="container vh-100 d-flex justify-content-center align-items-center">
					<div
						className="card shadow-lg p-4"
						style={{ width: "28rem", borderRadius: "15px" }}
					>
						<h3 className="text-center mb-4 text-primary">📚 Update Book</h3>
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
								{ErrorHandler.title ? (
									<p className="mt-2 alert alert-danger">
										{ErrorHandler.title.message}
									</p>
								) : (
									<></>
								)}
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
								{ErrorHandler.author && (
									<p className="mt-2 alert alert-danger">
										{ErrorHandler.author.message}
									</p>
								)}
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
								{ErrorHandler.pages && (
									<p className="mt-2 alert alert-danger">
										{ErrorHandler.pages.message}
									</p>
								)}
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
								➕ Update Book
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Update;
