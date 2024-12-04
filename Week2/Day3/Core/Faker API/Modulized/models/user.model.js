const createUser = () => {
	return {
		password: faker.internet.password(),
		email: faker.internet.email(),
		phoneNumber: faker.phone.number(),
		lastName: faker.person.firstName(),
		firstName: faker.person.lastName(),
		_id: uuidv4(),
	};
};

const createCompany = () => {
	return {
		_id: uuidv4(),
		name: faker.company.name(),
		address: {
			street: faker.location.streetAddress(),
			city: faker.location.city(),
			state: faker.location.state(),
			zipCode: faker.location.zipCode(),
			country: faker.location.country(),
		},
	};
};
export default { createUser, createCompany };
