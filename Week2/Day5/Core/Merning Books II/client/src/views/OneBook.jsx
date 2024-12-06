import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { Link, useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const OneBook = () => {
	const navigate = useNavigate();
	const [oneBookDetails, setOneBookDetails] = useState({});
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/books/${id}/details`)
			.then((res) => {
				console.log(res.data);
				setOneBookDetails(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [id]);

	const deleteBook = () => {
		axios
			.delete(`http://localhost:8000/api/books/${id}/details`)
			.then((res) => {
				console.log(res.data);
				navigate("/");
			});
	};

	return (
		<div>
			<NavBar title={oneBookDetails.title} />
			<div className="container mt-5">
				<div className="card shadow-lg" style={{ borderRadius: "15px" }}>
					<div className="card-body">
						<h2 className="card-title text-center text-primary mb-4">
							{oneBookDetails.title}
						</h2>
						<p className="card-text text-center fw-bold">
							By <span className="text-secondary">{oneBookDetails.author}</span>
						</p>
						<p className="card-text text-center">
							<strong>Pages:</strong> {oneBookDetails.pages}
						</p>
						<p
							className={`card-text text-center fw-bold ${
								oneBookDetails.isAvailable ? "text-success" : "text-danger"
							}`}
						>
							Status:{" "}
							{oneBookDetails.isAvailable
								? "Available for Borrowing"
								: "The Book is Already Taken"}
						</p>
						{oneBookDetails.isAvailable && (
							<div className="d-flex justify-content-center mt-4">
								<button
									className="btn btn-primary"
									onClick={deleteBook}
									style={{ borderRadius: "10px" }}
								>
									Borrow Book
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default OneBook;
