const { application } = require('express');
const { Email, Subscription, PersonalInfo } = require('./models');

// ******** Create Subscription
Subscription.create({
    title: 'cloud storage',
    cost: '4.95',
    subDate: '10-22-19',
})
    .then(function (newSubscription) {
        console.log(newSubscription.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating subscription', error)
    })


// Subscription.create({
//     title: 'photo sync',
//     cost: '5.95',
//     subDate: '10-2-20',
// })
//     .then(function (newSubscription) {
//         console.log(newSubscription.toJSON());
//     })
//     .catch(function (error) {
//         console.log('Error creating subscription', error)
//     })

// Subscription.create({
//     title: 'hbo',
//     cost: '8.95',
//     subDate: '1-20-15',
// })
//     .then(function (newSubscription) {
//         console.log(newSubscription.toJSON());
//     })
//     .catch(function (error) {
//         console.log('Error creating subscription', error)
//     })

// Subscription.create({
//     title: 'showmax',
//     cost: '6.95',
//     subDate: '11-2-20',
// })
//     .then(function (newSubscription) {
//         console.log(newSubscription.toJSON());
//     })
//     .catch(function (error) {
//         console.log('Error creating subscription', error)
//     })

// Subscription.create({
//     title: 'Super Cool Subscription',
//     cost: '8.95',
//     subDate: '1-2-20',
// })
//     .then(function (newSubscription) {
//         console.log(newSubscription.toJSON());
//     })
//     .catch(function (error) {
//         console.log('Error creating subscription', error)
//     })

// Subscription.create({
//     title: 'cool app 1',
//     cost: '5.95',
//     subDate: '11-1-20',
// })
//     .then(function (newSubscription) {
//         console.log(newSubscription.toJSON());
//     })
//     .catch(function (error) {
//         console.log('Error creating subscription', error)
//     })

// Subscription.create({
//     title: 'cool app 2',
//     cost: '5.95',
//     subDate: '10-1-21',
// })
//     .then(function (newSubscription) {
//         console.log(newSubscription.toJSON());
//     })
//     .catch(function (error) {
//         console.log('Error creating subscription', error)
//     })

// Subscription.create({
//     title: 'super cool app 2',
//     cost: '6.95',
//     subDate: '8-2-20',
// })
//     .then(function (newSubscription) {
//         console.log(newSubscription.toJSON());
//     })
//     .catch(function (error) {
//         console.log('Error creating subscription', error)
//     })

Subscription.create({
    title: 'cool app 4',
    cost: '1.95',
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
    cost: '8.95',
    subDate: '3-2-18',
})
    .then(function (newSubscription) {
        console.log(newSubscription.toJSON());
    })
    .catch(function (error) {
        console.log('Error creating subscription', error)
    })