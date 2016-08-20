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
  this.route('contact');

  // BLOG
  this.route('blog', {
    path: '/blog',
    template: 'blog',
    data: function() {
        templateData = {
            posts: Posts.find()
        };
        return templateData;
    }
  });

  this.route('blog_post', {
      path: '/blog/post/:id',
      template: 'blog_post',
      data: function() {
          var postId = this.params.id;
          return Posts.findOne({_id: postId});
      }
  });

  this.route('list_posts', {
    path: '/admin/posts',
    template: 'list_posts',
    data: function() {
        templateData = {
            posts: Posts.find()
        };
        return templateData;
    },
    onBeforeAction: function() {
        if (Meteor.user() === null) {
            Router.go('/');
        }
        this.next();
    }
  });

  this.route('add_post', {
    path: '/admin/posts/add',
    template: 'add_post',
    onBeforeAction: function() {
        if (Meteor.user() === null) {
            Router.go('/');
        }
        this.next();
    }
  });

  this.route('edit_post', {
    path: '/admin/posts/:id/edit',
    template: 'edit_post',
    data: function() {
        var postId = this.params.id;
        return Posts.findOne({_id: postId});
    },
    onBeforeAction: function() {
        if (Meteor.user() === null) {
            Router.go('/');
        }
        this.next();
    }
  });

  // PROJECTS
  this.route('work', {
      path: '/work',
      template: 'work',
      data: function() {
          templateData = {
              projects: Projects.find()
          };
          return templateData;
      }
  });

  this.route('project', {
      path: '/project/:id',
      template: 'project',
      data: function() {
          var projectId = this.params.id;
          return Projects.findOne({_id: projectId});
      }
  });

  this.route('list_projects', {
    path: '/admin/projects',
    template: 'list_projects',
    data: function() {
        templateData = {
            projects: Projects.find()
        };
        return templateData;
    },
    onBeforeAction: function() {
        if (Meteor.user() === null) {
            Router.go('/');
        }
        this.next();
    }
  });

  this.route('add_project', {
    path: '/admin/projects/add',
    template: 'add_project',
    onBeforeAction: function() {
        if (Meteor.user() === null) {
            Router.go('/');
        }
        this.next();
    }
  });

  this.route('edit_project', {
    path: '/admin/projects/:id/edit',
    template: 'edit_project',
    data: function() {
        var projectId = this.params.id;
        return Projects.findOne({_id: projectId});
    },
    onBeforeAction: function() {
        if (Meteor.user() === null) {
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
