import express from "express";
import { v4 as uuidv4 } from 'uuid'
import { faker } from '@faker-js/faker';
const app = express();

const createUser = ()=>{
    return{
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.firstName(),
        firstName: faker.person.lastName(),
        _id: uuidv4()
    }
}

const createCompany = ()=>{
    return {
        _id: uuidv4(),
        name: faker.company.name(),
        address:{
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    }
}


app.get('/api/user/new', (req,res)=>{
    res.json(createUser())
})

app.get('/api/companies/new', (req,res)=>{
    res.json(createCompany())
})

app.get('/api/user/company', (req,res)=>{
    const users = createUser()
    const companies = createCompany()
    res.json({users,companies})
})




app.listen( 8000, () => console.log(`Server is ON port: ${8000}`) );