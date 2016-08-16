// DB
Posts = new Mongo.Collection('posts');

Posts.attachSchema(new SimpleSchema({
    title: {
        type: String,
        max: 50
    },
    body: {
        type: String,
        max: 600,
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
