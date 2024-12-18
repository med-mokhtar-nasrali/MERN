import React from "react";
import { Link } from "react-router";
const NavBar = ({ BookCatalog, title, addBook,updateBook }) => {
	return (
		<div>
			<nav className="navv">
				<div className="bar">
					<div className="actions">
						<Link
							className="btn btn-dark"
							to={"/"}
						>
							Catalog
						</Link>
						<Link
							className="btn btn-dark"
							to={"/create"}
						>
							Add Book
						</Link>
					</div>
					<div className="mr-2">
						<h1 style={{ margin: 0 }}>{BookCatalog}</h1>
						<h1 style={{ margin: 0 }}>{title}</h1>
						<h1 style={{ margin: 0 }}>{addBook}</h1>
						<h1 style={{ margin: 0 }}>{updateBook}</h1>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;