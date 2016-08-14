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
  this.route('blog', {
    path: '/blog',
    template: 'blog'
  });
});
