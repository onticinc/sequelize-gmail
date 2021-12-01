const { application } = require('express');
const { Email, Subscription, PersonalInfo } = require('./models');

// ******** Create Subscription
PersonalInfo.create({
    name: 'Eric Stevenson',
    birthday: '1-1-1980',
    gender: 'male',
    email: 'cool_email_1@email.com',
    phone: '877-5309'
})
    .then(function (newPersonalInfo) {
        console.log(newPersonalInfo.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating info', error)
    })

PersonalInfo.create({
    name: 'Erica Stevenson',
    birthday: '12-11-1980',
    gender: 'female',
    email: 'cool_email_2@email.com',
    phone: '877-5313'
})
    .then(function (newPersonalInfo) {
        console.log(newPersonalInfo.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating info', error)
    })

PersonalInfo.create({
    name: 'Steven Stevenson',
    birthday: '2-2-1980',
    gender: 'male',
    email: 'cool_email_3@email.com',
    phone: '877-5310'
})
    .then(function (newPersonalInfo) {
        console.log(newPersonalInfo.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating info', error)
    })

PersonalInfo.create({
    name: 'Sarah Stevenson',
    birthday: '3-13-1983',
    gender: 'female',
    email: 'cool_email_3@email.com',
    phone: '877-5312'
})
    .then(function (newPersonalInfo) {
        console.log(newPersonalInfo.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating info', error)
    })

PersonalInfo.create({
    name: 'Mary Stevenson',
    birthday: '12-12-1982',
    gender: 'male',
    email: 'cool_email_5@email.com',
    phone: '877-5312'
})
    .then(function (newPersonalInfo) {
        console.log(newPersonalInfo.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating info', error)
    })
PersonalInfo.create({
    name: 'Tory Stevenson',
    birthday: '10-2-1985',
    gender: 'female',
    email: 'cool_email_6@email.com',
    phone: '877-5315'
})
    .then(function (newPersonalInfo) {
        console.log(newPersonalInfo.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating info', error)
    })
PersonalInfo.create({
    name: 'Tyler Stevenson',
    birthday: '8-10-1980',
    gender: 'male',
    email: 'cool_email_16@email.com',
    phone: '877-5320'
})
    .then(function (newPersonalInfo) {
        console.log(newPersonalInfo.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating info', error)
    })
PersonalInfo.create({
    name: 'Frank Stevenson',
    birthday: '10-15-1990',
    gender: 'male',
    email: 'cool_email_18@email.com',
    phone: '877-5320'
})
    .then(function (newPersonalInfo) {
        console.log(newPersonalInfo.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating info', error)
    })
// ******** Update Info

PersonalInfo.update({
    name: 'Erica Stevenson',
    birthday: '1-1-1985',
    gender: 'female',
    email: 'cool_email_1@email.com',
    phone: '877-5309'
}, {
    where: { id: 1 }
})
    .then(function (arrayResponse) {
        console.log('NUMBER OF ROWS UPDATED');
        console.log(arrayResponse[0]);
    })
    .catch(function (err) {
        console.log("ERROR adding New Personal Info", err);
    });


// ******** Destroy

PersonalInfo.destroy({ where: { name: 'Eric Stevenson' } })
    .then(function (response) {
        console.log('RESPONSE FROM DATABASE AFTER DELETING DATA...');
        console.log(response);
    })
    .catch(function (err) {
        console.log("ERROR deleting Name", err);
    });


