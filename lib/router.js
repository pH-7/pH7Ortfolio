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
    template: 'list_posts'
  });

  this.route('add_post', {
    path: '/admin/posts/add',
    template: 'add_post'
  });

  this.route('edit_post', {
    path: '/admin/posts/:id/edit',
    template: 'edit_post'
  });

  // PROJECTS
  this.route('list_projects', {
    path: '/admin/projects',
    template: 'list_projects'
  });

  this.route('add_project', {
    path: '/admin/projects/add',
    template: 'add_project'
  });
  this.route('edit_project', {
    path: '/admin/projects/:id/edit',
    template: 'edit_project'
  });
});
