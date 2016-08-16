Template.login.events({
    'submit .login-user': function(event) {
        var email = event.target.email.value;
        var password = event.target.password.value;

        Meteor.loginWithPassword(email, password, function(err) {
            if (err) {
                event.target.email.value = email;
                event.target.password.value = password;
                FlashMessages.sendError(err.reason);
            } else {
                FlashMessages.sendSuccess('You are logged in!');
                Router.go('/admin/projects');
            }
        });
        event.target.email.value = '';
        event.target.password.value = '';

        return false;
    }
});

Template.layout.events({
    'click .logout-user': function(event){
        Meteor.logout(function(err){
            if (err) {
                FlashMessages.sendError(err.reason);
            } else {
                FlashMessages.sendSuccess('You are logged out by now!');
                Router.go('/'); // Redirect to homepage
            }
        });
        return false; // Prevent submit
    }
});

Template.registerHelper('formatDate', function(date){
	return moment(date).format('Do MMMM YYYY, h:mm:ss a');
});
