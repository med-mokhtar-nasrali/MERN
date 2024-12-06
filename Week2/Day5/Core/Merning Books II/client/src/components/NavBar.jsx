import React from "react";
import { Link } from "react-router";

const NavBar = ({ BookCatalog, title, addBook }) => {
	return (
		<div>
			<nav style={{ background: "#f8f9fa", padding: "10px" }}>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<div>
						<Link
							className="btn btn-dark"
							to={"/"}
							style={{
								marginRight: "15px",
								textDecoration: "none",
								color: "white",
							}}
						>
							Catalog
						</Link>
						<Link
							className="btn btn-success"
							to={"/books/create"}
							style={{ textDecoration: "none", color: "white" }}
						>
							Add Book
						</Link>
					</div>
					<div className="mr-2">
						<h1 style={{ margin: 0 }}>{BookCatalog}</h1>
						<h1 style={{ margin: 0 }}>{title}</h1>
						<h1 style={{ margin: 0 }}>{addBook}</h1>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
