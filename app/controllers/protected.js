import Ember from 'ember';


export default Ember.Controller.extend({

	actions: {
		sendOTP: function(number) {
			Ember.$.ajax('http://localhost:3000/api/send', {
				type: "POST",
				data: {"number": number},
				dataType: "JSON",
				success: function() {
					alert('OTP has been sent to your mobile number');
				}
			});
		},

		verify: function(code) {
			Ember.$.ajax('http://localhost:3000/api/verify', {
				type: "POST",
				data: {"code": code},
				dataType: "JSON",
				success: function() {
					alert('Thanks. Your mobile number has been verified');
				}
			});		
		}

	}
});