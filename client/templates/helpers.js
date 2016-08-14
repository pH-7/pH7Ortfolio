Template.login.events({
    'submit .login-user': function(event) {
        var email = event.target.email.value;
        var password = event.target.password.value;

        Meteor.loginWithPassword(email, password, function(err) {
            if (err) {
                event.target.email.value = email;
                event.target.password.value = password;
                FlashMessages.setError(err.reason);
            } else {
                FlashMessages.setError('You are now logged in!');
                Router.go('/admin/projects');
            }
        });
        event.target.email.value = '';
        event.target.password.value = '';

        return false;
    })
})
