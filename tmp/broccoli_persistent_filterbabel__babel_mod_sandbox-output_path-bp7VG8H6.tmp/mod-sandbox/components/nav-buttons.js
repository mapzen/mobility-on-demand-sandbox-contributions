define('mod-sandbox/components/nav-buttons', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		next: null,
		back: null,
		actions: {
			sendChangeRoute: function sendChangeRoute(route) {
				this.sendAction('sendChangeRoute', route);
			}
		}
	});
});