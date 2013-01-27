define(["jquery", "underscore", "backbone"], function ($, _, Backbone) {

	var Todo = Backbone.Model.extend({
		defaults: {
			name: "",
			completed: false
		},
		isCompleted: function() {
			return this.get('completed');
		}

	});

	return Todo;
});
