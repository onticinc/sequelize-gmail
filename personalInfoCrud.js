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
        console.log('Error creating subscription', error)
    })

PersonalInfo.create({
    name: 'Steven Stevenson',
    birthday: '2-1-1981',
    gender: 'male',
    email: 'cool_email_2@email.com',
    phone: '877-5310'
})
    .then(function (newPersonalInfo) {
        console.log(newPersonalInfo.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating subscription', error)
    })

PersonalInfo.create({
    name: 'Sarah Stevenson',
    birthday: '4-1-1990',
    gender: 'female',
    email: 'cool_email_3@email.com',
    phone: '877-5311'
})
    .then(function (newPersonalInfo) {
        console.log(newPersonalInfo.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating subscription', error)
    })

PersonalInfo.create({
    name: 'Sariah Stevenson',
    birthday: '5-1-1985',
    gender: 'male',
    email: 'cool_email_4@email.com',
    phone: '877-5312'
})
    .then(function (newPersonalInfo) {
        console.log(newPersonalInfo.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating subscription', error)
    })

PersonalInfo.create({
    name: 'Mariah Stevenson',
    birthday: '4-14-1984',
    gender: 'female',
    email: 'cool_email_5@email.com',
    phone: '877-5313'
})
    .then(function (newPersonalInfo) {
        console.log(newPersonalInfo.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating subscription', error)
    })

PersonalInfo.create({
    name: 'Mike Stevenson',
    birthday: '2-1-1975',
    gender: 'male',
    email: 'cool_email_6@email.com',
    phone: '877-5314'
})
    .then(function (newPersonalInfo) {
        console.log(newPersonalInfo.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating subscription', error)
    })


PersonalInfo.create({
    name: 'Gary Stevenson',
    birthday: '2-6-1986',
    gender: 'male',
    email: 'cool_email_7@email.com',
    phone: '877-5315'
})
    .then(function (newPersonalInfo) {
        console.log(newPersonalInfo.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating subscription', error)
    })

PersonalInfo.create({
    name: 'George Stevenson',
    birthday: '2-18-1988',
    gender: 'male',
    email: 'cool_email_8@email.com',
    phone: '877-5316'
})
    .then(function (newPersonalInfo) {
        console.log(newPersonalInfo.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating subscription', error)
    })

PersonalInfo.create({
    name: 'Zach Stevenson',
    birthday: '12-16-1989',
    gender: 'male',
    email: 'cool_email_9@email.com',
    phone: '877-5317'
})
    .then(function (newPersonalInfo) {
        console.log(newPersonalInfo.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating subscription', error)
    })

PersonalInfo.create({
    name: 'Jimmy Stevenson',
    birthday: '4-21-1996',
    gender: 'male',
    email: 'cool_email_10@email.com',
    phone: '877-5318'
})
    .then(function (newPersonalInfo) {
        console.log(newPersonalInfo.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating subscription', error)
    })
// ******** Update Subscription

PersonalInfo.update({
    name: 'Eric Stevenson',
    birthday: '1-1-1985',
    gender: 'male',
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


