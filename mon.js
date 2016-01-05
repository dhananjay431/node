	var mongo = require('mongodb-wrapper')
	var db = mongo.db('localhost', 27017, 'test')
	db.collection('posts')
	
	db.posts.save({title: "A new post", body: "Here is some text"}, function(err, post) {
		db.posts.findOne({_id: doc._id}, function(err, post) {
			db.posts.find().limit(1).toArray(function(err, posts) {
				// posts[0].title == "A new post"
			})
		})
	})   