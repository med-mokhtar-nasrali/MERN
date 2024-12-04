import createUser from "../models/user.model.js";
import createCompany from "../models/user.model.js";

const userController = {
	createUser: (req, res) => {
		res.json(createUser());
	},
	createComapny: (req, res) => {
		res.json(createCompany());
	},
	showBoth: (req, res) => {
		const users = createUser();
		const companies = createCompany();
		res.json({ users, companies });
	},
};

export default userController;
