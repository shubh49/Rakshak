import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
	authenticator: "simple-auth-authenticator:token"

});	

// 	// actions:{
// 	// 	authenticate: function() {
// 	// 		var data = this.getProperties('username', 'password');
// 	// 		console.log(data);
// 	// 		return this.get('session').authenticate('simple-auth-authenticator:token', data);
// 	// 	}
// 	// }
// export default Ember.Controller.extend({
// 	actions: {
// 		authenticate: function() {
// 			var data = this.getProperties('email', 'password');
// 			return this.get('session').authenticate('simple-auth-authenticator:oauth2-password-grant', data);
// 		}
// 	}
// });