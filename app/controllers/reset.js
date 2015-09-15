import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		resetPassword: function(newPassword, confirmPassword) {
			if(newPassword === confirmPassword) {
				$.ajax('http://localhost:3000/api/reset', {
					type: 'PUT',
					data: {newPassword: newPassword, token: this.get('model')},
					dataType: "JSON",
					success: function() {
					alert('Password has been Changed');
				}
			});
			}
			else {
				alert("New Password and Confirm Password didn't match");
			}
		}
	}
});