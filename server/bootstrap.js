// Create automatically a user if noone is found
Meteor.startup(function() {
    if (Meteor.users.find().count() === 0) {
        Accounts.createUser({
            // Default admin login
            email: 'pierrehenrysoria@test.com',
            password: '123456'
        });
    }
});
