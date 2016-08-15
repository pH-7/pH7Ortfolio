// DB
Posts = new Mongo.Collection('posts');

Posts.attachShema(new SimpleSchema({
    title: {
        type: String,
        max: 100
    },
    body: {
        type: String,
        max: 500,
    },
    userId: {
        type: String,
        autoValue: function() {
            return Meteor.userId();
        }
    },
    updateAt: {
        type: Date,
        autoValue: function() {
            return new Date();
        }
    }
}));
