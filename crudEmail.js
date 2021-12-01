const { application } = require('express');
const { Email, Subscription, PersonalInfo } = require('./models');

// ******** Create Subscription
Email.create({
    toEmail: 'cool_email_address_1@email.com',
    subject: 'Pickels',
    content: 'I hate pickels.',
})
    .then(function (newEmail) {
        console.log(newEmail.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating New Email', error)
    })

Email.create({
    toEmail: 'cool_email_address_2@email.com',
    subject: 'Hammers',
    content: 'Hammers are cool.',
})
    .then(function (newEmail) {
        console.log(newEmail.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating New Email', error)
    })

Email.create({
    toEmail: 'cool_email_address_3@email.com',
    subject: 'Sequelize is cool',
    content: 'Fun stuff.',
})
    .then(function (newEmail) {
        console.log(newEmail.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating New Email', error)
    })

Email.create({
    toEmail: 'cool_email_address_4@email.com',
    subject: 'Music',
    content: 'New music monday is required learning.',
})
    .then(function (newEmail) {
        console.log(newEmail.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating New Email', error)
    })


Email.create({
    toEmail: 'cool_email_address_5@email.com',
    subject: 'Breakfast',
    content: 'I had ramen for breakfast.',
})
    .then(function (newEmail) {
        console.log(newEmail.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating New Email', error)
    })

Email.create({
    toEmail: 'cool_email_address_6@email.com',
    subject: 'Lunch',
    content: 'I might have ramen for lunch too.',
})
    .then(function (newEmail) {
        console.log(newEmail.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating New Email', error)
    })

Email.create({
    toEmail: 'cool_email_address_7@email.com',
    subject: 'Dinner',
    content: 'Tacos for dinner is a must.',
})
    .then(function (newEmail) {
        console.log(newEmail.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating New Email', error)
    })

Email.create({
    toEmail: 'cool_email_address_8@email.com',
    subject: 'Almost done',
    content: 'Need to use faker for fake content.',
})
    .then(function (newEmail) {
        console.log(newEmail.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating New Email', error)
    })

Email.create({
    toEmail: 'cool_email_address_9@email.com',
    subject: 'School is cool',
    content: 'Dont be a fool, stay in school.',
})
    .then(function (newEmail) {
        console.log(newEmail.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating New Email', error)
    })

Email.create({
    toEmail: 'cool_email_address_10@email.com',
    subject: 'Yay',
    content: 'I have 10 emails now!',
})
    .then(function (newEmail) {
        console.log(newEmail.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating New Email', error)
    })



// ******** Update Email

Email.update({
    toEmail: 'cool_email_address_1@email.com',
    subject: 'Pickels are no bueno',
    content: 'I hate pickels.',
}, {
    where: { id: 1 }
})
    .then(function (arrayResponse) {
        console.log('NUMBER OF ROWS UPDATED');
        console.log(arrayResponse[0]); // datatype: 
    })
    .catch(function (err) {
        console.log("ERROR updating email", err);
    });


// ******** Destroy

Email.destroy({ where: { subject: 'Pickels are no bueno' } })
    .then(function (response) {
        console.log('RESPONSE FROM DATABASE AFTER DELETING DATA...');
        console.log(response);
    })
    .catch(function (err) {
        console.log("ERROR deleting email", err);
    });

