Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function(){
  this.route('home', {
    path: '/',
    template: 'home'
  });

  // Other routes
  this.route('about');

  this.route('work');

  this.route('contact');

  // BLOG
  this.route('blog', {
    path: '/blog',
    template: 'blog'
  });

  this.route('list_posts', {
    path: '/admin/posts',
    template: 'list_posts',
    onBeforeAction: function() {
        if (Meteor.user() == null) {
            Router.go('/');
        }
        this.next();
    }
  });

  this.route('add_post', {
    path: '/admin/posts/add',
    template: 'add_post',
    onBeforeAction: function() {
        if (Meteor.user() == null) {
            Router.go('/');
        }
        this.next();
    }
  });

  this.route('edit_post', {
    path: '/admin/posts/:id/edit',
    template: 'edit_post',
    onBeforeAction: function() {
        if (Meteor.user() == null) {
            Router.go('/');
        }
        this.next();
    }
  });

  // PROJECTS
  this.route('list_projects', {
    path: '/admin/projects',
    template: 'list_projects',
    onBeforeAction: function() {
        if (Meteor.user() == null) {
            Router.go('/');
        }
        this.next();
    }
  });

  this.route('add_project', {
    path: '/admin/projects/add',
    template: 'add_project',
    onBeforeAction: function() {
        if (Meteor.user() == null) {
            Router.go('/');
        }
        this.next();
    }
  });

  this.route('edit_project', {
    path: '/admin/projects/:id/edit',
    template: 'edit_project',
    onBeforeAction: function() {
        if (Meteor.user() == null) {
            Router.go('/');
        }
        this.next();
    }
  });

  // LOGIN
  this.route('login', {
    path: '/admin',
    template: 'login'
  });
});
