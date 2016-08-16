// Create automatically a user if noone is found
Meteor.startup(function() {
    if (Meteor.users.find().count() === 0) {
        Accounts.createUser({
            // Default admin login
            email: 'pierrehenrysoria@h7.me',
            password: '123456'
        });
    }
});
