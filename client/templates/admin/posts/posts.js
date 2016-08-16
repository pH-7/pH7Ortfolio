Template.add_post.events({
    'submit .add_post_form': function(){
        var title = event.target.title.value;
        var body = event.target.body.value;

        // Insert the post
        Posts.insert({
            title: title,
            body: body
        });

        FlashMessages.sendSuccess('Post successfully added!');
        Router.go('/admin/posts');

        // Prevent submit
        return false;
    }
});

Template.edit_post.events({
    'submit .edit_post_form': function(event) {
        var title = event.target.title.value;
        var body = event.target.body.value;

        // Update the post
        Posts.update({
            _id: this._id
            }, {
                $set: {title: title, body: body}
        });

        FlashMessages.sendSuccess('Post successfully updated!');
        Router.go('/admin/posts');

        // Prevent submit
        return false;
    }
});

Template.list_posts.events({
    'click .delete_post': function(event) {
        if (confirm('Do you really want to delete "' + this.title + '" post?')) {
            Posts.remove(this._id);
            FlashMessages.sendSuccess('Post successfully deleted!');

            return false;
        }
    }
});
