import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router";

const allBooks = () => {
	const [books, setBooks] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/books")
			.then((res) => {
				console.log(res.data);
				setBooks(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<div>
			<NavBar BookCatalog="Book Catalog" />
			<div className="container-fluid d-flex justify-content-center align-items-center">
				<div className=" w-100">
					<table className="table table-striped table-hover align-middle shadow-lg w-100">
						<thead className="table-primary">
							<tr>
								<th>Title</th>
								<th>Author</th>
								<th>Page Count</th>
								<th>Available</th>
								<th>Book Page</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{books.map((book) => (
								<tr key={book._id}>
									<td>{book.title}</td>
									<td>{book.author}</td>
									<td>{book.pages}</td>
									<td>{book.isAvailable ? "✔️" : "❌"}</td>
									<td>
										<Link
											to={`/books/${book._id}/details`}
											className="btn btn-sm btn-outline-primary"
										>
											View Details
										</Link>
									</td>
									<td>
										<button
											className="btn btn-success"
											onClick={() => navigate(`/update/${book._id}`)}
										>
											Edit
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default allBooks;
