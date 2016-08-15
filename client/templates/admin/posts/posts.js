Template.add_post.events({
    'submit .add_post_form': function(){
        var title = event.target.title.value;
        var body - event.target.body.value;

        // Insert the post
        Posts.insert({
            title: title,
            body: body
        });

        FlashMessages.sendSucess('Post has been successfully added!');
        Router.go('/admin/posts');

        // Prevent submit
        return false;
    }
});
