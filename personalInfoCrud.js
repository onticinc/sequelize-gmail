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


