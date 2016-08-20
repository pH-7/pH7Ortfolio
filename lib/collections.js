// DB

// Blog
Posts = new Mongo.Collection('posts');

Posts.attachSchema(new SimpleSchema({
    title: {
        type: String,
        max: 50
    },
    body: {
        type: String,
        max: 1000,
    },
    userId: {
        type: String,
        autoValue: function() {
            return Meteor.userId();
        }
    },
    updatedAt: {
        type: Date,
        autoValue: function() {
            return new Date();
        }
    }
}));

// Projects
Projects = new Mongo.Collection('projects');

Projects.attachSchema(new SimpleSchema({
    name: {
        type: String,
        max: 50
    },
    description: {
        type: String,
        max: 1000,
    },
    client: {
        type: String,
        max: 100
    },
    projectDate: {
        type: String,
        max: 100,
        optional: true
    },
    type: {
        type: String,
        max: 100
    },
    userId: {
        type: String,
        autoValue: function() {
            return Meteor.userId();
        }
    },
    updatedAt: {
        type: Date,
        autoValue: function() {
            return new Date();
        }
    },
    // Images
    projectImage1: {
        type: String,
        max: 200,
        optional: true
    },
    projectImage2: {
        type: String,
        max: 200,
        optional: true
    },
    projectImage3: {
        type: String,
        max: 200,
        optional: true
    },
    projectImage4: {
        type: String,
        max: 200,
        optional: true
    }
}));

ProjectImages = new FS.Collection('ProjectImages', {
    stores: [new FS.Store.GridFS('ProjectImages')]
});
