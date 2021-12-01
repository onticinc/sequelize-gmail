const { application } = require('express');
const { Subscription } = require('./models');

// ******** Create Subscription
Subscription.create({
    title: 'cloud storage',
    cost: '5',
    subDate: '10-22-19',
})
    .then(function (newSubscription) {
        console.log(newSubscription.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating subscription', error)
    })


Subscription.create({
    title: 'photo sync',
    cost: '6',
    subDate: '10-2-20',
})
    .then(function (newSubscription) {
        console.log(newSubscription.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating subscription', error)
    })

Subscription.create({
    title: 'hbo',
    cost: '7',
    subDate: '1-20-15',
})
    .then(function (newSubscription) {
        console.log(newSubscription.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating subscription', error)
    })

Subscription.create({
    title: 'showmax',
    cost: '8',
    subDate: '11-2-20',
})
    .then(function (newSubscription) {
        console.log(newSubscription.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating subscription', error)
    })

Subscription.create({
    title: 'Super Cool Subscription',
    cost: '9',
    subDate: '1-2-20',
})
    .then(function (newSubscription) {
        console.log(newSubscription.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating subscription', error)
    })

Subscription.create({
    title: 'cool app 1',
    cost: '10',
    subDate: '11-1-20',
})
    .then(function (newSubscription) {
        console.log(newSubscription.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating subscription', error)
    })

Subscription.create({
    title: 'cool app 2',
    cost: '11',
    subDate: '10-1-21',
})
    .then(function (newSubscription) {
        console.log(newSubscription.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating subscription', error)
    })

Subscription.create({
    title: 'super cool app 2',
    cost: '12',
    subDate: '8-2-20',
})
    .then(function (newSubscription) {
        console.log(newSubscription.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating subscription', error)
    })

Subscription.create({
    title: 'cool app 4',
    cost: '13',
    subDate: '1-2-20',
})
    .then(function (newSubscription) {
        console.log(newSubscription.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating subscription', error)
    })

Subscription.create({
    title: 'cool app 5',
    cost: '14',
    subDate: '3-2-18',
})
    .then(function (newSubscription) {
        console.log(newSubscription.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating subscription', error)
    })

// ******** Update Subscription

// Subscription.update({
//     title: 'cloud extreme storage',
//     cost: '15',
//     subDate: '10-22-19',
// }, {
//     where: { id: 1 }
// })
//     .then(function (arrayResponse) {
//         console.log('NUMBER OF ROWS UPDATED');
//         console.log(arrayResponse[0]); // datatype: 
//     })
//     .catch(function (err) {
//         console.log("ERROR with adding new team", err);
//     });


// ******** Destroy

// Subscription.destroy({ where: { title: 'cool app 4' } })
//     .then(function (response) {
//         console.log('RESPONSE FROM DATABASE AFTER DELETING DATA...');
//         console.log(response);
//     })
//     .catch(function (err) {
//         console.log("ERROR deleting subscription", err);
//     });

