import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		userEmail: function() {
			$.ajax('http://localhost:3000/api/reset', {
				type: 'POST',
				data: this.getProperties('email'),
				success: function() {
				alert("An email has been sent to your registered email address");
				}
			});
		}
	}
});